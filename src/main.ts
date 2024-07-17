// Smooth scrolling for anchor links
document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId) {
      document.querySelector(targetId)?.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Parallax effect for about section
window.addEventListener('scroll', () => {
  const aboutImage = document.querySelector<HTMLDivElement>('.about-image');
  if (aboutImage) {
    const scrolled = window.pageYOffset;
    aboutImage.style.transform = `translateY(${scrolled * 0.1}px)`;
  }
});

// Lazy loading for images
document.addEventListener("DOMContentLoaded", function () {
  const lazyImages = Array.from(document.querySelectorAll<HTMLImageElement>("img.lazy"));

  if ("IntersectionObserver" in window) {
    const lazyImageObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const lazyImage = entry.target as HTMLImageElement;
          lazyImage.src = lazyImage.dataset.src || lazyImage.src;
          lazyImage.classList.remove("lazy");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    lazyImages.forEach(function (lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  }
});

// Dark mode toggle
const darkModeToggle = document.createElement('button');
darkModeToggle.innerText = '🌓';
darkModeToggle.style.position = 'fixed';
darkModeToggle.style.bottom = '20px';
darkModeToggle.style.right = '20px';
darkModeToggle.style.padding = '10px';
darkModeToggle.style.borderRadius = '50%';
darkModeToggle.style.border = 'none';
darkModeToggle.style.backgroundColor = 'var(--primary-color)';
darkModeToggle.style.color = 'var(--text-color)';
darkModeToggle.style.cursor = 'pointer';
darkModeToggle.style.zIndex = '1000';

document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
