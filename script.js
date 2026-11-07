/* ============ VERSIÓ DELS ARXIUS ============
   S'afegeix a imatges i PDF perquè el navegador no mostri versions antigues. */
const ASSET_V = ((document.currentScript && document.currentScript.src.match(/[?&]v=(\d+)/)) || [])[1] || '';
const withV = url => (!ASSET_V || /^https?:\/\//.test(url) || !url) ? url : url + (url.includes('?') ? '&' : '?') + 'v=' + ASSET_V;

/* ============ ANY AL PEU ============ */
document.getElementById('year').textContent = new Date().getFullYear();

/* ============ TRADUCCIONS (CA / ES / EN) ============
   ✏️ Si canvies un text de la web, canvia'l aquí en els tres idiomes. */
const I18N = {
  ca: {
    'modal.play': 'Reprodueix el vídeo',
    'modal.pdf': 'Obre el PDF',
    'nav.home': 'Inici',
    'about.skills': "Habilitats",
    'skill.creativity': "Creativitat",
    'hero.role': "Estudiant de Publicitat i Relacions Públiques",
    'nav.about': 'Sobre mi', 'nav.projects': 'Projectes', 'nav.contact': 'Parlem?',
    'hero.cv': "Obre el meu CV",
    'hero.photoAria': "Foto de la Teia. Passa-hi per sobre o toca per veure-la de petita",
    'marquee': 'Branding ✺ Estratègia ✺ Social Media ✺ Relacions Públiques ✺ Copywriting ✺ Creativitat ✺ Campanyes ✺ ',
    'about.title': 'Hola, soc la <mark>Teia</mark> 👋',
    'about.text': "<p>Sí, ho has llegit bé: <strong>Teia</strong>. Un nom poc habitual, curiós per a alguns i ple d'història. Com jo.</p><p>Soc una <strong>futura creativa publicitària</strong>, amant de les idees que connecten, les històries que deixen empremta i de la gent que té alguna cosa a dir. La comunicació és la meva zona de confort, però <strong>sortir-ne per explorar nous reptes és el que em mou</strong>. Literalment.</p><p>Es podria dir que he fet una mica de tot: des de treballar en esdeveniments ciclistes i en un càmping perdut entre muntanyes, fins a posar-me davant d'una càmera com a <strong>actriu i model</strong>, i posar veu a <strong>una campanya publicitària emesa arreu de Catalunya</strong>. Pel camí, també he fet les maletes unes quantes vegades i he tingut la sort de descobrir món, viure a Itàlia i als Estats Units, i conèixer maneres diferents d'entendre les coses.</p><p>Potser algú diria que he viscut moltes vides, però la veritat és que simplement no sé estar-me quieta i aprofito qualsevol oportunitat per aprendre dient <strong>«sí a todo»</strong>.</p><p>I ara, què busco? <strong>Idees amb propòsit, comunicació amb personalitat i projectes que no passin desapercebuts</strong>. Vull crear, experimentar, però sobretot <strong>seguir aprenent</strong> de la vida i de mi mateixa.</p><p><a href=\"#contacte\">Parlem?</a></p>",
    'projects.title': 'Els meus <mark>projectes</mark>',
    'projects.pro': 'Projectes professionals', 'projects.aca': 'Projectes acadèmics destacats',
    'projects.open': 'Obrir el projecte', 'projects.placeholder': 'Imatge provisional', 'projects.image': 'Imatge',
    'modal.close': 'Tancar', 'modal.prev': 'Anterior', 'modal.next': 'Següent',
    'modal.goal': 'Objectiu', 'modal.concept': 'Concepte creatiu', 'modal.role': 'La meva contribució',
    'contact.title': '<mark>Parlem?</mark>', 'contact.window': 'Nou missatge',
    'contact.lead': "Si vols col·laborar amb mi o simplement dir-me hola, escriu-me per correu o per les meves xarxes!",
    'contact.email': 'Correu', 'contact.cv': 'Veure el meu CV 📄',
    'footer': 'Fet amb molta creativitat'
  },
  es: {
    'modal.play': 'Reproducir el vídeo',
    'modal.pdf': 'Abre el PDF',
    'nav.home': 'Inicio',
    'about.skills': "Habilidades",
    'skill.creativity': "Creatividad",
    'hero.role': "Estudiante de Publicidad y Relaciones Públicas",
    'nav.about': 'Sobre mí', 'nav.projects': 'Proyectos', 'nav.contact': '¿Hablamos?',
    'hero.cv': "Abre mi CV",
    'hero.photoAria': "Foto de Teia. Pasa el cursor por encima o toca para verla de pequeña",
    'marquee': 'Branding ✺ Estrategia ✺ Social Media ✺ Relaciones Públicas ✺ Copywriting ✺ Creatividad ✺ Campañas ✺ ',
    'about.title': 'Hola, soy <mark>Teia</mark> 👋',
    'about.text': "<p>Sí, lo has leído bien: <strong>Teia</strong>. Un nombre poco habitual, curioso para algunos y lleno de historia. Como yo.</p><p>Soy una <strong>futura creativa publicitaria</strong>, amante de las ideas que conectan, las historias que dejan huella y la gente que tiene algo que decir. La comunicación es mi zona de confort, pero <strong>salir de ella para explorar nuevos retos es lo que me mueve</strong>. Literalmente.</p><p>Se podría decir que he hecho un poco de todo: desde trabajar en eventos ciclistas y en un camping perdido entre montañas, hasta ponerme delante de una cámara como <strong>actriz y modelo</strong>, y poner voz a <strong>una campaña publicitaria emitida por toda Cataluña</strong>. Por el camino, también he hecho las maletas unas cuantas veces y he tenido la suerte de descubrir mundo, vivir en Italia y en Estados Unidos, y conocer maneras diferentes de entender las cosas.</p><p>Quizá alguien diría que he vivido muchas vidas, pero la verdad es que simplemente no sé estarme quieta y aprovecho cualquier oportunidad para aprender diciendo <strong>«sí a todo»</strong>.</p><p>Y ahora, ¿qué busco? <strong>Ideas con propósito, comunicación con personalidad y proyectos que no pasen desapercibidos</strong>. Quiero crear, experimentar, pero sobre todo <strong>seguir aprendiendo</strong> de la vida y de mí misma.</p><p><a href=\"#contacte\">¿Hablamos?</a></p>",
    'projects.title': 'Mis <mark>proyectos</mark>',
    'projects.pro': 'Proyectos profesionales', 'projects.aca': 'Proyectos académicos destacados',
    'projects.open': 'Abrir el proyecto', 'projects.placeholder': 'Imagen provisional', 'projects.image': 'Imagen',
    'modal.close': 'Cerrar', 'modal.prev': 'Anterior', 'modal.next': 'Siguiente',
    'modal.goal': 'Objetivo', 'modal.concept': 'Concepto creativo', 'modal.role': 'Mi contribución',
    'contact.title': '<mark>¿Hablamos?</mark>', 'contact.window': 'Nuevo mensaje',
    'contact.lead': "Si quieres colaborar conmigo o simplemente saludarme, ¡escríbeme por correo o por mis redes!",
    'contact.email': 'Correo', 'contact.cv': 'Ver mi CV 📄',
    'footer': 'Hecho con mucha creatividad'
  },
  en: {
    'modal.play': 'Play video',
    'modal.pdf': 'Open the PDF',
    'nav.home': 'Home',
    'about.skills': "Skills",
    'skill.creativity': "Creativity",
    'hero.role': "Advertising & Public Relations Student",
    'nav.about': 'About me', 'nav.projects': 'Projects', 'nav.contact': "Let's talk",
    'hero.cv': "Open my CV",
    'hero.photoAria': "Photo of Teia. Hover or tap to see her as a child",
    'marquee': 'Branding ✺ Strategy ✺ Social Media ✺ Public Relations ✺ Copywriting ✺ Creativity ✺ Campaigns ✺ ',
    'about.title': "Hi, I'm <mark>Teia</mark> 👋",
    'about.text': "<p>Yes, you read that right: <strong>Teia</strong>. An unusual name, curious to some and full of history. Just like me.</p><p>I'm a <strong>future advertising creative</strong>, in love with ideas that connect, stories that leave a mark and people who have something to say. Communication is my comfort zone, but <strong>stepping out of it to explore new challenges is what drives me</strong>. Literally.</p><p>You could say I've done a bit of everything: from working at cycling events and at a campsite lost in the mountains, to standing in front of the camera as an <strong>actress and model</strong>, and lending my voice to <strong>an advertising campaign broadcast all over Catalonia</strong>. Along the way, I've also packed my bags quite a few times and been lucky enough to see the world, live in Italy and the United States, and discover different ways of seeing things.</p><p>Some might say I've lived many lives, but the truth is I simply can't sit still, and I take every chance to learn by saying <strong>“sí a todo”</strong> — yes to everything.</p><p>So, what am I looking for now? <strong>Ideas with purpose, communication with personality and projects that never go unnoticed</strong>. I want to create and experiment, but above all <strong>keep learning</strong> from life and from myself.</p><p><a href=\"#contacte\">Let's talk?</a></p>",
    'projects.title': 'My <mark>projects</mark>',
    'projects.pro': 'Professional projects', 'projects.aca': 'Featured academic projects',
    'projects.open': 'Open project', 'projects.placeholder': 'Placeholder image', 'projects.image': 'Image',
    'modal.close': 'Close', 'modal.prev': 'Previous', 'modal.next': 'Next',
    'modal.goal': 'Goal', 'modal.concept': 'Creative concept', 'modal.role': 'My contribution',
    'contact.title': "<mark>Let's talk!</mark>", 'contact.window': 'New message',
    'contact.lead': "Want to collaborate or just say hi? Drop me an email or find me on social media!",
    'contact.email': 'Email', 'contact.cv': 'View my CV 📄',
    'footer': 'Made with lots of creativity'
  }
};

/* ✏️ Arxius del currículum */
const CV = { ca: 'assets/cv/CV-Teia-Turon-CA.pdf', en: 'assets/cv/CV-Teia-Turon-EN.pdf' };

let lang = 'ca';
try { lang = localStorage.getItem('lang') || 'ca'; } catch (e) {}
if (!I18N[lang]) lang = 'ca';

const t = key => I18N[lang][key] ?? I18N.ca[key] ?? key;
// Textos de projectes.js: poden ser { ca, es, en } o un text normal
const tx = v => (v && typeof v === 'object') ? (v[lang] ?? v.ca ?? '') : (v ?? '');

function applyLang() {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-html]').forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => el.setAttribute('aria-label', t(el.dataset.i18nAria)));
  document.querySelectorAll('[data-i18n-title]').forEach(el => el.setAttribute('title', t(el.dataset.i18nTitle)));
  document.querySelectorAll('.lang button').forEach(b => b.setAttribute('aria-pressed', b.dataset.lang === lang));
  // CV segons l'idioma (no hi ha versió en castellà: es mostra la catalana)
  document.querySelectorAll('[data-cv]').forEach(a => { a.href = lang === 'en' ? CV.en : CV.ca; });
  splitAboutWords();
  updateCards();
  cursorLabel.refresh();
  if (modal.current) fillModal(modal.current, modal.index);
}

