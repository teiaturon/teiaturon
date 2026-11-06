/* ============ ANY AL PEU ============ */
document.getElementById('year').textContent = new Date().getFullYear();

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
  // Passar el punter per sobre el nom: totes les lletres es mouen en cascada
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

/* ============ FOTO: CANVI A LA DE PETITA (tàctil) ============ */
(function () {
  const photo = document.getElementById('photo');
  // En ordinadors ho fa el CSS amb :hover. En dispositius tàctils, es canvia en tocar.
  photo.addEventListener('click', () => photo.classList.toggle('is-kid'));
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

/* ============ CARRUSELS ============ */
document.querySelectorAll('[data-carousel]').forEach(initCarousel);

function initCarousel(root) {
  const track = root.querySelector('.carousel__track');
  const viewport = root.querySelector('.carousel__viewport');
  const slides = [...track.children];
  const dotsBox = root.querySelector('.carousel__dots');
  const prev = root.querySelector('.carousel__btn--prev');
  const next = root.querySelector('.carousel__btn--next');
  let index = 0;

  // Punts de navegació
  const dots = slides.map((_, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.setAttribute('role', 'tab');
    b.setAttribute('aria-label', `Anar a la diapositiva ${i + 1}`);
    b.addEventListener('click', () => go(i));
    dotsBox.appendChild(b);
    return b;
  });

  function go(i) {
    index = (i + slides.length) % slides.length;
    track.style.transform = `translateX(${-index * 100}%)`;
    dots.forEach((d, n) => d.setAttribute('aria-selected', n === index));
    slides.forEach((s, n) => { if (n !== index) stopVideo(s); });
  }
  prev.addEventListener('click', () => go(index - 1));
  next.addEventListener('click', () => go(index + 1));
  root.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') go(index - 1);
    if (e.key === 'ArrowRight') go(index + 1);
  });

  // Arrossegar / lliscar amb el dit o el ratolí
  let startX = 0, dx = 0, dragging = false;
  root._dragged = false;
  viewport.addEventListener('pointerdown', e => {
    dragging = true; startX = e.clientX; dx = 0; root._dragged = false;
    track.classList.add('is-dragging');
  });
  viewport.addEventListener('pointermove', e => {
    if (!dragging) return;
    dx = e.clientX - startX;
    if (Math.abs(dx) > 6) root._dragged = true;
    const pct = (dx / viewport.clientWidth) * 100;
    track.style.transform = `translateX(${-index * 100 + pct}%)`;
  });
  const endDrag = () => {
    if (!dragging) return;
    dragging = false;
    track.classList.remove('is-dragging');
    if (dx < -50) go(index + 1);
    else if (dx > 50) go(index - 1);
    else go(index);
    setTimeout(() => (root._dragged = false), 0);
  };
  viewport.addEventListener('pointerup', endDrag);
  viewport.addEventListener('pointercancel', endDrag);
  viewport.addEventListener('pointerleave', endDrag);

  // Vídeos
  slides.forEach(slide => setupVideo(slide, root));

  go(0);
}

/* ============ VÍDEOS ============
   - Ordinador: es reprodueixen en passar-hi el punter; clicar = pausar/reprendre.
   - Mòbil/tauleta: tocar = reproduir/pausar.
   - Sempre silenciats i en línia (playsinline) perquè funcionin a iOS i Android. */
function setupVideo(slide, root) {
  const video = slide.querySelector('video');
  if (!video) return;
  video.muted = true;
  video.setAttribute('playsinline', '');
  let userPaused = false;

  const play = () => {
    const p = video.play();
    if (p && p.catch) p.catch(() => {});
    slide.classList.add('is-playing');
  };
  const pause = () => {
    video.pause();
    slide.classList.remove('is-playing');
  };

  slide.addEventListener('pointerenter', e => {
    if (e.pointerType === 'mouse' && !userPaused) play();
  });
  slide.addEventListener('pointerleave', e => {
    if (e.pointerType === 'mouse') { pause(); userPaused = false; }
  });
  slide.addEventListener('click', () => {
    if (root._dragged) return;               // era un arrossegament, no un clic
    if (video.paused) { userPaused = false; play(); }
    else { userPaused = true; pause(); }
  });
  video.addEventListener('ended', () => slide.classList.remove('is-playing'));
}

function stopVideo(slide) {
  const v = slide.querySelector('video');
  if (v) { v.pause(); slide.classList.remove('is-playing'); }
}
