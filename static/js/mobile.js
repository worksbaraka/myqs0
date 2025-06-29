const menuBtn = document.getElementById('menu-btn');
const nav = document.getElementById('mobile-nav');
const overlay = document.getElementById('overlay');

menuBtn.addEventListener('click', () => {
  nav.classList.add('active');
  overlay.style.display = 'block';
});

overlay.addEventListener('click', () => {
  nav.classList.remove('active');
  overlay.style.display = 'none';
});