document.querySelectorAll('.lang button').forEach(b => b.addEventListener('click', () => {
  lang = b.dataset.lang;
  try { localStorage.setItem('lang', lang); } catch (e) {}
  applyLang();
}));

/* ============ NOM: WIGGLE SUAU (entra amb el cursor, surt en treure'l) ============ */
(function () {
  const lines = document.querySelectorAll('.name__line');
  lines.forEach(line => {
    const text = line.textContent;
    line.textContent = '';
    line.setAttribute('aria-hidden', 'true');
    [...text].forEach(c => {
      const s = document.createElement('span');
      s.className = 'ch';
      s.textContent = c;
      line.appendChild(s);
    });
  });
  const name = document.getElementById('name');
  const letters = [...name.querySelectorAll('.ch')];
  const play = cls => letters.forEach((ch, i) => {
    clearTimeout(ch._t);
    ch._t = setTimeout(() => {
      ch.classList.remove('wiggle-in', 'wiggle-out');
      void ch.offsetWidth;            // reinicia l'animació
      ch.classList.add(cls);
    }, i * 30);
  });
  name.addEventListener('pointerenter', e => { if (e.pointerType !== 'touch') play('wiggle-in'); });
  name.addEventListener('pointerleave', e => { if (e.pointerType !== 'touch') play('wiggle-out'); });
  name.addEventListener('animationend', e => e.target.classList.remove('wiggle-in', 'wiggle-out'));
})();

