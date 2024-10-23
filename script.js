// Contoh: Efek muncul saat di-scroll
const sections = document.querySelectorAll('section');

const revealSection = function (entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.1
});

sections.forEach(section => {
  sectionObserver.observe(section);
});