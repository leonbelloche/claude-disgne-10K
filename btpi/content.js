/* ═══════════════════════════════════════════════════════════
   TEMPLATE « SITE IMMERSIF » — content.js
   ► L'UNIQUE FICHIER À RÉÉCRIRE pour produire un nouveau site.
   Renommer en content.js dans le projet cible. La partie
   « injection » en bas de fichier est le moteur de remplissage :
   la copier TELLE QUELLE, ne réécrire que window.SITE_CONTENT.

   Schéma narratif (rôle de conversion de chaque bloc) :
   1. ACCROCHE       — hook : promesse + identité en 3 secondes
   2. POSITIONNEMENT — positioning : ce que je fais, pour qui, où
   3. DÉMARCHE       — manifesto : pourquoi moi (différenciation)
   4. PREUVE         — proof : réalisations (masonry) OU features (bento)
   5. DEVISE         — motto : 3 mots-clés géants + légendes
   6-7. PROCESSUS    — universes : « X en 3 étapes » + visuels posés
   8. PREUVE SOCIALE — testimonial : un client parle
   9. OBJECTIONS     — objections : « Pas de… Juste… »
   10. CONVERSION    — contact : e-mail + réassurance
   ═══════════════════════════════════════════════════════════ */

window.SITE_CONTENT = {

  brand: {
    name: 'BTPI',                                   // wordmark (header, loader, footer géant)
    title: 'BTPI — Sprinklers & RIA en sites industriels',   // <title> SEO
    description: 'BTPI conçoit, installe et entretient des réseaux sprinklers et des RIA en sites industriels en activité, notamment dans l’agroalimentaire. Grand Est, Hauts-de-France et au-delà, depuis 2002.',
    kicker: 'BTPI — SPRINKLERS & RIA EN SITES INDUSTRIELS',
    copyright: '© 2026 — NORROY-LÈS-PONT-À-MOUSSON, FRANCE',
    signature: 'FAITE AVEC DE L’EAU SOUS PRESSION',
    socials: [
      { label: 'ITINÉRAIRE ↗', url: 'https://www.google.com/maps/search/?api=1&query=BTPI%2015%20Clos%20de%20Baine%2054700%20Norroy-l%C3%A8s-Pont-%C3%A0-Mousson' },
      { label: 'MENTIONS LÉGALES', url: 'mentions-legales.html' }
    ]
  },

  /* 2 ancres + CTA du header — un mot chacun, CAPS */
  nav: { proof: 'MÉTIERS', universes: 'MÉTHODE', cta: 'DEVIS' },

  /* 1 · ACCROCHE — « line1 / line2a [image qui naît et devient
     plein écran] line2b ». Total line2a+line2b : court (nowrap). */
  hook: {
    line1: 'Avant les pompiers,',
    line2a: 'il y a',
    line2b: 'nos réseaux.',
    image: 'images/hero.jpg',                       // 3:2 — l'entrepôt où les sprinklers se sont déclenchés
    imageAlt: 'Allée d’entrepôt où les sprinklers se sont déclenchés au-dessus des racks',
    floaters: [                                     // 10 visuels du pasteboard (portrait 2:3 / paysage 3:2)
      'images/fl-01.jpg',
      'images/fl-02.jpg',
      'images/fl-03.jpg',
      'images/fl-04.jpg',
      'images/fl-05.jpg',
      'images/fl-06.jpg',
      'images/fl-07.jpg',
      'images/fl-08.jpg',
      'images/fl-09.jpg',
      'images/fl-10.jpg'
    ]
  },

  /* 2 · POSITIONNEMENT — ≤ 42 caractères (affiché nowrap, en blanc
     sur l'image plein écran) */
  positioning: 'Sprinklers et RIA — en sites industriels.',

  /* 3 · DÉMARCHE — [[…]] = ce qu'entoure l'ovale dessiné :
     2 à 3 MOTS MAXIMUM, JAMAIS une phrase entière. */
  manifesto: {
    text: 'Depuis 2002, BTPI pose ses réseaux là où la production ne s’arrête jamais : agroalimentaire, industrie, papeterie. Un sprinkler peut attendre vingt ans, puis s’ouvrir [[au bon degré]] — c’est pour cet instant-là que nous travaillons.'
  },

  /* 4 · PREUVE — bento : 4 métiers illustrés, big / tall / tall / big */
  proof: {
    layout: 'bento',
    kicker: 'CE QUE NOUS FAISONS',
    title: 'Du plan à la maintenance',
    sub: 'Sprinklers et RIA en milieu occupé, de l’étude à l’entretien.',
    meta: 'DEPUIS 2002 — GRAND EST, HAUTS-DE-FRANCE ET AU-DELÀ',
    projects: [],
    features: [
      { size: 'big',  illu: 'illustrations/fe-1.svg', title: 'Conception', meta: 'ÉTUDE — CALCUL HYDRAULIQUE — PLANS' },
      { size: 'tall', illu: 'illustrations/fe-2.svg', title: 'Sprinklers', meta: 'EXTINCTION AUTOMATIQUE' },
      { size: 'tall', illu: 'illustrations/fe-3.svg', title: 'RIA', meta: 'ROBINETS D’INCENDIE ARMÉS' },
      { size: 'big',  illu: 'illustrations/fe-4.svg', title: 'Entretien & réparation', meta: 'VÉRIFICATIONS — DÉPANNAGE — REMISE EN ÉTAT' }
    ]
  },

  /* 5 · DEVISE — 3 mots (train horizontal scrubé), hint d'une ligne */
  motto: {
    kicker: 'CE QUI GUIDE CHAQUE CHANTIER',
    words: [
      { word: 'Rigueur', hint: 'Une organisation de chantier calée sur votre production.' },
      { word: 'Maîtrise', hint: 'Les contraintes d’hygiène et de production, intégrées dès l’étude.' },
      { word: 'Savoir-faire', hint: 'Plus de vingt ans de réseaux en sites industriels en activité.' }
    ]
  },

  /* 6-7 · PROCESSUS — « introA introB [visuel] introC » puis les étapes.
     Scène 100 % typographique : seule `image` (le zoom d'intro) est utilisée. */
  universes: {
    introA: 'Un',
    introB: 'réseau,',
    introC: '3 étapes.',
    cta: 'Demander un devis →',                     // CTA final (ovale dessiné)
    image: 'images/process.jpg',                    // le zoom d'intro (le SEUL visuel de la scène)
    items: [
      { name: 'Étude', meta: 'ÉTAPE — 01', desc: 'Chaque site est unique : nous étudions votre demande et définissons avec vous la démarche la plus adaptée, en lien avec votre assureur.' },
      { name: 'Pose', meta: 'ÉTAPE — 02', desc: 'Tuyauterie, têtes sprinklers, postes de contrôle et RIA posés en milieu occupé, au rythme de votre production, puis essais avant la mise en service.' },
      { name: 'Suivi', meta: 'ÉTAPE — 03', desc: 'Vérifications périodiques, entretien et réparations : votre réseau reste prêt, année après année.' }
    ]
  },

  /* 8 · PREUVE SOCIALE — les références clients fournies par BTPI.
     Pas de `figure` : la citation prend toute la place. */
  testimonial: {
    kicker: 'EN LIEN AVEC LEURS ASSUREURS : FM GLOBAL, AXA, ALLIANZ…',
    figure: '',
    unit: '',
    quote: 'Ils nous confient leurs sites en activité : McCain, Saint-Gobain, Mars, Royal Canin, PDV, Lucart, Sopalin.',
    author: 'NOS RÉFÉRENCES'
  },

  /* 9 · OBJECTIONS — 3 freins + la chute (pill = mots entourés) */
  objections: {
    /* \u00a0 = espace insécable : garde « Pas de … » groupé à la coupure de ligne */
    items: ['Pas\u00a0de\u00a0site à\u00a0l’arrêt.', 'Pas\u00a0de\u00a0solution standard.', 'Pas\u00a0d’impasse sur\u00a0l’hygiène.'],
    finale: 'Juste de l’eau,',
    pill: 'au bon moment.'
  },

  /* 10 · CONVERSION */
  contact: {
    kicker: 'UN SITE À PROTÉGER ?',
    email: 'btpi.bellicini@btpispk.fr',
    reassurance: 'PORTABLE\u00a006\u00a020\u00a096\u00a071\u00a075 — FIXE\u00a003\u00a054\u00a032\u00a091\u00a088'   // \u00a0 : numéros jamais coupés
  },

  /* traînée sous la souris (finale) — 20 visuels, petits formats mixtes */
  trail: [
    'images/tr-01.jpg', 'images/tr-02.jpg', 'images/tr-03.jpg', 'images/tr-04.jpg',
    'images/tr-05.jpg', 'images/tr-06.jpg', 'images/tr-07.jpg', 'images/tr-08.jpg',
    'images/tr-09.jpg', 'images/tr-10.jpg', 'images/tr-11.jpg', 'images/tr-12.jpg',
    'images/tr-13.jpg', 'images/tr-14.jpg', 'images/tr-15.jpg', 'images/tr-16.jpg',
    'images/tr-17.jpg', 'images/tr-18.jpg', 'images/tr-19.jpg', 'images/tr-20.jpg'
  ]
};