/* ============ FOTO: CANVI A LA DE PETITA (tàctil) ============ */
(function () {
  const photo = document.getElementById('photo');
  // En ordinadors ho fa el CSS amb :hover. En pantalles tàctils, es canvia en tocar.
  const canHover = window.matchMedia('(hover: hover)');
  photo.addEventListener('click', () => {
    if (canHover.matches) return;
    photo.classList.toggle('is-swapped');
  });
})();

/* ============ ADHESIUS: PARALAXI AMB EL PUNTER ============ */
(function () {
  const hero = document.getElementById('inici');
  const stickers = hero.querySelectorAll('.sticker');
  if (!window.matchMedia('(hover: hover)').matches) return;
  hero.addEventListener('pointermove', e => {
    const r = hero.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - .5;
    const y = (e.clientY - r.top) / r.height - .5;
    stickers.forEach(s => {
      const d = parseFloat(s.dataset.depth) || 20;
      s.style.translate = `${x * d * 2}px ${y * d * 2}px`;
    });
  });
})();

/* ============ IMATGES I VÍDEOS (amb requadre provisional) ============ */
const PH_COLORS = ['a', 'b', 'c', 'd', 'e'];

function placeholder(colorIndex, label) {
  const d = document.createElement('div');
  d.className = `ph ph--${PH_COLORS[colorIndex % PH_COLORS.length]}`;
  d.innerHTML = `<span></span><small></small>`;
  d.firstChild.textContent = label || '';
  d.lastChild.textContent = t('projects.placeholder');
  d.dataset.ph = '1';
  return d;
}

