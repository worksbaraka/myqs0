document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menu-btn');
  const nav = document.getElementById('mobile-nav');
  const overlay = document.getElementById('overlay');

  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
    overlay.style.display = nav.classList.contains('active') ? 'block' : 'none';
  });

  overlay.addEventListener('click', () => {
    nav.classList.remove('active');
    overlay.style.display = 'none';
  });


  // Slider logic
  let currentSlide = 0;
  const about = document.querySelector('.about');
  const slides = Array.from(about.querySelectorAll('.slide'));

  if (slides.length) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('slider-wrapper');

    slides.forEach(slide => wrapper.appendChild(slide));
    about.insertBefore(wrapper, about.querySelector('.nav-buttons'));

    function updateSlider() {
      wrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    window.next = function () {
      if (currentSlide < slides.length - 1) {
        currentSlide++;
        updateSlider();
      }
    };

    window.prev = function () {
      if (currentSlide > 0) {
        currentSlide--;
        updateSlider();
      }
    };

    updateSlider(); // Initial call
  }
});

