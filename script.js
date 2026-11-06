/* ============ ANY AL PEU ============ */
document.getElementById('year').textContent = new Date().getFullYear();

/* ============ TRADUCCIONS (CA / ES / EN) ============
   ✏️ Si canvies un text de la web, canvia'l aquí en els tres idiomes. */
const I18N = {
  ca: {
    'nav.about': 'Sobre mi', 'nav.projects': 'Projectes', 'nav.contact': 'Parlem?',
    'hero.cv': "Descarrega't el meu CV",
    'hero.photoAria': 'Foto de la Teia de petita. Passa-hi per sobre o toca per veure-la ara',
    'marquee': 'Branding ✺ Estratègia ✺ Social Media ✺ Relacions Públiques ✺ Copywriting ✺ Creativitat ✺ Campanyes ✺ ',
    'about.title': 'Hola, sóc la <mark>Teia</mark> 👋',
    'about.text': "Estudio Publicitat i Relacions Públiques i m'encanta convertir idees en històries que la gent recorda. Em mou la curiositat, la creativitat i les ganes d'aprendre de cada projecte. Aquí trobaràs una mica del que he fet fins ara i del que vull arribar a fer.",
    'projects.title': 'Els meus <mark>projectes</mark>',
    'projects.pro': 'Projectes professionals', 'projects.aca': 'Projectes acadèmics',
    'projects.open': 'Obrir el projecte', 'projects.placeholder': 'Imatge provisional', 'projects.image': 'Imatge',
    'modal.close': 'Tancar', 'modal.prev': 'Anterior', 'modal.next': 'Següent',
    'modal.goal': 'Objectiu', 'modal.concept': 'Concepte creatiu', 'modal.role': 'La meva contribució',
    'contact.title': 'Parlem<mark>?</mark>', 'contact.window': 'Nou missatge',
    'contact.lead': 'Tens una idea, una oferta o només vols saludar? Escriu-me!',
    'contact.email': 'Correu', 'contact.cv': 'Veure el meu CV 📄',
    'footer': 'Fet amb molta creativitat'
  },
  es: {
    'nav.about': 'Sobre mí', 'nav.projects': 'Proyectos', 'nav.contact': '¿Hablamos?',
    'hero.cv': 'Descarga mi CV',
    'hero.photoAria': 'Foto de Teia de pequeña. Pasa el cursor por encima o toca para verla ahora',
    'marquee': 'Branding ✺ Estrategia ✺ Social Media ✺ Relaciones Públicas ✺ Copywriting ✺ Creatividad ✺ Campañas ✺ ',
    'about.title': 'Hola, soy <mark>Teia</mark> 👋',
    'about.text': 'Estudio Publicidad y Relaciones Públicas y me encanta convertir ideas en historias que la gente recuerda. Me mueven la curiosidad, la creatividad y las ganas de aprender de cada proyecto. Aquí encontrarás un poco de lo que he hecho hasta ahora y de lo que quiero llegar a hacer.',
    'projects.title': 'Mis <mark>proyectos</mark>',
    'projects.pro': 'Proyectos profesionales', 'projects.aca': 'Proyectos académicos',
    'projects.open': 'Abrir el proyecto', 'projects.placeholder': 'Imagen provisional', 'projects.image': 'Imagen',
    'modal.close': 'Cerrar', 'modal.prev': 'Anterior', 'modal.next': 'Siguiente',
    'modal.goal': 'Objetivo', 'modal.concept': 'Concepto creativo', 'modal.role': 'Mi contribución',
    'contact.title': '¿Hablamos<mark>?</mark>', 'contact.window': 'Nuevo mensaje',
    'contact.lead': '¿Tienes una idea, una oferta o solo quieres saludar? ¡Escríbeme!',
    'contact.email': 'Correo', 'contact.cv': 'Ver mi CV 📄',
    'footer': 'Hecho con mucha creatividad'
  },
  en: {
    'nav.about': 'About me', 'nav.projects': 'Projects', 'nav.contact': "Let's talk",
    'hero.cv': 'Download my CV',
    'hero.photoAria': 'Photo of Teia as a child. Hover or tap to see her now',
    'marquee': 'Branding ✺ Strategy ✺ Social Media ✺ Public Relations ✺ Copywriting ✺ Creativity ✺ Campaigns ✺ ',
    'about.title': "Hi, I'm <mark>Teia</mark> 👋",
    'about.text': "I study Advertising and Public Relations and I love turning ideas into stories people remember. I'm driven by curiosity, creativity and the desire to learn from every project. Here you'll find a bit of what I've done so far and what I want to do next.",
    'projects.title': 'My <mark>projects</mark>',
    'projects.pro': 'Professional projects', 'projects.aca': 'Academic projects',
    'projects.open': 'Open project', 'projects.placeholder': 'Placeholder image', 'projects.image': 'Image',
    'modal.close': 'Close', 'modal.prev': 'Previous', 'modal.next': 'Next',
    'modal.goal': 'Goal', 'modal.concept': 'Creative concept', 'modal.role': 'My contribution',
    'contact.title': "Let's talk<mark>!</mark>", 'contact.window': 'New message',
    'contact.lead': 'Got an idea, an offer or just want to say hi? Write to me!',
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
  updateCards();
  if (modal.current) fillModal(modal.current, modal.index);
}

document.querySelectorAll('.lang button').forEach(b => b.addEventListener('click', () => {
  lang = b.dataset.lang;
  try { localStorage.setItem('lang', lang); } catch (e) {}
  applyLang();
}));

/* ============ NOM: WIGGLE PER LLETRA ============ */
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
  const wiggle = el => {
    el.classList.remove('wiggle');
    void el.offsetWidth;            // reinicia l'animació
    el.classList.add('wiggle');
  };
  const wiggleAll = () => {
    name.querySelectorAll('.ch').forEach((ch, i) => setTimeout(() => wiggle(ch), i * 40));
  };
  let busy = false;
  const trigger = () => {
    if (busy) return;
    busy = true;
    wiggleAll();
    setTimeout(() => (busy = false), 1100);
  };
  name.addEventListener('pointerenter', trigger);
  name.addEventListener('click', trigger);       // mòbil: tocar
  name.addEventListener('animationend', e => e.target.classList.remove('wiggle'));
})();