// Crea una <img> o un <video>; si l'arxiu no existeix, posa un requadre provisional
// Enllaços de YouTube: retorna l'identificador del vídeo
function youtubeId(url) {
  const m = /(?:youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/.exec(url || '');
  return m ? m[1] : null;
}

// Vídeo de YouTube: miniatura amb botó de play; en clicar, es reprodueix aquí mateix
function youtube(id, { playable = false, label = '' } = {}) {
  const box = document.createElement('div');
  box.className = 'yt';
  const img = document.createElement('img');
  img.src = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
  img.alt = '';
  img.addEventListener('error', () => { img.style.visibility = 'hidden'; }, { once: true });
  const play = document.createElement(playable ? 'button' : 'span');
  play.className = 'yt__play';
  if (playable) {
    play.type = 'button';
    play.setAttribute('aria-label', `${t('modal.play')}: ${label}`);
    play.addEventListener('click', () => {
      const f = document.createElement('iframe');
      f.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
      f.title = label;
      f.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
      f.allowFullscreen = true;
      box.replaceChildren(f);
    });
    box._reset = () => { if (box.querySelector('iframe')) box.replaceChildren(img, play); };
  }
  box.append(img, play);
  return box;
}

function media(src, { colorIndex = 0, label = '', video = {}, playable = false } = {}) {
  if (!src) return placeholder(colorIndex, label);
  const yt = youtubeId(src);
  if (yt) return youtube(yt, { playable, label });
  src = withV(src);
  let el;
  if (/\.(mp4|webm|mov)$/i.test(src)) {
    el = document.createElement('video');
    el.src = src;
    el.muted = true;
    el.playsInline = true;
    el.preload = 'metadata';
    Object.assign(el, video);
  } else {
    el = document.createElement('img');
    el.src = src;
    el.alt = '';
    el.decoding = 'async';
  }
  el.addEventListener('error', () => el.replaceWith(placeholder(colorIndex, label)), { once: true });
  return el;
}

/* ============ TARGETES DE PROJECTES ============ */
const cards = [];

function buildCards(list, container, kind) {
  list.forEach((p, i) => {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'pcard reveal';
    // Professionals: apareixen primer. Acadèmics: es van revelant per files en baixar.
    card.style.setProperty('--d', `${(i % 2) * .12}s`);

    const box = document.createElement('span');
    box.className = 'pcard__media';
    const colorIndex = kind === 'pro' ? i : i + 2;
    const cover = media(!p.portada ? '' : /^https?:\/\//.test(p.portada) ? p.portada : p.carpeta + p.portada, {
      colorIndex, video: { autoplay: true, loop: true }
    });
    if (p.enfoc) cover.style.objectPosition = p.enfoc;
    if (p.sencera) {
      // Imatge sencera: el marc agafa la mateixa proporció que la imatge, sense marges
      cover.style.objectFit = 'contain';
      box.style.background = p.fons || 'var(--white)';
      const fit = () => {
        if (!cover.naturalWidth) return;
        card.classList.add('pcard--fit');
        card.style.setProperty('--ar', (cover.naturalWidth / cover.naturalHeight).toFixed(4));
      };
      if (cover.complete) fit(); else cover.addEventListener('load', fit, { once: true });
    }
    box.appendChild(cover);

    const shade = document.createElement('span');
    shade.className = 'pcard__shade';
    const info = document.createElement('span');
    info.className = 'pcard__info';
    info.innerHTML = '<span class="pcard__name"></span><span class="pcard__meta"></span>';

    card.append(box, shade, info);
    card.addEventListener('click', () => openModal(p, kind, card));
    cursorLabel.attach(card, p);
    container.appendChild(card);
    cards.push({ card, p });
  });
}

