/** SP JS - São Paulo - Modern-urban with blue and gold accents */
const STATE_CONFIG = {
  stateCode: 'sp',
  capital: 'São Paulo',
  formspreeUrl: 'https://formspree.io/f/xspqbddb',
  colors: { primary: '#1e90ff', secondary: '#4169e1', accent: '#ffd700' },
  animations: {"enabled": true, "header": {"type": "metropolisSlide", "duration": "0.4s", "easing": "cubic-bezier(0.4, 0, 0.2, 1)", "delay": "0s"}, "sections": {"type": "urbanReveal", "duration": "0.7s", "easing": "ease-out", "stagger": "0.08s"}, "hero": {"type": "skylineParallax", "speed": 0.9, "direction": "vertical"}, "cards": {"type": "modernFlip", "sharp": true, "fast": true}, "images": {"type": "cityReveal", "dynamic": true, "duration": "0.6s"}},
  interactions: {"hover": "urban-elevate", "scroll": "metro-glide", "transitions": "city-snap", "click": "neon-flash"},
  premiumEffects: ["skyline-gradient", "neon-glow", "concrete-texture", "traffic-motion"]
};

const SECTIONS = ["sp-index-section--map", "sp-index-section-frequently-asked-questions-about-living-in-", "sp-index-contact"];

document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      try {
        await fetch(STATE_CONFIG.formspreeUrl, { method: 'POST', body: new FormData(form), headers: { 'Accept': 'application/json' } });
        alert('Message sent!');
        form.reset();
      } catch(err) { alert('Error'); }
    });
  });
});
