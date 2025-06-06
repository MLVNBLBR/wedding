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

function showColorName(clicked) {
      document.querySelectorAll('.color2').forEach(el => el.classList.remove('active'));
      clicked.classList.add('active');
    }

    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse.classList.contains('show')) {
        new bootstrap.Collapse(navbarCollapse).hide();
      }
    });
  });

  function showattire(clicked) {
      document.querySelectorAll('.attire2').forEach(el => el.classList.remove('active'));
      clicked.classList.add('active');
    }

  document.addEventListener('DOMContentLoaded', function() {
  // Existing code...

  // Drag to scroll functionality
  const scrollContainer = document.querySelector('.scroll-container');

  let isDown = false;
  let startX;
  let scrollLeft;

  if (scrollContainer) {
    scrollContainer.addEventListener('mousedown', (e) => {
      isDown = true;
      scrollContainer.classList.add('active');
      startX = e.pageX - scrollContainer.offsetLeft;
      scrollLeft = scrollContainer.scrollLeft;
    });
    scrollContainer.addEventListener('mouseleave', () => {
      isDown = false;
      scrollContainer.classList.remove('active');
    });
    scrollContainer.addEventListener('mouseup', () => {
      isDown = false;
      scrollContainer.classList.remove('active');
    });
    scrollContainer.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - scrollContainer.offsetLeft;
      const walk = (x - startX) * 1; // adjust scroll speed if needed
      scrollContainer.scrollLeft = scrollLeft - walk;
    });
  }

  // Show zoomed image in modal
  function showZoomImage(src) {
    const modalOverlay = document.createElement('div');
    Object.assign(modalOverlay.style, {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.8)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'zoom-out',
      zIndex: '9999'
    });

    const zoomedImg = document.createElement('img');
    zoomedImg.src = src;
    Object.assign(zoomedImg.style, {
      maxWidth: '90%',
      maxHeight: '90%',
      borderRadius: '8px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
      cursor: 'zoom-out'
    });

    modalOverlay.appendChild(zoomedImg);
    document.body.appendChild(modalOverlay);

    // Remove modal on click
    modalOverlay.addEventListener('click', () => {
      document.body.removeChild(modalOverlay);
    });
  }

  // Attach click event to images for zoom
  document.querySelectorAll('.img-container img').forEach((img) => {
    img.addEventListener('click', () => {
      showZoomImage(img.src);
    });
  });

  // Optional: existing code for modal, countdown, etc.
  // ...
});
