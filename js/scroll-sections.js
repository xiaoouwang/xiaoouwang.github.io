(function () {
  function initScrollSections() {
    const sections = document.querySelectorAll('.scroll-section');
    if (!sections.length) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      sections.forEach((section) => section.classList.add('is-visible'));
      return;
    }

    const reveal = (section) => section.classList.add('is-visible');

    const defaultObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          reveal(entry.target);
          defaultObserver.unobserve(entry.target);
        });
      },
      {
        threshold: 0.14,
        rootMargin: '0px 0px -6% 0px'
      }
    );

    const earlyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          reveal(entry.target);
          earlyObserver.unobserve(entry.target);
        });
      },
      {
        threshold: 0,
        rootMargin: '0px 0px 90% 0px'
      }
    );

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const alreadyVisible = rect.top <= window.innerHeight * 0.92 && rect.bottom >= 0;
      if (alreadyVisible) {
        reveal(section);
        return;
      }

      const observer = section.classList.contains('scroll-section--early')
        ? earlyObserver
        : defaultObserver;
      observer.observe(section);
    });
  }

  document.addEventListener('DOMContentLoaded', initScrollSections);
})();
