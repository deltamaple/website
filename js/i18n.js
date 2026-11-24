/* Delta Maple — English / French switch.
   English lives in index.html. French lives here, keyed by data-i18n.
   To edit French text, change the strings below. */
(function () {
  var FR = {
    'skip': 'Aller au contenu',
    'nav.products': 'Produits',
    'nav.quality': 'Qualité',
    'nav.how': 'Fonctionnement',
    'nav.why': 'Pourquoi nous',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'cta.quote': 'Demander un prix',
    'cta.products': 'Voir nos produits',
    'cta.spec': 'Demander une fiche technique',
    'cta.talk': 'Parlons-en',

    'hero.eyebrow': "Produits d'Égypte, livrés au Canada",
    'hero.title': "Le meilleur des récoltes égyptiennes, <em>livré au Canada.</em>",
    'hero.lede': "Dattes, fraises IQF et légumes surgelés de conditionneurs égyptiens sélectionnés. Chaque lot est inspecté avant l'expédition et chaque prix est indiqué livré au Canada, en dollars canadiens.",
    'hero.p1': 'Conditionneurs sélectionnés et inspectés',
    'hero.p2': 'Prix livrés en CAD',
    'hero.p3': 'Présents en Égypte et au Canada',
    'hero.s1k': 'Origine',
    'hero.s1v': 'Conditionneurs égyptiens',
    'hero.s2k': 'Contrôle',
    'hero.s2v': "Avant l'expédition",
    'hero.s3k': 'Prix',
    'hero.s3v': 'Livré, en CAD',

    'strip.label': 'Conçu pour',
    'strip.a': 'Importateurs',
    'strip.b': 'Distributeurs',
    'strip.c': 'Épiciers',
    'strip.d': 'Restauration',
    'strip.e': 'Transformateurs',

    'products.kicker': 'Produits',
    'products.title': "L'alimentaire d'abord. Trois gammes que nous connaissons bien.",
    'products.lede': "Nous nous concentrons sur quelques produits égyptiens où la qualité et la valeur sont excellentes, et nous les proposons livrés chez vous au Canada.",
    'products.note': "Vous cherchez un produit qui n'est pas listé ? Dites-nous ce qu'il vous faut et nous vérifierons auprès de nos conditionneurs.",
    'spec.varieties': 'Variété',
    'spec.formats': 'Formats',
    'spec.season': 'Disponibilité',
    'spec.cuts': 'Coupes',
    'spec.grade': 'Calibre',
    'spec.range': 'Gamme',
    'spec.label': 'Étiquettes',
    'p1.title': 'Dattes',
    'p1.text': "Des dattes égyptiennes moelleuses et riches, pour les rayons, le vrac et les pics saisonniers comme le Ramadan.",
    'p1.v': 'Medjool',
    'p1.f': 'Formats sur demande',
    'p2.title': 'Fraises IQF',
    'p2.text': 'Fraises surgelées individuellement pour les transformateurs, la restauration et les marques de distributeur.',
    'p2.v': 'Entières, tranchées ou en dés',
    'p2.f': 'Formats de caisses et sacs sur demande',
    'p2.s': 'Précisé dans votre cahier des charges',
    'p3.title': 'Légumes surgelés',
    'p3.text': "Légumes IQF, dont des spécialités égyptiennes difficiles à trouver ailleurs.",
    'p3.v': 'Pois, haricots verts, gombo, mloukhia, artichaut, légumes mélangés',
    'p3.f': 'Formats sur demande',

    'quality.kicker': 'Qualité et inspection',
    'quality.title': "Contrôlé en Égypte, avant même d'arriver chez vous.",
    'quality.lede': "Nous travaillons uniquement avec des conditionneurs que nous avons évalués, et nous vérifions chaque lot par rapport au cahier des charges convenu avant qu'il quitte l'Égypte. S'il n'est pas conforme, il ne part pas.",
    'q1.t': 'Conditionneurs sélectionnés',
    'q1.d': "Nous visitons et évaluons les conditionneurs en Égypte avant d'acheter : installations, hygiène, documentation et historique.",
    'q2.t': 'Cahier des charges convenu',
    'q2.d': "Variété, calibre, taille, humidité, emballage et étiquetage sont écrits et convenus avec vous dès le départ.",
    'q3.t': 'Inspection avant expédition',
    'q3.d': 'Chaque lot est inspecté et photographié avant le chargement, et les résultats vous sont transmis.',
    'q4.t': 'Chaîne du froid et documents',
    'q4.d': "Conteneurs réfrigérés pour les surgelés, et documents d'exportation et d'importation préparés pour l'entrée au Canada.",

    'how.kicker': 'Fonctionnement',
    'how.title': 'De la demande à la livraison, en quatre étapes.',
    's1.t': 'Dites-nous ce qu’il vous faut',
    's1.d': 'Produit, volume, format et ville de livraison. Un court courriel suffit pour commencer.',
    's2.t': 'Recevez un prix livré',
    's2.d': 'Un seul prix en CAD, livré au Canada. Sans surprise sur le fret ni le taux de change.',
    's3.t': 'Approuvez le cahier des charges',
    's3.d': 'Examinez le cahier des charges écrit avant tout conditionnement. Échantillons sur demande, selon disponibilité.',
    's4.t': 'Inspecté, expédié, livré',
    's4.d': "Nous inspectons, expédions et vous tenons informé jusqu'à l'arrivée de la marchandise.",

    'why.kicker': 'Pourquoi Delta Maple',
    'why.title': "Un seul partenaire des deux côtés de l'océan.",
    'why.lede': "Acheter directement à l'étranger, c'est souvent gérer soi-même fournisseurs, fret, douane et devises. Nous nous en chargeons : vous traitez avec un seul partenaire responsable au Canada.",
    'w1.t': 'Présents en Égypte et au Canada',
    'w1.d': 'Sur place à la source, et proches de vous, dans votre fuseau horaire.',
    'w2.t': 'Prix livrés en CAD',
    'w2.d': 'Nos prix incluent la livraison jusqu’à vous, pour comparer à armes égales.',
    'w3.t': 'Une qualité vérifiable',
    'w3.d': "Cahier des charges convenu, inspection avant l'expédition et rapports consultables.",
    'w4.t': 'Excellente valeur à la source',
    'w4.d': "L'Égypte est un grand producteur de dattes, de fraises et de légumes. Nous achetons directement aux conditionneurs.",

    'contact.kicker': 'Contact',
    'contact.title': 'Demandez un prix.',
    'contact.lede': 'Indiquez-nous le produit, le volume approximatif et la destination au Canada. Nous vous répondrons avec un prix livré.',
    'contact.sales': 'Prix et ventes',
    'contact.orders': 'Commandes',
    'contact.info': 'Général',
    'contact.direct': 'Hashim, en direct',
    'contact.ca': 'Canada',
    'contact.caAddr': 'Au service des acheteurs partout au Canada',
    'contact.eg': 'Égypte',
    'contact.egAddr': 'Approvisionnement et inspection chez les conditionneurs',

    'form.title': 'Demande de prix',
    'form.name': 'Nom',
    'form.company': 'Entreprise',
    'form.email': 'Courriel',
    'form.city': 'Ville de livraison',
    'form.product': 'Produit',
    'form.other': 'Autre',
    'form.volume': 'Volume approximatif',
    'form.volumePh': 'ex. 1 palette, 5 t, 1 conteneur',
    'form.msg': 'Détails',
    'form.msgPh': 'Formats, calendrier, autres précisions',
    'form.send': 'Envoyer la demande',
    'form.note': 'Envoyé de façon sécurisée à notre équipe commerciale. Nous utilisons vos coordonnées uniquement pour répondre à votre demande.',
    'form.fail': 'Désolé, votre demande n\u2019a pas pu être envoyée. Réessayez, ou écrivez à <a href="mailto:sales@deltamaple.com">sales@deltamaple.com</a>.',
    'form.doneT': 'Merci, votre demande est bien arrivée.',
    'form.again': 'Envoyer une autre demande',
    'form.error': 'Veuillez indiquer votre nom, votre entreprise et un courriel valide.',


    'chip.a': 'Medjool',
    'chip.c': 'Pois, gombo, mloukhia et plus',
    'tag.p1': 'Détail · Vrac · Ramadan',
    'tag.p2': 'Transformation · Restauration',
    'tag.p3': 'Détail · Restauration',
    'products.noteLink': 'Écrivez-nous',

    'docs.title': 'Avec chaque commande, vous recevez',
    'docs.lede': "Des documents clairs, pour savoir exactement ce que vous achetez et pouvoir le montrer à vos clients et aux inspecteurs.",
    'docs.a': 'Un cahier des charges écrit',
    'docs.b': "Un rapport d'inspection avant expédition, avec photos",
    'docs.c': "Les documents d'exportation et d'importation pour l'entrée au Canada",
    'docs.d': 'Un prix livré unique en CAD, convenu avant votre engagement',

    'faq.kicker': 'FAQ',
    'faq.title': 'Les questions de nos acheteurs.',
    'faq.lede': 'Votre question n’y est pas ? Écrivez à <a href="mailto:sales@deltamaple.com">sales@deltamaple.com</a> et nous vous répondrons.',
    'f1.q': 'Vos prix incluent-ils la livraison ?',
    'f1.a': 'Oui. Nous indiquons nos prix en dollars canadiens, livrés dans la ville de votre choix, pour que vous puissiez les comparer à ce que vous payez aujourd\u2019hui. Votre devis précise exactement ce qui est inclus.',
    'f2.q': 'Quelle est la commande minimale ?',
    'f2.a': 'Cela dépend du produit et du format. Indiquez-nous votre volume et nous vous dirons ce qui est possible.',
    'f3.q': 'Puis-je recevoir des échantillons ?',
    'f3.a': 'Échantillons sur demande, selon disponibilité. Dans tous les cas, vous approuvez le cahier des charges écrit avant tout conditionnement.',
    'f4.q': 'Proposez-vous la marque de distributeur ?',
    'f4.a': 'Cela dépend du conditionneur et du volume. Demandez-nous et nous vérifierons pour votre produit.',
    'f5.q': 'Quel est le délai de livraison ?',
    'f5.a': 'Le délai dépend du produit, de la saison et du calendrier maritime. Nous vous donnons une date avec votre prix.',
    'f6.q': 'Quelles conditions de paiement proposez-vous ?',
    'f6.a': 'Les conditions de paiement sont convenues avec chaque client et précisées dans votre devis.',

    'form.sub': 'Une minute suffit. Tous les champs sauf Détails nous aident à répondre plus vite.',
    'form.done': 'Nous avons bien reçu votre demande de prix et répondrons à l\u2019adresse indiquée avec un prix livré.',
    'footer.ctaT': 'Envie de comparer un prix livré ?',
    'footer.where': 'Canada · Égypte',
    'route.eg': 'ÉGYPTE',
    'footer.tag': "Dattes et produits surgelés d'Égypte, livrés au Canada.",
    'footer.legal': '[Raison sociale et numéro d’entreprise à ajouter]'
  };

  var META = {
    en: { title: document.title, toggle: 'FR', aria: 'Passer au français' },
    fr: { title: "Delta Maple | Dattes et produits surgelés d'Égypte, livrés au Canada", toggle: 'EN', aria: 'Switch to English' }
  };

  var nodes = document.querySelectorAll('[data-i18n]');
  var phNodes = document.querySelectorAll('[data-i18n-ph]');
  // Keep the English originals so we can switch back.
  nodes.forEach(function (el) { el.__en = el.innerHTML; });
  phNodes.forEach(function (el) { el.__en = el.getAttribute('placeholder'); });

  function apply(lang) {
    var fr = lang === 'fr';
    nodes.forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      el.innerHTML = fr && FR[k] ? FR[k] : el.__en;
    });
    phNodes.forEach(function (el) {
      var k = el.getAttribute('data-i18n-ph');
      el.setAttribute('placeholder', fr && FR[k] ? FR[k] : el.__en);
    });
    document.documentElement.lang = lang;
    document.title = META[lang].title;
    var t = document.getElementById('lang-toggle');
    t.textContent = META[lang].toggle;
    t.setAttribute('aria-label', META[lang].aria);
    try { localStorage.setItem('dm-lang', lang); } catch (e) {}
  }

  var saved = null;
  try { saved = localStorage.getItem('dm-lang'); } catch (e) {}
  var fromUrl = /[?&]lang=fr\b/.test(location.search) ? 'fr' : null;
  var initial = fromUrl || saved || ((navigator.language || '').toLowerCase().indexOf('fr') === 0 ? 'fr' : 'en');
  if (initial === 'fr') apply('fr');

  document.getElementById('lang-toggle').addEventListener('click', function () {
    apply(document.documentElement.lang === 'fr' ? 'en' : 'fr');
  });
})();