function updateCards() {
  cards.forEach(({ card, p }) => {
    card.querySelector('.pcard__name').textContent = tx(p.titol);
    card.querySelector('.pcard__meta').textContent = [tx(p.categoria), tx(p.any)].filter(Boolean).join(' · ');
    card.setAttribute('aria-label', `${t('projects.open')}: ${tx(p.titol)}`);
    card.querySelectorAll('[data-ph] small').forEach(s => (s.textContent = t('projects.placeholder')));
  });
}

/* ============ NOM DEL PROJECTE QUE SEGUEIX EL PUNTER (només ordinador) ============ */
const cursorLabel = (() => {
  const el = document.createElement('div');
  el.className = 'cursor-label';
  el.setAttribute('aria-hidden', 'true');
  el.innerHTML = '<div class="cursor-label__inner"><span class="cursor-label__name"></span><span class="cursor-label__meta"></span></div>';
  const dot = document.createElement('div');
  dot.className = 'cursor-dot';
  dot.setAttribute('aria-hidden', 'true');
  document.body.append(el, dot);
  const nameEl = el.querySelector('.cursor-label__name'), metaEl = el.querySelector('.cursor-label__meta');
  const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
  let x = 0, y = 0, cx = 0, cy = 0, raf = null, current = null, last = 0;

  // Moviment suau: l'etiqueta persegueix el punter amb una corba que no depèn dels fps
  const tick = now => {
    const dt = Math.min(64, now - (last || now)); last = now;
    const k = 1 - Math.pow(0.001, dt / 1000 * 1.6);   // ~ 0.1 per fotograma a 60 fps
    cx += (x - cx) * k;
    cy += (y - cy) * k;
    el.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
    if (Math.abs(x - cx) + Math.abs(y - cy) > .1 || current) raf = requestAnimationFrame(tick);
    else { raf = null; last = 0; }
  };
  const start = () => { if (!raf) { last = 0; raf = requestAnimationFrame(tick); } };
  const move = e => {
    x = e.clientX; y = e.clientY;
    dot.style.transform = `translate3d(${x}px, ${y}px, 0)`;   // el punt va exactament amb el punter
    start();
  };
  const fill = p => {
    nameEl.textContent = tx(p.titol);
    const meta = [tx(p.categoria), tx(p.any)].filter(Boolean).join(' · ');
    metaEl.textContent = meta;
    metaEl.hidden = !meta;
  };
  const hide = () => { current = null; el.classList.remove('is-on'); dot.classList.remove('is-on', 'is-down'); };
  return {
    attach(card, p) {
      card.addEventListener('pointerenter', e => {
        if (!fine.matches || e.pointerType !== 'mouse') return;
        const fresh = !el.classList.contains('is-on');
        current = p; fill(p);
        x = e.clientX; y = e.clientY;
        if (fresh) { cx = x; cy = y; el.style.transform = `translate3d(${cx}px, ${cy}px, 0)`; }
        dot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        el.classList.add('is-on'); dot.classList.add('is-on');
        start();
      });
      card.addEventListener('pointermove', e => { if (current === p) move(e); });
      card.addEventListener('pointerdown', () => dot.classList.add('is-down'));
      card.addEventListener('pointerup', () => dot.classList.remove('is-down'));
      card.addEventListener('pointerleave', () => { if (current === p) hide(); });
      card.addEventListener('click', hide);
    },
    refresh() { if (current) fill(current); }
  };
})();

buildCards(PROJECTES.professionals.slice(0, 2), document.getElementById('grid-pro'), 'pro');
buildCards(PROJECTES.academics.slice(0, 6), document.getElementById('grid-aca'), 'aca');

