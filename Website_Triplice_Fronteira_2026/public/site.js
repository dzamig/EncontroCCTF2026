'use strict';

const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navegacao');
if (toggle && navigation) {
  toggle.hidden = false;
  document.documentElement.classList.add('menu-enabled');
  const closeMenu = () => {
    toggle.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('is-open');
  };
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    navigation.classList.toggle('is-open', !expanded);
  });
  navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      toggle.focus();
    }
  });
  document.addEventListener('click', (event) => {
    if (event.target instanceof Node && !navigation.contains(event.target) && !toggle.contains(event.target)) closeMenu();
  });
  window.matchMedia('(min-width: 881px)').addEventListener('change', closeMenu);
}

if ('IntersectionObserver' in window) {
  const links = [...document.querySelectorAll('.nav-link')];
  const observer = new IntersectionObserver((entries) => {
    const active = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!active) return;
    links.forEach((link) => {
      if (link.getAttribute('href') === `#${active.target.id}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }, { rootMargin: '-15% 0px -50% 0px', threshold: [0, 0.2, 0.5] });
  document.querySelectorAll('main > section[id]').forEach((section) => observer.observe(section));
}
