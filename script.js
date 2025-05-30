document.addEventListener('DOMContentLoaded', function() {
    // Modal elements
    const modal = document.getElementById('welcomeModal');
    const closeBtn = document.getElementById('closeModal');
    const mainContent = document.getElementById('main-content');

    // Close modal on button click
    if (closeBtn && modal && mainContent) {
      closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        mainContent.style.display = 'block';
      });
    }

    // Carousel images
    const images = document.querySelectorAll('.header-section .images img');
    let currentIndex = 0;

    if (images.length > 0) {
      setInterval(() => {
        images.forEach(img => img.classList.remove('active'));
        images[currentIndex].classList.add('active');
        currentIndex = (currentIndex + 1) % images.length;
      }, 3000);
    }

    // Countdown
    const countdownElem = document.getElementById('final-countdown');
    if (countdownElem) {
      countdownElem.style.animation = 'fadeIn 2s forwards';

      const eventDate = new Date('June 28, 2025 11:00:00').getTime();

      const countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const distance = eventDate - now;

        if (distance < 0) {
          countdownElem.innerHTML = "The event has started!";
          clearInterval(countdownInterval);
          return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElem.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
      }, 1000);
    }

    // Image gallery lightbox effect
    document.querySelectorAll('.images-gallery img').forEach(img => {
      img.addEventListener('click', () => {
        const modal = document.createElement('div');
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.background = 'rgba(0,0,0,0.8)';
        modal.style.display = 'flex';
        modal.style.alignItems = 'center';
        modal.style.justifyContent = 'center';
        modal.style.cursor = 'pointer';

        const largeImg = document.createElement('img');
        largeImg.src = img.src;
        largeImg.style.maxWidth = '90%';
        largeImg.style.maxHeight = '90%';

        modal.appendChild(largeImg);
        document.body.appendChild(modal);

        modal.addEventListener('click', () => {
          document.body.removeChild(modal);
        });
      });
    });
  });