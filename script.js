const header = document.getElementById('siteHeader');
const floating = document.getElementById('floatingReserve');
const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');

function onScroll(){
  const y = window.scrollY;
  header.classList.toggle('scrolled', y > 24);
  floating.classList.toggle('show', y > 700);
}
window.addEventListener('scroll', onScroll, { passive:true });
onScroll();

menuToggle.addEventListener('click', () => {
  const open = mobileNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.textContent = open ? '×' : '☰';
});
mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  mobileNav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded','false');
  menuToggle.textContent='☰';
}));

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!reduced){
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold:0.13, rootMargin:'0px 0px -40px 0px' });
  document.querySelectorAll('.reveal:not(.is-visible)').forEach(el => observer.observe(el));

  const heroImage = document.querySelector('.hero-media img');
  window.addEventListener('scroll', () => {
    if(window.innerWidth > 1060 && window.scrollY < 900){
      heroImage.style.transform = `scale(1.06) translateY(${Math.min(window.scrollY * .035, 24)}px)`;
    }
  }, { passive:true });
}else{
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
}

document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.closest('.faq-item');
    const currentlyOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(openItem => openItem.classList.remove('open'));
    if(!currentlyOpen) item.classList.add('open');
  });
});

// Header height is considered when jumping to sections.
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const id = link.getAttribute('href');
    if(!id || id === '#') return;
    const target = document.querySelector(id);
    if(!target) return;
    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior: reduced ? 'auto' : 'smooth' });
  });
});
