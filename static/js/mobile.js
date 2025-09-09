document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menu-btn');
  const nav = document.getElementById('mobile-nav');
  const overlay = document.getElementById('overlay');

  // --- Menu toggle ---
  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
    overlay.style.display = nav.classList.contains('active') ? 'block' : 'none';
  });

  overlay.addEventListener('click', () => {
    nav.classList.remove('active');
    overlay.style.display = 'none';
  });


  // --- Reusable slider logic ---
  function initSlider(containerSelector) {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    let currentSlide = 0;
    const slides = Array.from(container.querySelectorAll('.slide'));

    if (slides.length) {
      const wrapper = document.createElement('div');
      wrapper.classList.add('slider-wrapper');

      slides.forEach(slide => wrapper.appendChild(slide));
      container.insertBefore(wrapper, container.querySelector('.nav-buttons'));

      function updateSlider() {
        wrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
      }

      // Attach prev/next functions to this container only
      container.querySelector('.next-btn')?.addEventListener('click', () => {
        if (currentSlide < slides.length - 1) {
          currentSlide++;
          updateSlider();
        }
      });

      container.querySelector('.prev-btn')?.addEventListener('click', () => {
        if (currentSlide > 0) {
          currentSlide--;
          updateSlider();
        }
      });

      updateSlider(); // Initial call
    }
  }

  // --- Initialize sliders for both sections ---
  initSlider('.about');
  initSlider('.expertise');
});
