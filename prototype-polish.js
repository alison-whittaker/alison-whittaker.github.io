const revealTargets = document.querySelectorAll(
  '.stat-card, .metric, .program-card, .input-card, .queue-wrap, .section-card, .risk-wrap, .ai-card, .form-card, .gen-bar, .impact-card, .bu-card, .pd-card, .sig-card, .action-card, .initiative-card, .lib-card, .group'
);

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-revealed');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  revealTargets.forEach((target, index) => {
    target.style.animationDelay = `${Math.min(index * 35, 260)}ms`;
    observer.observe(target);
  });
} else {
  revealTargets.forEach((target) => target.classList.add('is-revealed'));
}

document.querySelectorAll('.tab-btn').forEach((tab) => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab-panel.active .stat-card, .tab-panel.active .metric, .tab-panel.active .program-card, .tab-panel.active .input-card, .tab-panel.active .section-card, .tab-panel.active .ai-card, .tab-panel.active .form-card, .tab-panel.active .impact-card, .tab-panel.active .bu-card, .tab-panel.active .pd-card, .tab-panel.active .sig-card, .tab-panel.active .action-card, .tab-panel.active .initiative-card, .tab-panel.active .lib-card')
      .forEach((target, index) => {
        target.classList.remove('is-revealed');
        target.style.animationDelay = `${Math.min(index * 30, 220)}ms`;
        requestAnimationFrame(() => target.classList.add('is-revealed'));
      });
  });
});
