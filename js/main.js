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

  // Quote form -> sent by Web3Forms (https://web3forms.com) straight to sales@deltamaple.com.
  // The access key only lets this form send TO the Delta Maple inbox, so it is safe to keep in the page.
  // If the key is ever removed, the form falls back to opening the visitor's email app.
  var FORM_KEY = window.DM_FORM_KEY || '';
  var err = document.getElementById('form-error');
  var fail = document.getElementById('form-fail');
  var doneBox = document.getElementById('form-done');
  var formBody = document.getElementById('form-body');
  var submitBtn = document.getElementById('form-submit');

  function collect() {
    var f = form.elements, fr = isFr();
    var productLabel = f.product.options[f.product.selectedIndex].text;
    return {
      name: f.name.value.trim(), company: f.company.value.trim(), email: f.email.value.trim(),
      city: f.city.value.trim(), product: productLabel, volume: f.volume.value.trim(),
      message: f.message.value.trim(), lang: fr ? 'FR' : 'EN'
    };
  }

  function showDone() {
    formBody.hidden = true;
    doneBox.hidden = false;
    doneBox.focus();
  }

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
    fail.hidden = true;
    if (firstBad) { firstBad.focus(); return; }
    if (f.botcheck.checked) { showDone(); return; } // spam bot: pretend success, send nothing

    var d = collect();
    var subject = 'Quote request: ' + d.product + ' (' + d.company + ')';

    if (!FORM_KEY) {
      var lines = ['Name: ' + d.name, 'Company: ' + d.company, 'Email: ' + d.email, 'Delivery city: ' + d.city,
        'Product: ' + d.product, 'Approximate volume: ' + d.volume, '', d.message];
      window.location.href = 'mailto:sales@deltamaple.com?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(lines.join('\n'));
      return;
    }

    submitBtn.setAttribute('aria-busy', 'true');
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        access_key: FORM_KEY,
        subject: subject,
        from_name: 'Delta Maple website',
        replyto: d.email,
        'Name': d.name, 'Company': d.company, 'Email': d.email, 'Delivery city': d.city,
        'Product': d.product, 'Approximate volume': d.volume, 'Details': d.message, 'Language': d.lang,
        botcheck: false
      })
    }).then(function (r) { return r.json().then(function (j) { return r.ok && j.success; }); })
      .then(function (ok) {
        if (ok) { form.reset(); showDone(); } else { fail.hidden = false; }
      })
      .catch(function () { fail.hidden = false; })
      .then(function () { submitBtn.removeAttribute('aria-busy'); });
  });

  document.getElementById('form-again').addEventListener('click', function () {
    doneBox.hidden = true;
    formBody.hidden = false;
    form.elements.name.focus();
  });

  form.addEventListener('input', function (e) {
    if (e.target.classList.contains('invalid') && e.target.value.trim()) {
      e.target.classList.remove('invalid'); e.target.setAttribute('aria-invalid', 'false');
    }
  });
})();