/* ============ FINESTRA MODAL ============ */
const modal = {
  el: document.getElementById('modal'),
  bar: document.getElementById('modal-bar'),
  url: document.getElementById('modal-url'),
  title: document.getElementById('modal-title'),
  meta: document.getElementById('modal-meta'),
  gallery: document.getElementById('gallery'),
  stage: document.getElementById('gallery-stage'),
  thumbs: document.getElementById('gallery-thumbs'),
  text: document.getElementById('modal-text'),
  current: null, kind: null, index: 0, opener: null, closeTimer: null
};

function fillModal(p, index = 0) {
  modal.bar.className = 'window__bar ' + (modal.kind === 'pro' ? 'window__bar--tomato' : 'window__bar--blush');
  modal.url.textContent = p.carpeta.replace(/^assets\/projectes\//, '').replace(/\/$/, '');
  modal.title.textContent = tx(p.titol);
  modal.meta.textContent = [tx(p.categoria), tx(p.any)].filter(Boolean).join(' · ');

  // Botó per obrir el PDF del projecte (si n'hi ha)
  const doc = document.getElementById('modal-doc');
  doc.hidden = !p.document;
  if (p.document) {
    doc.href = withV(p.carpeta + p.document.fitxer);
    document.getElementById('modal-doc-text').textContent = tx(p.document.text) || t('modal.pdf');
  }

  // Galeria
  const items = (p.galeria && p.galeria.length ? p.galeria : ['', '', '']);
  modal.stage.innerHTML = '';
  modal.thumbs.innerHTML = '';
  items.forEach((file, i) => {
    const src = !file ? '' : /^https?:\/\//.test(file) ? file : p.carpeta + file;
    const label = youtubeId(src) ? tx(p.titol) : `${t('projects.image')} ${i + 1}`;
    const item = document.createElement('div');
    item.className = 'gallery__item';
    item.appendChild(media(src, { colorIndex: i, label, video: { controls: true }, playable: true }));
    modal.stage.appendChild(item);

    const th = document.createElement('button');
    th.type = 'button';
    th.className = 'gallery__thumb';
    th.setAttribute('aria-label', label);
    th.appendChild(media(src, { colorIndex: i, label: String(i + 1) }));
    th.addEventListener('click', () => showSlide(i));
    modal.thumbs.appendChild(th);
  });
  modal.gallery.classList.toggle('gallery--single', items.length < 2);
  showSlide(Math.min(index, items.length - 1));

  // Text
  modal.text.innerHTML = '';
  const desc = tx(p.descripcio);
  if (desc) {
    const para = document.createElement('p');
    para.textContent = desc;
    modal.text.appendChild(para);
  }
  const dl = document.createElement('dl');
  [['modal.goal', p.objectiu], ['modal.concept', p.concepte], ['modal.role', p.contribucio]].forEach(([k, v]) => {
    const val = tx(v);
    if (!val) return;
    const div = document.createElement('div');
    const dt = document.createElement('dt');
    const dd = document.createElement('dd');
    dt.textContent = t(k);
    dd.textContent = val;
    div.append(dt, dd);
    dl.appendChild(div);
  });
  modal.text.appendChild(dl);
}

function showSlide(i) {
  const slides = [...modal.stage.children];
  if (!slides.length) return;
  modal.index = (i + slides.length) % slides.length;
  slides.forEach((s, n) => {
    s.classList.toggle('is-active', n === modal.index);
    if (n !== modal.index) {
      s.querySelector('video')?.pause();
      s.querySelector('.yt')?._reset?.();       // atura el vídeo de YouTube
    }
  });
  [...modal.thumbs.children].forEach((th, n) => th.setAttribute('aria-current', n === modal.index));
  modal.thumbs.children[modal.index]?.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'smooth' });
}

function openModal(p, kind, opener) {
  clearTimeout(modal.closeTimer);
  modal.current = p;
  modal.kind = kind;
  modal.opener = opener;
  fillModal(p, 0);
  modal.el.hidden = false;
  modal.el.querySelector('.modal__body').scrollTop = 0;
  document.body.classList.add('modal-open');
  void modal.el.offsetWidth;                 // perquè la transició s'apliqui
  modal.el.classList.add('is-open');
  modal.el.querySelector('.modal__close').focus({ preventScroll: true });
}

