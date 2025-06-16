// JS con GSAP (suponiendo que ya cargaste GSAP)
const slides = document.querySelectorAll('.slide');
const hero = document.querySelector('.hero');
const titleEl = document.getElementById('movie-title');
const descEl = document.getElementById('movie-desc');

slides.forEach((slide, i) => {
  slide.addEventListener('click', () => {
    // desactivar anteriores
    document.querySelector('.slide.active').classList.remove('active');
    slide.classList.add('active');
    // animar carrusel
    gsap.to('.carousel', {
      x: () => {
        const offset = (i - Math.floor(slides.length/2)) * (slide.offsetWidth + 20);
        return -offset;
      },
      duration: .8,
      ease: 'power3.out'
    });
    // cambiar fondo
    const bg = slide.dataset.bg;
    gsap.to(hero, { backgroundImage: bg, duration: .8, ease: 'power3.out' });
    // animar texto
    gsap.fromTo([titleEl, descEl], 
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, duration: .6 }
    );
    // actualizar texto content
    titleEl.textContent = slide.dataset.title;
    descEl.textContent = slide.dataset.desc;
  });
});