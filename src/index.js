if (
  !('IntersectionObserver' in window) ||
  !('IntersectionObserverEntry' in window) ||
  !('intersectionRatio' in window.IntersectionObserverEntry.prototype)
) {
  import('intersection-observer');
}

const articles = document.querySelectorAll('.article');
const subarticles = document.querySelectorAll('.subarticle');
const sections = [...articles, ...subarticles];

const observer = new IntersectionObserver((entries) =>
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  }),
);

sections.forEach((section) => observer.observe(section));

const list = document.querySelectorAll('.item');

list.forEach((item, i) => setTimeout(() => item.classList.add('slide'), i * 200));
