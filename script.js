const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');

function setMenu(open) {
  nav.classList.toggle('open', open);
  menuButton.setAttribute('aria-expanded', String(open));
}

menuButton.addEventListener('click', () => setMenu(!nav.classList.contains('open')));

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setMenu(false));
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && nav.classList.contains('open')) {
    setMenu(false);
    menuButton.focus();
  }
});

// Highlight the nav link for the section currently in view.
const links = new Map([...nav.querySelectorAll('a[href^="#"]')].map((a) => [a.hash.slice(1), a]));
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const link = links.get(entry.target.id);
    if (!link) return;
    if (entry.isIntersecting) {
      links.forEach((l) => l.removeAttribute('aria-current'));
      link.setAttribute('aria-current', 'true');
    }
  });
}, { rootMargin: '-45% 0px -50% 0px' });
// The contact section is short, so mark it once the page bottom is reached.
window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) {
    links.forEach((l) => l.removeAttribute('aria-current'));
    links.get('contact')?.setAttribute('aria-current', 'true');
  }
}, { passive: true });
links.forEach((_, id) => {
  const section = document.getElementById(id);
  if (section) observer.observe(section);
});