/* ============ FOTO: CANVI A LA D'ARA (tàctil) ============ */
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
function media(src, { colorIndex = 0, label = '', video = {} } = {}) {
  if (!src) return placeholder(colorIndex, label);
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
    box.appendChild(media(p.portada ? p.carpeta + p.portada : '', {
      colorIndex, video: { autoplay: true, loop: true }
    }));

    const shade = document.createElement('span');
    shade.className = 'pcard__shade';
    const info = document.createElement('span');
    info.className = 'pcard__info';
    info.innerHTML = '<span class="pcard__name"></span><span class="pcard__meta"></span>';

    card.append(box, shade, info);
    card.addEventListener('click', () => openModal(p, kind, card));
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
  modal.bar.className = 'window__bar ' + (modal.kind === 'pro' ? 'window__bar--tomato' : 'window__bar--olive');
  modal.url.textContent = p.carpeta.replace(/^assets\/projectes\//, '').replace(/\/$/, '');
  modal.title.textContent = tx(p.titol);
  modal.meta.textContent = [tx(p.categoria), tx(p.any)].filter(Boolean).join(' · ');

  // Galeria
  const items = (p.galeria && p.galeria.length ? p.galeria : ['', '', '']);
  modal.stage.innerHTML = '';
  modal.thumbs.innerHTML = '';
  items.forEach((file, i) => {
    const src = file ? p.carpeta + file : '';
    const label = `${t('projects.image')} ${i + 1}`;
    const item = document.createElement('div');
    item.className = 'gallery__item';
    item.appendChild(media(src, { colorIndex: i, label, video: { controls: true } }));
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
    if (n !== modal.index) s.querySelector('video')?.pause();
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