/* ═══════════════════════════════════════════════════════════
   INJECTION — NE PAS MODIFIER (remplit le DOM avant app.js)
   ═══════════════════════════════════════════════════════════ */
(() => {
  const C = window.SITE_CONTENT;
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => [...document.querySelectorAll(s)];
  const set = (sel, txt) => { const el = $(sel); if (el) el.textContent = txt; };

  document.title = C.brand.title;
  const md = document.querySelector('meta[name="description"]');
  if (md) md.setAttribute('content', C.brand.description);

  // chrome
  set('.loader-wordmark', C.brand.name);
  set('.dock-wordmark', C.brand.name);
  set('.dock-link[href="#travaux"]', C.nav.proof);
  set('.dock-link[href="#explorer"]', C.nav.universes);
  set('.dock-cta', C.nav.cta);

  // 1 · accroche
  set('#heroKicker', C.brand.kicker);
  set('#heroLine1', C.hook.line1);
  const hls = $$('#heroLine2 .hl');
  if (hls.length === 2) { hls[0].textContent = C.hook.line2a; hls[1].textContent = C.hook.line2b; }
  const g1 = $('#grow1 img');
  if (g1) { g1.src = C.hook.image; g1.alt = C.hook.imageAlt; }
  $$('.floaters .fl img').forEach((img, i) => { if (C.hook.floaters[i]) img.src = C.hook.floaters[i]; });

  // 2 · positionnement (un span par mot)
  const intro = $('#spotIntro');
  if (intro) intro.innerHTML = C.positioning.split(' ').map((w) => `<span>${w}</span>`).join(' ');

  // 3 · démarche
  const fill = $('#fillText');
  if (fill) {
    fill.innerHTML = C.manifesto.text.replace(
      /\[\[(.+?)\]\]/,
      '<span class="boxed" id="boxedPhrase">$1<svg class="box-svg" viewBox="0 0 100 100" preserveAspectRatio="none"><path id="boxPath" d="M50,6 C88,4 98,22 97,50 C96,82 76,96 49,95 C16,94 3,76 4,48 C5,18 20,7 50,6 Z"/></svg></span>'
    );
  }

  // 4 · preuve : masonry (8 photos) ou bento (4 features big/tall/tall/big)
  const head = $$('.coll-head > *');
  if (head.length === 4) {
    head[0].textContent = C.proof.kicker;
    head[1].textContent = C.proof.title;
    head[2].textContent = C.proof.sub;
    head[3].textContent = C.proof.meta;
  }
  const grid = $('#collGrid');
  if (grid && C.proof.layout === 'bento') {
    grid.className = 'bento-grid';
    grid.innerHTML = C.proof.features.map((f) =>
      `<figure class="card${f.size ? ' b-' + f.size : ''}"><div class="card-img"><img src="${f.illu}" alt="${f.title}"></div><figcaption>${f.title}<span class="mono">${f.meta}</span></figcaption></figure>`
    ).join('');
  } else if (grid) {
    grid.className = 'coll-grid';
    const SPEEDS = [-0.05, 0.06, -0.028, 0.085];
    grid.innerHTML = SPEEDS.map((s, ci) =>
      `<div class="col" data-pspeed="${s}">` +
      C.proof.projects.slice(ci * 2, ci * 2 + 2).map((p) =>
        `<figure class="card"><div class="card-img"><img src="${p.img}" alt="${p.title} — ${p.meta}"></div><figcaption>${p.title}<span class="mono">${p.meta}</span></figcaption></figure>`
      ).join('') + '</div>'
    ).join('');
  }

  // 5 · devise (train de mots-clés)
  set('#mottoKicker', C.motto.kicker);
  const mtrack = $('#mottoTrack');
  if (mtrack) mtrack.innerHTML = C.motto.words.map((w) => `<span class="mw">${w.word}</span>`).join('');

  // 6-7 · processus immersif (visuels posés un à un)
  set('#nw1', C.universes.introA);
  set('#nw2', C.universes.introB);
  set('#nw3', C.universes.introC);
  const g2 = $('#grow2 img');
  if (g2) g2.src = C.universes.image || (C.universes.items[0] || {}).img || g2.src;
  const psteps = $('#psteps');
  if (psteps) {
    psteps.innerHTML = C.universes.items.map((u) =>
      `<div class="pstep"><span class="pstep-meta mono ash">${u.meta}</span><h3>${u.name}</h3><p>${u.desc || ''}</p></div>`
    ).join('');
  }
  const sCta = $('#stepsCtaLink');
  if (sCta) sCta.childNodes[0].textContent = C.universes.cta;

  // 8 · preuve sociale — le chiffre qui frappe
  set('#figKicker', C.testimonial.kicker || '');
  const figM = String(C.testimonial.figure || '').trim().match(/^([^\d.,+-]*[+\u2212-]?)\s*(-?[\d.,]+)/);
  set('#figPre', figM ? figM[1] : '');
  set('#figVal', figM ? figM[2] : '');
  set('#figUnit', C.testimonial.unit || '');
  set('#quoteText', C.testimonial.quote);
  set('#quoteAuthor', C.testimonial.author);

  // 9 · objections
  C.objections.items.forEach((t, i) => set('#fs' + (i + 1), t));
  const fs4 = $('#fs4');
  if (fs4) {
    fs4.innerHTML = `${C.objections.finale} <span class="pill" id="pillPhrase">${C.objections.pill}<svg class="pill-svg" viewBox="0 0 100 100" preserveAspectRatio="none"><path id="pillPath" d="M50,6 C88,4 98,22 97,50 C96,82 76,96 49,95 C16,94 3,76 4,48 C5,18 20,7 50,6 Z"/></svg></span>`;
  }
  $$('#trail img').forEach((img, i) => { img.src = C.trail[i % C.trail.length]; });

  // 10 · conversion
  set('.footer-kicker', C.contact.kicker);
  const mail = $('.footer-mail');
  if (mail) { mail.href = 'mailto:' + C.contact.email; mail.querySelector('.footer-mail-text').textContent = C.contact.email; }
  set('.footer-reassurance', C.contact.reassurance);
  const fname = $('#footerName');
  if (fname) { fname.textContent = C.brand.name; fname.setAttribute('aria-label', C.brand.name); }
  const bottom = $$('.footer-bottom > p');
  if (bottom.length === 3) {
    bottom[0].textContent = C.brand.copyright;
    bottom[1].innerHTML = C.brand.socials.map((s) => `<a href="${s.url}" target="_blank" rel="noopener">${s.label}</a>`).join('&nbsp;&nbsp;&nbsp;');
    bottom[2].textContent = C.brand.signature;
  }
})();
