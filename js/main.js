/* Delta Maple — small site behaviours. No libraries. */
(function () {
  var root = document.documentElement;
  root.classList.add('js');
  var isFr = function () { return root.lang === 'fr'; };

  // Year in footer
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Header shadow + mobile CTA visibility on scroll
  var header = document.querySelector('.site-header');
  var hero = document.querySelector('.hero');
  var contact = document.getElementById('contact');
  var mcta = document.getElementById('mobile-cta');
  var mctaLink = mcta.querySelector('a');
  var contactVisible = false;
  function onScroll() {
    header.classList.toggle('scrolled', window.scrollY > 8);
    var show = window.scrollY > hero.offsetHeight * 0.8 && !contactVisible;
    mcta.classList.toggle('show', show);
    mcta.setAttribute('aria-hidden', String(!show));
    mctaLink.tabIndex = show ? 0 : -1;
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  // Mobile menu
  var toggle = document.getElementById('menu-toggle');
  var links = document.getElementById('nav-links');
  function setMenu(open) {
    document.body.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  }
  toggle.addEventListener('click', function () { setMenu(!document.body.classList.contains('menu-open')); });
  links.addEventListener('click', function (e) { if (e.target.tagName === 'A') setMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });

  if ('IntersectionObserver' in window) {
    // Reveal on scroll, with a small stagger for items in the same row
    var io = new IntersectionObserver(function (entries) {
      var i = 0;
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.style.setProperty('--rd', (i++ * 90) + 'ms');
          en.target.classList.add('in');
          io.unobserve(en.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });

    // Highlight the current section in the nav
    var navLinks = {};
    links.querySelectorAll('a').forEach(function (a) { navLinks[a.getAttribute('href').slice(1)] = a; });
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        var a = navLinks[en.target.id];
        if (en.target === contact) { contactVisible = en.isIntersecting; onScroll(); }
        if (!a) return;
        if (en.isIntersecting) {
          Object.keys(navLinks).forEach(function (k) { navLinks[k].classList.remove('active'); navLinks[k].removeAttribute('aria-current'); });
          a.classList.add('active'); a.setAttribute('aria-current', 'true');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    document.querySelectorAll('main section[id]').forEach(function (s) { spy.observe(s); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
  }
  onScroll();

  // "Ask for a spec sheet" pre-selects the product in the form
  var form = document.getElementById('quote-form');
  document.querySelectorAll('[data-product]').forEach(function (a) {
    a.addEventListener('click', function () {
      form.elements.product.value = a.getAttribute('data-product');
      var msg = form.elements.message;
      if (!msg.value) msg.value = isFr() ? 'Merci de m’envoyer la fiche technique.' : 'Please send me the spec sheet.';
    });
  });

  // Copy-to-clipboard for email addresses
  document.querySelectorAll('.copy').forEach(function (b) {
    b.addEventListener('click', function () {
      var text = b.getAttribute('data-copy');
      var done = function () {
        b.setAttribute('data-msg', isFr() ? 'Copié' : 'Copied');
        b.classList.add('copied');
        setTimeout(function () { b.classList.remove('copied'); }, 1600);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, function () {});
      }
    });
  });

  // Quote form -> opens the visitor's email app, addressed to sales@.
  // To use a form service later (e.g. Formspree, Netlify Forms), set an action on the <form> and remove this handler.
  var err = document.getElementById('form-error');
  var doneBox = document.getElementById('form-done');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var f = form.elements;
    var firstBad = null;
    ['name', 'company', 'email'].forEach(function (n) {
      var el = f[n];
      var bad = !el.value.trim() || (n === 'email' && !/^\S+@\S+\.\S+$/.test(el.value.trim()));
      el.classList.toggle('invalid', bad);
      el.setAttribute('aria-invalid', String(bad));
      if (bad && !firstBad) firstBad = el;
    });
    err.hidden = !firstBad;
    if (firstBad) { firstBad.focus(); return; }

    var fr = isFr();
    var productLabel = f.product.options[f.product.selectedIndex].text;
    var subject = (fr ? 'Demande de prix : ' : 'Quote request: ') + productLabel + ' (' + f.company.value.trim() + ')';
    var lines = [
      (fr ? 'Nom : ' : 'Name: ') + f.name.value.trim(),
      (fr ? 'Entreprise : ' : 'Company: ') + f.company.value.trim(),
      (fr ? 'Courriel : ' : 'Email: ') + f.email.value.trim(),
      (fr ? 'Ville de livraison : ' : 'Delivery city: ') + f.city.value.trim(),
      (fr ? 'Produit : ' : 'Product: ') + productLabel,
      (fr ? 'Volume approximatif : ' : 'Approximate volume: ') + f.volume.value.trim(),
      '',
      f.message.value.trim()
    ];
    doneBox.hidden = false;
    window.location.href = 'mailto:sales@deltamaple.com?subject=' + encodeURIComponent(subject) +
      '&body=' + encodeURIComponent(lines.join('\n'));
  });
  form.addEventListener('input', function (e) {
    if (e.target.classList.contains('invalid') && e.target.value.trim()) {
      e.target.classList.remove('invalid'); e.target.setAttribute('aria-invalid', 'false');
    }
  });
})();