function closeModal() {
  if (!modal.current) return;
  modal.el.classList.remove('is-open');
  modal.stage.querySelectorAll('video').forEach(v => v.pause());
  modal.stage.querySelectorAll('.yt').forEach(y => y._reset?.());
  modal.current = null;
  document.body.classList.remove('modal-open');
  modal.closeTimer = setTimeout(() => { modal.el.hidden = true; }, 450);
  modal.opener?.focus({ preventScroll: true });
}

modal.el.querySelectorAll('[data-close]').forEach(b => b.addEventListener('click', closeModal));
modal.el.querySelector('.gallery__btn--prev').addEventListener('click', () => showSlide(modal.index - 1));
modal.el.querySelector('.gallery__btn--next').addEventListener('click', () => showSlide(modal.index + 1));

document.addEventListener('keydown', e => {
  if (!modal.current) return;
  if (e.key === 'Escape') closeModal();
  else if (e.key === 'ArrowLeft') showSlide(modal.index - 1);
  else if (e.key === 'ArrowRight') showSlide(modal.index + 1);
  else if (e.key === 'Tab') {               // manté el focus dins la finestra
    const f = [...modal.el.querySelectorAll('button, video[controls], a[href]')].filter(x => x.offsetParent);
    if (!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
});

// Lliscar amb el dit a la galeria
(function () {
  let x0 = null;
  modal.stage.addEventListener('pointerdown', e => { if (e.pointerType !== 'mouse') x0 = e.clientX; });
  modal.stage.addEventListener('pointerup', e => {
    if (x0 === null) return;
    const dx = e.clientX - x0;
    x0 = null;
    if (Math.abs(dx) > 40) showSlide(modal.index + (dx < 0 ? 1 : -1));
  });
})();

/* ============ SOBRE MI: EL TEXT ES VA ESCRIVINT EN BAIXAR ============ */
const aboutText = document.getElementById('about-text');
let aboutWords = [];

function splitAboutWords() {
  // Cada lletra va dins d'un <span class="ch-a">; les paraules no es parteixen entre línies
  const walk = node => {
    [...node.childNodes].forEach(n => {
      if (n.nodeType === 3) {
        const frag = document.createDocumentFragment();
        n.textContent.split(/(\s+)/).forEach(part => {
          if (!part) return;
          if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(part)); return; }
          const word = document.createElement('span');
          word.className = 'w';
          [...part].forEach(c => {
            const ch = document.createElement('span');
            ch.className = 'ch-a';
            ch.textContent = c;
            word.appendChild(ch);
          });
          frag.appendChild(word);
        });
        n.replaceWith(frag);
      } else if (n.nodeType === 1) walk(n);
    });
  };
  walk(aboutText);
  aboutWords = [...aboutText.querySelectorAll('.ch-a')];
  lastShown = -1;
  updateAboutWords();
}

let lastShown = -1;
function updateAboutWords() {
  if (!aboutWords.length) return;
  const vh = window.innerHeight;
  const r = aboutText.getBoundingClientRect();
  const start = vh * .9;          // comença quan el text entra per baix
  const end = vh * .97;           // acaba quan el final del text entra a la pantalla
  const p = Math.min(1, Math.max(0, (start - r.top) / (r.height + start - end)));
  const n = Math.round(p * aboutWords.length);
  if (n === lastShown) return;
  lastShown = n;
  aboutWords.forEach((c, i) => {
    c.classList.toggle('on', i < n);
    c.classList.toggle('caret', i === n - 1 && n < aboutWords.length);
  });
  // Les paraules clau es subratllen quan ja s'han escrit
  aboutText.querySelectorAll('strong').forEach(st => {
    const cs = st.querySelectorAll('.ch-a');
    st.classList.toggle('on', cs.length > 0 && cs[cs.length - 1].classList.contains('on'));
  });
}

let aboutTick = false;
window.addEventListener('scroll', () => {
  if (aboutTick) return;
  aboutTick = true;
  requestAnimationFrame(() => { aboutTick = false; updateAboutWords(); });
}, { passive: true });
window.addEventListener('resize', updateAboutWords);

/* ============ IDIOMA INICIAL ============ */
applyLang();

/* ============ ANIMACIÓ D'ENTRADA AL FER SCROLL ============ */
(function () {
  const items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach(i => i.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        en.target.classList.add('in');
        obs.unobserve(en.target);
      }
    });
  }, { threshold: .18, rootMargin: '0px 0px -8% 0px' });
  items.forEach(i => io.observe(i));
})();
