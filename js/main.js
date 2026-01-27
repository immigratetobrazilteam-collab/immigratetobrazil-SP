
// Master JS for State: SP - Persona: Urban Tech Innovator
// Comprehensive, mobile-first animations using GSAP (CDN: <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>)
// Draws from js_data.json for globals; animations match stereotype (e.g., bouncy for expressive, smooth for conservative)
// Best practices: DOMContentLoaded, element checks, reduced motion support, mobile detection for shorter durations

document.addEventListener('DOMContentLoaded', () => {
  // Load js_data.json for globals (async fetch for modularity)
  fetch('js/js_data.json')
    .then(response => response.json())
    .then(data => {
      const intensityMod = data.persona.visual_intensity === 'high' ? 1.2 : data.persona.visual_intensity === 'medium' ? 1.0 : 0.8;
      const isMobile = window.innerWidth < 768;
      const mobileMod = data.animation_customizations.mobile_mod;
      const durationMod = isMobile ? intensityMod * mobileMod : intensityMod;

      // Reduced motion check (best practice)
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        return;  // Skip all animations
      }

      // General smooth scroll (vanilla JS, mobile-friendly)
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });

      // Section-specific animations (comprehensive, per role/ID)

  const sp_index_section_immigrate_to_so_paulo = document.getElementById('sp-index-section-immigrate-to-so-paulo');
  if (sp_index_section_immigrate_to_so_paulo) {
    gsap.fromTo('#sp-index-section-immigrate-to-so-paulo', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_index_form_immigrate_to_so_paulo = document.getElementById('sp-index-form-immigrate-to-so-paulo');
  if (sp_index_form_immigrate_to_so_paulo) {
    gsap.from('#sp-index-form-immigrate-to-so-paulo input, #sp-index-form-immigrate-to-so-paulo textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_index_section_state_vibe = document.getElementById('sp-index-section-state-vibe');
  if (sp_index_section_state_vibe) {
    gsap.fromTo('#sp-index-section-state-vibe', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_index_section_quick_facts_snapshot = document.getElementById('sp-index-section-quick-facts-snapshot');
  if (sp_index_section_quick_facts_snapshot) {
    gsap.fromTo('#sp-index-section-quick-facts-snapshot', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_index_section_so_paulo_map = document.getElementById('sp-index-section-so-paulo-map');
  if (sp_index_section_so_paulo_map) {
    gsap.fromTo('#sp-index-section-so-paulo-map', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_index_section_cost_of_living_so_paulo = document.getElementById('sp-index-section-cost-of-living-so-paulo');
  if (sp_index_section_cost_of_living_so_paulo) {
    gsap.fromTo('#sp-index-section-cost-of-living-so-paulo', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_index_section_government_context = document.getElementById('sp-index-section-government-context');
  if (sp_index_section_government_context) {
    gsap.fromTo('#sp-index-section-government-context', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_index_hero_immigration_notes = document.getElementById('sp-index-hero-immigration-notes');
  if (sp_index_hero_immigration_notes) {
    gsap.fromTo('#sp-index-hero-immigration-notes', {opacity: 0, y: 50}, {opacity: 1, y: 0, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_index_list_common_applicant_profiles = document.getElementById('sp-index-list-common-applicant-profiles');
  if (sp_index_list_common_applicant_profiles) {
    gsap.from('#sp-index-list-common-applicant-profiles li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_index_list_economic_drivers = document.getElementById('sp-index-list-economic-drivers');
  if (sp_index_list_economic_drivers) {
    gsap.from('#sp-index-list-economic-drivers li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_index_section_demographics = document.getElementById('sp-index-section-demographics');
  if (sp_index_section_demographics) {
    gsap.fromTo('#sp-index-section-demographics', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_index_section_regional_challenges = document.getElementById('sp-index-section-regional-challenges');
  if (sp_index_section_regional_challenges) {
    gsap.fromTo('#sp-index-section-regional-challenges', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_index_section_regional_opportunities = document.getElementById('sp-index-section-regional-opportunities');
  if (sp_index_section_regional_opportunities) {
    gsap.fromTo('#sp-index-section-regional-opportunities', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_index_section_culture_daily_life = document.getElementById('sp-index-section-culture-daily-life');
  if (sp_index_section_culture_daily_life) {
    gsap.fromTo('#sp-index-section-culture-daily-life', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_index_list_local_language_expressions = document.getElementById('sp-index-list-local-language-expressions');
  if (sp_index_list_local_language_expressions) {
    gsap.from('#sp-index-list-local-language-expressions li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_index_list_food_cuisine = document.getElementById('sp-index-list-food-cuisine');
  if (sp_index_list_food_cuisine) {
    gsap.from('#sp-index-list-food-cuisine li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_index_list_festivals_traditions = document.getElementById('sp-index-list-festivals-traditions');
  if (sp_index_list_festivals_traditions) {
    gsap.from('#sp-index-list-festivals-traditions li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_index_list_music_artistic_expression = document.getElementById('sp-index-list-music-artistic-expression');
  if (sp_index_list_music_artistic_expression) {
    gsap.from('#sp-index-list-music-artistic-expression li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_index_list_sports_recreation = document.getElementById('sp-index-list-sports-recreation');
  if (sp_index_list_sports_recreation) {
    gsap.from('#sp-index-list-sports-recreation li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_index_list_landmarks_historical_sites = document.getElementById('sp-index-list-landmarks-historical-sites');
  if (sp_index_list_landmarks_historical_sites) {
    gsap.from('#sp-index-list-landmarks-historical-sites li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_index_list_natural_features = document.getElementById('sp-index-list-natural-features');
  if (sp_index_list_natural_features) {
    gsap.from('#sp-index-list-natural-features li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_index_list_parks_protected_areas = document.getElementById('sp-index-list-parks-protected-areas');
  if (sp_index_list_parks_protected_areas) {
    gsap.from('#sp-index-list-parks-protected-areas li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_index_list_museums_cultural_institutions = document.getElementById('sp-index-list-museums-cultural-institutions');
  if (sp_index_list_museums_cultural_institutions) {
    gsap.from('#sp-index-list-museums-cultural-institutions li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_index_section_image_gallery = document.getElementById('sp-index-section-image-gallery');
  if (sp_index_section_image_gallery) {
    gsap.fromTo('#sp-index-section-image-gallery', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_index_section_useful_government_links = document.getElementById('sp-index-section-useful-government-links');
  if (sp_index_section_useful_government_links) {
    gsap.fromTo('#sp-index-section-useful-government-links', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_index_hero_federal_police_immigration_links = document.getElementById('sp-index-hero-federal-police-immigration-links');
  if (sp_index_hero_federal_police_immigration_links) {
    gsap.fromTo('#sp-index-hero-federal-police-immigration-links', {opacity: 0, y: 50}, {opacity: 1, y: 0, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_index_section_external_references = document.getElementById('sp-index-section-external-references');
  if (sp_index_section_external_references) {
    gsap.fromTo('#sp-index-section-external-references', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_index_list_immigration_services_overview = document.getElementById('sp-index-list-immigration-services-overview');
  if (sp_index_list_immigration_services_overview) {
    gsap.from('#sp-index-list-immigration-services-overview li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_index_section_why_immigrate_here = document.getElementById('sp-index-section-why-immigrate-here');
  if (sp_index_section_why_immigrate_here) {
    gsap.fromTo('#sp-index-section-why-immigrate-here', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_index_section_legal_guidance_disclaimers = document.getElementById('sp-index-section-legal-guidance-disclaimers');
  if (sp_index_section_legal_guidance_disclaimers) {
    gsap.fromTo('#sp-index-section-legal-guidance-disclaimers', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_index_list_travel_services = document.getElementById('sp-index-list-travel-services');
  if (sp_index_list_travel_services) {
    gsap.from('#sp-index-list-travel-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_index_list_how_the_process_works = document.getElementById('sp-index-list-how-the-process-works');
  if (sp_index_list_how_the_process_works) {
    gsap.from('#sp-index-list-how-the-process-works li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_index_section__frequently_asked_questions_about_living_in_so_paulo_ = document.getElementById('sp-index-section--frequently-asked-questions-about-living-in-so-paulo-');
  if (sp_index_section__frequently_asked_questions_about_living_in_so_paulo_) {
    gsap.fromTo('#sp-index-section--frequently-asked-questions-about-living-in-so-paulo-', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const contact_cta.html = document.getElementById('contact-cta.html');
  if (contact_cta.html) {
    gsap.fromTo('#contact-cta.html', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_contactcta_section_get_started_in_so_paulo = document.getElementById('sp-contactcta-section-get-started-in-so-paulo');
  if (sp_contactcta_section_get_started_in_so_paulo) {
    gsap.fromTo('#sp-contactcta-section-get-started-in-so-paulo', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const renouncing_citizenship.html = document.getElementById('renouncing-citizenship.html');
  if (renouncing_citizenship.html) {
    gsap.fromTo('#renouncing-citizenship.html', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_renouncingcitizenship_form_renounce_brazilian_citizenship = document.getElementById('sp-renouncingcitizenship-form-renounce-brazilian-citizenship');
  if (sp_renouncingcitizenship_form_renounce_brazilian_citizenship) {
    gsap.from('#sp-renouncingcitizenship-form-renounce-brazilian-citizenship input, #sp-renouncingcitizenship-form-renounce-brazilian-citizenship textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_renouncingcitizenship_list_quick_facts = document.getElementById('sp-renouncingcitizenship-list-quick-facts');
  if (sp_renouncingcitizenship_list_quick_facts) {
    gsap.from('#sp-renouncingcitizenship-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_renouncingcitizenship_list_common_challenges_applicants_face = document.getElementById('sp-renouncingcitizenship-list-common-challenges-applicants-face');
  if (sp_renouncingcitizenship_list_common_challenges_applicants_face) {
    gsap.from('#sp-renouncingcitizenship-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_renouncingcitizenship_list_how_we_solve_these_challenges = document.getElementById('sp-renouncingcitizenship-list-how-we-solve-these-challenges');
  if (sp_renouncingcitizenship_list_how_we_solve_these_challenges) {
    gsap.from('#sp-renouncingcitizenship-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_renouncingcitizenship_section_renunciation_overview = document.getElementById('sp-renouncingcitizenship-section-renunciation-overview');
  if (sp_renouncingcitizenship_section_renunciation_overview) {
    gsap.fromTo('#sp-renouncingcitizenship-section-renunciation-overview', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_renouncingcitizenship_form_who_is_this_for = document.getElementById('sp-renouncingcitizenship-form-who-is-this-for');
  if (sp_renouncingcitizenship_form_who_is_this_for) {
    gsap.from('#sp-renouncingcitizenship-form-who-is-this-for input, #sp-renouncingcitizenship-form-who-is-this-for textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_renouncingcitizenship_list_required_documents = document.getElementById('sp-renouncingcitizenship-list-required-documents');
  if (sp_renouncingcitizenship_list_required_documents) {
    gsap.from('#sp-renouncingcitizenship-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_renouncingcitizenship_list_process = document.getElementById('sp-renouncingcitizenship-list-process');
  if (sp_renouncingcitizenship_list_process) {
    gsap.from('#sp-renouncingcitizenship-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_renouncingcitizenship_section_timelines_deadlines = document.getElementById('sp-renouncingcitizenship-section-timelines-deadlines');
  if (sp_renouncingcitizenship_section_timelines_deadlines) {
    gsap.fromTo('#sp-renouncingcitizenship-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_renouncingcitizenship_section_fees_costs = document.getElementById('sp-renouncingcitizenship-section-fees-costs');
  if (sp_renouncingcitizenship_section_fees_costs) {
    gsap.fromTo('#sp-renouncingcitizenship-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_renouncingcitizenship_list_risks_common_mistakes = document.getElementById('sp-renouncingcitizenship-list-risks-common-mistakes');
  if (sp_renouncingcitizenship_list_risks_common_mistakes) {
    gsap.from('#sp-renouncingcitizenship-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_renouncingcitizenship_section_diy_vs_professional_assistance = document.getElementById('sp-renouncingcitizenship-section-diy-vs-professional-assistance');
  if (sp_renouncingcitizenship_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sp-renouncingcitizenship-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_renouncingcitizenship_section_so_paulo_specific_context = document.getElementById('sp-renouncingcitizenship-section-so-paulo-specific-context');
  if (sp_renouncingcitizenship_section_so_paulo_specific_context) {
    gsap.fromTo('#sp-renouncingcitizenship-section-so-paulo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_renouncingcitizenship_section_what_our_clients_say = document.getElementById('sp-renouncingcitizenship-section-what-our-clients-say');
  if (sp_renouncingcitizenship_section_what_our_clients_say) {
    gsap.fromTo('#sp-renouncingcitizenship-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_renouncingcitizenship_section_frequently_asked_questions = document.getElementById('sp-renouncingcitizenship-section-frequently-asked-questions');
  if (sp_renouncingcitizenship_section_frequently_asked_questions) {
    gsap.fromTo('#sp-renouncingcitizenship-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_renouncingcitizenship_section_international_support = document.getElementById('sp-renouncingcitizenship-section-international-support');
  if (sp_renouncingcitizenship_section_international_support) {
    gsap.fromTo('#sp-renouncingcitizenship-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_renouncingcitizenship_list_our_credentials = document.getElementById('sp-renouncingcitizenship-list-our-credentials');
  if (sp_renouncingcitizenship_list_our_credentials) {
    gsap.from('#sp-renouncingcitizenship-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_renouncingcitizenship_list_related_services = document.getElementById('sp-renouncingcitizenship-list-related-services');
  if (sp_renouncingcitizenship_list_related_services) {
    gsap.from('#sp-renouncingcitizenship-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_renouncingcitizenship_section_youre_in_good_hands = document.getElementById('sp-renouncingcitizenship-section-youre-in-good-hands');
  if (sp_renouncingcitizenship_section_youre_in_good_hands) {
    gsap.fromTo('#sp-renouncingcitizenship-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_renouncingcitizenship_section_21 = document.getElementById('sp-renouncingcitizenship-section-21');
  if (sp_renouncingcitizenship_section_21) {
    gsap.fromTo('#sp-renouncingcitizenship-section-21', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_provisional_form_provisional_naturalisation_in_brazil_for_minors = document.getElementById('sp-provisional-form-provisional-naturalisation-in-brazil-for-minors');
  if (sp_provisional_form_provisional_naturalisation_in_brazil_for_minors) {
    gsap.from('#sp-provisional-form-provisional-naturalisation-in-brazil-for-minors input, #sp-provisional-form-provisional-naturalisation-in-brazil-for-minors textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_provisional_list_quick_facts = document.getElementById('sp-provisional-list-quick-facts');
  if (sp_provisional_list_quick_facts) {
    gsap.from('#sp-provisional-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_provisional_list_common_challenges_applicants_face = document.getElementById('sp-provisional-list-common-challenges-applicants-face');
  if (sp_provisional_list_common_challenges_applicants_face) {
    gsap.from('#sp-provisional-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_provisional_list_how_we_solve_these_challenges = document.getElementById('sp-provisional-list-how-we-solve-these-challenges');
  if (sp_provisional_list_how_we_solve_these_challenges) {
    gsap.from('#sp-provisional-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_provisional_section_naturalisation_overview = document.getElementById('sp-provisional-section-naturalisation-overview');
  if (sp_provisional_section_naturalisation_overview) {
    gsap.fromTo('#sp-provisional-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_provisional_form_who_is_this_naturalisation_for = document.getElementById('sp-provisional-form-who-is-this-naturalisation-for');
  if (sp_provisional_form_who_is_this_naturalisation_for) {
    gsap.from('#sp-provisional-form-who-is-this-naturalisation-for input, #sp-provisional-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_provisional_list_required_documents = document.getElementById('sp-provisional-list-required-documents');
  if (sp_provisional_list_required_documents) {
    gsap.from('#sp-provisional-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_provisional_list_application_process = document.getElementById('sp-provisional-list-application-process');
  if (sp_provisional_list_application_process) {
    gsap.from('#sp-provisional-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_provisional_section_timelines_deadlines = document.getElementById('sp-provisional-section-timelines-deadlines');
  if (sp_provisional_section_timelines_deadlines) {
    gsap.fromTo('#sp-provisional-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_provisional_section_fees_costs = document.getElementById('sp-provisional-section-fees-costs');
  if (sp_provisional_section_fees_costs) {
    gsap.fromTo('#sp-provisional-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_provisional_list_risks_common_mistakes = document.getElementById('sp-provisional-list-risks-common-mistakes');
  if (sp_provisional_list_risks_common_mistakes) {
    gsap.from('#sp-provisional-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_provisional_section_diy_vs_professional_assistance = document.getElementById('sp-provisional-section-diy-vs-professional-assistance');
  if (sp_provisional_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sp-provisional-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_provisional_section_so_paulo_specific_context = document.getElementById('sp-provisional-section-so-paulo-specific-context');
  if (sp_provisional_section_so_paulo_specific_context) {
    gsap.fromTo('#sp-provisional-section-so-paulo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_provisional_section_what_our_clients_say = document.getElementById('sp-provisional-section-what-our-clients-say');
  if (sp_provisional_section_what_our_clients_say) {
    gsap.fromTo('#sp-provisional-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_provisional_section_frequently_asked_questions = document.getElementById('sp-provisional-section-frequently-asked-questions');
  if (sp_provisional_section_frequently_asked_questions) {
    gsap.fromTo('#sp-provisional-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_provisional_section_international_support = document.getElementById('sp-provisional-section-international-support');
  if (sp_provisional_section_international_support) {
    gsap.fromTo('#sp-provisional-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_provisional_list_our_credentials = document.getElementById('sp-provisional-list-our-credentials');
  if (sp_provisional_list_our_credentials) {
    gsap.from('#sp-provisional-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_provisional_list_related_services = document.getElementById('sp-provisional-list-related-services');
  if (sp_provisional_list_related_services) {
    gsap.from('#sp-provisional-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_provisional_section_youre_in_good_hands = document.getElementById('sp-provisional-section-youre-in-good-hands');
  if (sp_provisional_section_youre_in_good_hands) {
    gsap.fromTo('#sp-provisional-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_provisional_section_21 = document.getElementById('sp-provisional-section-21');
  if (sp_provisional_section_21) {
    gsap.fromTo('#sp-provisional-section-21', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_special_form_special_naturalisation_in_brazil_for_particular_cases = document.getElementById('sp-special-form-special-naturalisation-in-brazil-for-particular-cases');
  if (sp_special_form_special_naturalisation_in_brazil_for_particular_cases) {
    gsap.from('#sp-special-form-special-naturalisation-in-brazil-for-particular-cases input, #sp-special-form-special-naturalisation-in-brazil-for-particular-cases textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_special_list_quick_facts = document.getElementById('sp-special-list-quick-facts');
  if (sp_special_list_quick_facts) {
    gsap.from('#sp-special-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_special_list_common_challenges_applicants_face = document.getElementById('sp-special-list-common-challenges-applicants-face');
  if (sp_special_list_common_challenges_applicants_face) {
    gsap.from('#sp-special-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_special_list_how_we_solve_these_challenges = document.getElementById('sp-special-list-how-we-solve-these-challenges');
  if (sp_special_list_how_we_solve_these_challenges) {
    gsap.from('#sp-special-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_special_section_naturalisation_overview = document.getElementById('sp-special-section-naturalisation-overview');
  if (sp_special_section_naturalisation_overview) {
    gsap.fromTo('#sp-special-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_special_form_who_is_this_naturalisation_for = document.getElementById('sp-special-form-who-is-this-naturalisation-for');
  if (sp_special_form_who_is_this_naturalisation_for) {
    gsap.from('#sp-special-form-who-is-this-naturalisation-for input, #sp-special-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_special_list_required_documents = document.getElementById('sp-special-list-required-documents');
  if (sp_special_list_required_documents) {
    gsap.from('#sp-special-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_special_list_application_process = document.getElementById('sp-special-list-application-process');
  if (sp_special_list_application_process) {
    gsap.from('#sp-special-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_special_section_timelines_deadlines = document.getElementById('sp-special-section-timelines-deadlines');
  if (sp_special_section_timelines_deadlines) {
    gsap.fromTo('#sp-special-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_special_section_fees_costs = document.getElementById('sp-special-section-fees-costs');
  if (sp_special_section_fees_costs) {
    gsap.fromTo('#sp-special-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_special_list_risks_common_mistakes = document.getElementById('sp-special-list-risks-common-mistakes');
  if (sp_special_list_risks_common_mistakes) {
    gsap.from('#sp-special-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_special_section_diy_vs_professional_assistance = document.getElementById('sp-special-section-diy-vs-professional-assistance');
  if (sp_special_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sp-special-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_special_section_so_paulo_specific_context = document.getElementById('sp-special-section-so-paulo-specific-context');
  if (sp_special_section_so_paulo_specific_context) {
    gsap.fromTo('#sp-special-section-so-paulo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_special_section_what_our_clients_say = document.getElementById('sp-special-section-what-our-clients-say');
  if (sp_special_section_what_our_clients_say) {
    gsap.fromTo('#sp-special-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_special_section_frequently_asked_questions = document.getElementById('sp-special-section-frequently-asked-questions');
  if (sp_special_section_frequently_asked_questions) {
    gsap.fromTo('#sp-special-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_special_section_international_support = document.getElementById('sp-special-section-international-support');
  if (sp_special_section_international_support) {
    gsap.fromTo('#sp-special-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_special_list_our_credentials = document.getElementById('sp-special-list-our-credentials');
  if (sp_special_list_our_credentials) {
    gsap.from('#sp-special-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_special_list_related_services = document.getElementById('sp-special-list-related-services');
  if (sp_special_list_related_services) {
    gsap.from('#sp-special-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_special_section_youre_in_good_hands = document.getElementById('sp-special-section-youre-in-good-hands');
  if (sp_special_section_youre_in_good_hands) {
    gsap.fromTo('#sp-special-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_special_section_21 = document.getElementById('sp-special-section-21');
  if (sp_special_section_21) {
    gsap.fromTo('#sp-special-section-21', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_ordinary_form_obtain_brazilian_citizenship_through_ordinary_naturalisation = document.getElementById('sp-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation');
  if (sp_ordinary_form_obtain_brazilian_citizenship_through_ordinary_naturalisation) {
    gsap.from('#sp-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation input, #sp-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_ordinary_list_quick_facts = document.getElementById('sp-ordinary-list-quick-facts');
  if (sp_ordinary_list_quick_facts) {
    gsap.from('#sp-ordinary-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_ordinary_list_common_challenges_applicants_face = document.getElementById('sp-ordinary-list-common-challenges-applicants-face');
  if (sp_ordinary_list_common_challenges_applicants_face) {
    gsap.from('#sp-ordinary-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_ordinary_list_how_we_solve_these_challenges = document.getElementById('sp-ordinary-list-how-we-solve-these-challenges');
  if (sp_ordinary_list_how_we_solve_these_challenges) {
    gsap.from('#sp-ordinary-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_ordinary_section_naturalisation_overview = document.getElementById('sp-ordinary-section-naturalisation-overview');
  if (sp_ordinary_section_naturalisation_overview) {
    gsap.fromTo('#sp-ordinary-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_ordinary_form_who_is_this_naturalisation_for = document.getElementById('sp-ordinary-form-who-is-this-naturalisation-for');
  if (sp_ordinary_form_who_is_this_naturalisation_for) {
    gsap.from('#sp-ordinary-form-who-is-this-naturalisation-for input, #sp-ordinary-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_ordinary_list_required_documents = document.getElementById('sp-ordinary-list-required-documents');
  if (sp_ordinary_list_required_documents) {
    gsap.from('#sp-ordinary-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_ordinary_list_application_process = document.getElementById('sp-ordinary-list-application-process');
  if (sp_ordinary_list_application_process) {
    gsap.from('#sp-ordinary-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_ordinary_section_timelines_deadlines = document.getElementById('sp-ordinary-section-timelines-deadlines');
  if (sp_ordinary_section_timelines_deadlines) {
    gsap.fromTo('#sp-ordinary-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_ordinary_section_fees_costs = document.getElementById('sp-ordinary-section-fees-costs');
  if (sp_ordinary_section_fees_costs) {
    gsap.fromTo('#sp-ordinary-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_ordinary_list_risks_common_mistakes = document.getElementById('sp-ordinary-list-risks-common-mistakes');
  if (sp_ordinary_list_risks_common_mistakes) {
    gsap.from('#sp-ordinary-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_ordinary_section_diy_vs_professional_assistance = document.getElementById('sp-ordinary-section-diy-vs-professional-assistance');
  if (sp_ordinary_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sp-ordinary-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_ordinary_section_so_paulo_specific_context = document.getElementById('sp-ordinary-section-so-paulo-specific-context');
  if (sp_ordinary_section_so_paulo_specific_context) {
    gsap.fromTo('#sp-ordinary-section-so-paulo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_ordinary_section_what_our_clients_say = document.getElementById('sp-ordinary-section-what-our-clients-say');
  if (sp_ordinary_section_what_our_clients_say) {
    gsap.fromTo('#sp-ordinary-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_ordinary_section_frequently_asked_questions = document.getElementById('sp-ordinary-section-frequently-asked-questions');
  if (sp_ordinary_section_frequently_asked_questions) {
    gsap.fromTo('#sp-ordinary-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_ordinary_section_international_support = document.getElementById('sp-ordinary-section-international-support');
  if (sp_ordinary_section_international_support) {
    gsap.fromTo('#sp-ordinary-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_ordinary_list_our_credentials = document.getElementById('sp-ordinary-list-our-credentials');
  if (sp_ordinary_list_our_credentials) {
    gsap.from('#sp-ordinary-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_ordinary_list_related_services = document.getElementById('sp-ordinary-list-related-services');
  if (sp_ordinary_list_related_services) {
    gsap.from('#sp-ordinary-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_ordinary_section_youre_in_good_hands = document.getElementById('sp-ordinary-section-youre-in-good-hands');
  if (sp_ordinary_section_youre_in_good_hands) {
    gsap.fromTo('#sp-ordinary-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_ordinary_section_21 = document.getElementById('sp-ordinary-section-21');
  if (sp_ordinary_section_21) {
    gsap.fromTo('#sp-ordinary-section-21', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_extraordinary_form_extraordinary_naturalisation_in_brazil_for_contributions = document.getElementById('sp-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions');
  if (sp_extraordinary_form_extraordinary_naturalisation_in_brazil_for_contributions) {
    gsap.from('#sp-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions input, #sp-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_extraordinary_list_quick_facts = document.getElementById('sp-extraordinary-list-quick-facts');
  if (sp_extraordinary_list_quick_facts) {
    gsap.from('#sp-extraordinary-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_extraordinary_list_common_challenges_applicants_face = document.getElementById('sp-extraordinary-list-common-challenges-applicants-face');
  if (sp_extraordinary_list_common_challenges_applicants_face) {
    gsap.from('#sp-extraordinary-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_extraordinary_list_how_we_solve_these_challenges = document.getElementById('sp-extraordinary-list-how-we-solve-these-challenges');
  if (sp_extraordinary_list_how_we_solve_these_challenges) {
    gsap.from('#sp-extraordinary-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_extraordinary_section_naturalisation_overview = document.getElementById('sp-extraordinary-section-naturalisation-overview');
  if (sp_extraordinary_section_naturalisation_overview) {
    gsap.fromTo('#sp-extraordinary-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_extraordinary_form_who_is_this_naturalisation_for = document.getElementById('sp-extraordinary-form-who-is-this-naturalisation-for');
  if (sp_extraordinary_form_who_is_this_naturalisation_for) {
    gsap.from('#sp-extraordinary-form-who-is-this-naturalisation-for input, #sp-extraordinary-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_extraordinary_list_required_documents = document.getElementById('sp-extraordinary-list-required-documents');
  if (sp_extraordinary_list_required_documents) {
    gsap.from('#sp-extraordinary-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_extraordinary_list_application_process = document.getElementById('sp-extraordinary-list-application-process');
  if (sp_extraordinary_list_application_process) {
    gsap.from('#sp-extraordinary-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_extraordinary_section_timelines_deadlines = document.getElementById('sp-extraordinary-section-timelines-deadlines');
  if (sp_extraordinary_section_timelines_deadlines) {
    gsap.fromTo('#sp-extraordinary-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_extraordinary_section_fees_costs = document.getElementById('sp-extraordinary-section-fees-costs');
  if (sp_extraordinary_section_fees_costs) {
    gsap.fromTo('#sp-extraordinary-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_extraordinary_list_risks_common_mistakes = document.getElementById('sp-extraordinary-list-risks-common-mistakes');
  if (sp_extraordinary_list_risks_common_mistakes) {
    gsap.from('#sp-extraordinary-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_extraordinary_section_diy_vs_professional_assistance = document.getElementById('sp-extraordinary-section-diy-vs-professional-assistance');
  if (sp_extraordinary_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sp-extraordinary-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_extraordinary_section_so_paulo_specific_context = document.getElementById('sp-extraordinary-section-so-paulo-specific-context');
  if (sp_extraordinary_section_so_paulo_specific_context) {
    gsap.fromTo('#sp-extraordinary-section-so-paulo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_extraordinary_section_what_our_clients_say = document.getElementById('sp-extraordinary-section-what-our-clients-say');
  if (sp_extraordinary_section_what_our_clients_say) {
    gsap.fromTo('#sp-extraordinary-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_extraordinary_section_frequently_asked_questions = document.getElementById('sp-extraordinary-section-frequently-asked-questions');
  if (sp_extraordinary_section_frequently_asked_questions) {
    gsap.fromTo('#sp-extraordinary-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_extraordinary_section_international_support = document.getElementById('sp-extraordinary-section-international-support');
  if (sp_extraordinary_section_international_support) {
    gsap.fromTo('#sp-extraordinary-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_extraordinary_list_our_credentials = document.getElementById('sp-extraordinary-list-our-credentials');
  if (sp_extraordinary_list_our_credentials) {
    gsap.from('#sp-extraordinary-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_extraordinary_list_related_services = document.getElementById('sp-extraordinary-list-related-services');
  if (sp_extraordinary_list_related_services) {
    gsap.from('#sp-extraordinary-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_extraordinary_section_youre_in_good_hands = document.getElementById('sp-extraordinary-section-youre-in-good-hands');
  if (sp_extraordinary_section_youre_in_good_hands) {
    gsap.fromTo('#sp-extraordinary-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_extraordinary_section_21 = document.getElementById('sp-extraordinary-section-21');
  if (sp_extraordinary_section_21) {
    gsap.fromTo('#sp-extraordinary-section-21', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const reacquisition_citizenship.html = document.getElementById('reacquisition-citizenship.html');
  if (reacquisition_citizenship.html) {
    gsap.fromTo('#reacquisition-citizenship.html', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_reacquisitioncitizenship_form_reacquire_brazilian_citizenship = document.getElementById('sp-reacquisitioncitizenship-form-reacquire-brazilian-citizenship');
  if (sp_reacquisitioncitizenship_form_reacquire_brazilian_citizenship) {
    gsap.from('#sp-reacquisitioncitizenship-form-reacquire-brazilian-citizenship input, #sp-reacquisitioncitizenship-form-reacquire-brazilian-citizenship textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_reacquisitioncitizenship_list_quick_facts = document.getElementById('sp-reacquisitioncitizenship-list-quick-facts');
  if (sp_reacquisitioncitizenship_list_quick_facts) {
    gsap.from('#sp-reacquisitioncitizenship-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_reacquisitioncitizenship_list_common_challenges_applicants_face = document.getElementById('sp-reacquisitioncitizenship-list-common-challenges-applicants-face');
  if (sp_reacquisitioncitizenship_list_common_challenges_applicants_face) {
    gsap.from('#sp-reacquisitioncitizenship-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_reacquisitioncitizenship_list_how_we_solve_these_challenges = document.getElementById('sp-reacquisitioncitizenship-list-how-we-solve-these-challenges');
  if (sp_reacquisitioncitizenship_list_how_we_solve_these_challenges) {
    gsap.from('#sp-reacquisitioncitizenship-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_reacquisitioncitizenship_section_reacquisition_overview = document.getElementById('sp-reacquisitioncitizenship-section-reacquisition-overview');
  if (sp_reacquisitioncitizenship_section_reacquisition_overview) {
    gsap.fromTo('#sp-reacquisitioncitizenship-section-reacquisition-overview', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_reacquisitioncitizenship_form_who_is_this_for = document.getElementById('sp-reacquisitioncitizenship-form-who-is-this-for');
  if (sp_reacquisitioncitizenship_form_who_is_this_for) {
    gsap.from('#sp-reacquisitioncitizenship-form-who-is-this-for input, #sp-reacquisitioncitizenship-form-who-is-this-for textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_reacquisitioncitizenship_list_required_documents = document.getElementById('sp-reacquisitioncitizenship-list-required-documents');
  if (sp_reacquisitioncitizenship_list_required_documents) {
    gsap.from('#sp-reacquisitioncitizenship-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_reacquisitioncitizenship_list_process = document.getElementById('sp-reacquisitioncitizenship-list-process');
  if (sp_reacquisitioncitizenship_list_process) {
    gsap.from('#sp-reacquisitioncitizenship-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_reacquisitioncitizenship_section_timelines_deadlines = document.getElementById('sp-reacquisitioncitizenship-section-timelines-deadlines');
  if (sp_reacquisitioncitizenship_section_timelines_deadlines) {
    gsap.fromTo('#sp-reacquisitioncitizenship-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_reacquisitioncitizenship_section_fees_costs = document.getElementById('sp-reacquisitioncitizenship-section-fees-costs');
  if (sp_reacquisitioncitizenship_section_fees_costs) {
    gsap.fromTo('#sp-reacquisitioncitizenship-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_reacquisitioncitizenship_list_risks_common_mistakes = document.getElementById('sp-reacquisitioncitizenship-list-risks-common-mistakes');
  if (sp_reacquisitioncitizenship_list_risks_common_mistakes) {
    gsap.from('#sp-reacquisitioncitizenship-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_reacquisitioncitizenship_section_diy_vs_professional_assistance = document.getElementById('sp-reacquisitioncitizenship-section-diy-vs-professional-assistance');
  if (sp_reacquisitioncitizenship_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sp-reacquisitioncitizenship-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_reacquisitioncitizenship_section_so_paulo_specific_context = document.getElementById('sp-reacquisitioncitizenship-section-so-paulo-specific-context');
  if (sp_reacquisitioncitizenship_section_so_paulo_specific_context) {
    gsap.fromTo('#sp-reacquisitioncitizenship-section-so-paulo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_reacquisitioncitizenship_section_what_our_clients_say = document.getElementById('sp-reacquisitioncitizenship-section-what-our-clients-say');
  if (sp_reacquisitioncitizenship_section_what_our_clients_say) {
    gsap.fromTo('#sp-reacquisitioncitizenship-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_reacquisitioncitizenship_section_frequently_asked_questions = document.getElementById('sp-reacquisitioncitizenship-section-frequently-asked-questions');
  if (sp_reacquisitioncitizenship_section_frequently_asked_questions) {
    gsap.fromTo('#sp-reacquisitioncitizenship-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_reacquisitioncitizenship_section_international_support = document.getElementById('sp-reacquisitioncitizenship-section-international-support');
  if (sp_reacquisitioncitizenship_section_international_support) {
    gsap.fromTo('#sp-reacquisitioncitizenship-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_reacquisitioncitizenship_list_our_credentials = document.getElementById('sp-reacquisitioncitizenship-list-our-credentials');
  if (sp_reacquisitioncitizenship_list_our_credentials) {
    gsap.from('#sp-reacquisitioncitizenship-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_reacquisitioncitizenship_list_related_services = document.getElementById('sp-reacquisitioncitizenship-list-related-services');
  if (sp_reacquisitioncitizenship_list_related_services) {
    gsap.from('#sp-reacquisitioncitizenship-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_reacquisitioncitizenship_section_youre_in_good_hands = document.getElementById('sp-reacquisitioncitizenship-section-youre-in-good-hands');
  if (sp_reacquisitioncitizenship_section_youre_in_good_hands) {
    gsap.fromTo('#sp-reacquisitioncitizenship-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_reacquisitioncitizenship_section_21 = document.getElementById('sp-reacquisitioncitizenship-section-21');
  if (sp_reacquisitioncitizenship_section_21) {
    gsap.fromTo('#sp-reacquisitioncitizenship-section-21', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const scientific_research.html = document.getElementById('scientific-research.html');
  if (scientific_research.html) {
    gsap.fromTo('#scientific-research.html', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_scientificresearch_form_conduct_scientific_research_with_residency_in_brazil = document.getElementById('sp-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil');
  if (sp_scientificresearch_form_conduct_scientific_research_with_residency_in_brazil) {
    gsap.from('#sp-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil input, #sp-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_scientificresearch_list_quick_facts = document.getElementById('sp-scientificresearch-list-quick-facts');
  if (sp_scientificresearch_list_quick_facts) {
    gsap.from('#sp-scientificresearch-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_scientificresearch_list_common_challenges_applicants_face = document.getElementById('sp-scientificresearch-list-common-challenges-applicants-face');
  if (sp_scientificresearch_list_common_challenges_applicants_face) {
    gsap.from('#sp-scientificresearch-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_scientificresearch_list_how_we_solve_these_challenges = document.getElementById('sp-scientificresearch-list-how-we-solve-these-challenges');
  if (sp_scientificresearch_list_how_we_solve_these_challenges) {
    gsap.from('#sp-scientificresearch-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_scientificresearch_section_residency_overview = document.getElementById('sp-scientificresearch-section-residency-overview');
  if (sp_scientificresearch_section_residency_overview) {
    gsap.fromTo('#sp-scientificresearch-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_scientificresearch_form_who_is_this_residency_for = document.getElementById('sp-scientificresearch-form-who-is-this-residency-for');
  if (sp_scientificresearch_form_who_is_this_residency_for) {
    gsap.from('#sp-scientificresearch-form-who-is-this-residency-for input, #sp-scientificresearch-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_scientificresearch_list_required_documents = document.getElementById('sp-scientificresearch-list-required-documents');
  if (sp_scientificresearch_list_required_documents) {
    gsap.from('#sp-scientificresearch-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_scientificresearch_list_application_process = document.getElementById('sp-scientificresearch-list-application-process');
  if (sp_scientificresearch_list_application_process) {
    gsap.from('#sp-scientificresearch-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_scientificresearch_section_timelines_deadlines = document.getElementById('sp-scientificresearch-section-timelines-deadlines');
  if (sp_scientificresearch_section_timelines_deadlines) {
    gsap.fromTo('#sp-scientificresearch-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_scientificresearch_section_fees_costs = document.getElementById('sp-scientificresearch-section-fees-costs');
  if (sp_scientificresearch_section_fees_costs) {
    gsap.fromTo('#sp-scientificresearch-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_scientificresearch_list_risks_common_mistakes = document.getElementById('sp-scientificresearch-list-risks-common-mistakes');
  if (sp_scientificresearch_list_risks_common_mistakes) {
    gsap.from('#sp-scientificresearch-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_scientificresearch_section_diy_vs_professional_assistance = document.getElementById('sp-scientificresearch-section-diy-vs-professional-assistance');
  if (sp_scientificresearch_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sp-scientificresearch-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_scientificresearch_section_so_paulo_specific_context = document.getElementById('sp-scientificresearch-section-so-paulo-specific-context');
  if (sp_scientificresearch_section_so_paulo_specific_context) {
    gsap.fromTo('#sp-scientificresearch-section-so-paulo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_scientificresearch_section_what_our_clients_say = document.getElementById('sp-scientificresearch-section-what-our-clients-say');
  if (sp_scientificresearch_section_what_our_clients_say) {
    gsap.fromTo('#sp-scientificresearch-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_scientificresearch_section_frequently_asked_questions = document.getElementById('sp-scientificresearch-section-frequently-asked-questions');
  if (sp_scientificresearch_section_frequently_asked_questions) {
    gsap.fromTo('#sp-scientificresearch-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_scientificresearch_section_international_support = document.getElementById('sp-scientificresearch-section-international-support');
  if (sp_scientificresearch_section_international_support) {
    gsap.fromTo('#sp-scientificresearch-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_scientificresearch_list_our_credentials = document.getElementById('sp-scientificresearch-list-our-credentials');
  if (sp_scientificresearch_list_our_credentials) {
    gsap.from('#sp-scientificresearch-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_scientificresearch_list_related_services = document.getElementById('sp-scientificresearch-list-related-services');
  if (sp_scientificresearch_list_related_services) {
    gsap.from('#sp-scientificresearch-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_scientificresearch_section_youre_in_good_hands = document.getElementById('sp-scientificresearch-section-youre-in-good-hands');
  if (sp_scientificresearch_section_youre_in_good_hands) {
    gsap.fromTo('#sp-scientificresearch-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_scientificresearch_section_21 = document.getElementById('sp-scientificresearch-section-21');
  if (sp_scientificresearch_section_21) {
    gsap.fromTo('#sp-scientificresearch-section-21', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_study_form_study_in_brazil_with_study_residency = document.getElementById('sp-study-form-study-in-brazil-with-study-residency');
  if (sp_study_form_study_in_brazil_with_study_residency) {
    gsap.from('#sp-study-form-study-in-brazil-with-study-residency input, #sp-study-form-study-in-brazil-with-study-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_study_list_quick_facts = document.getElementById('sp-study-list-quick-facts');
  if (sp_study_list_quick_facts) {
    gsap.from('#sp-study-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_study_list_common_challenges_applicants_face = document.getElementById('sp-study-list-common-challenges-applicants-face');
  if (sp_study_list_common_challenges_applicants_face) {
    gsap.from('#sp-study-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_study_list_how_we_solve_these_challenges = document.getElementById('sp-study-list-how-we-solve-these-challenges');
  if (sp_study_list_how_we_solve_these_challenges) {
    gsap.from('#sp-study-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_study_section_residency_overview = document.getElementById('sp-study-section-residency-overview');
  if (sp_study_section_residency_overview) {
    gsap.fromTo('#sp-study-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_study_form_who_is_this_residency_for = document.getElementById('sp-study-form-who-is-this-residency-for');
  if (sp_study_form_who_is_this_residency_for) {
    gsap.from('#sp-study-form-who-is-this-residency-for input, #sp-study-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_study_list_required_documents = document.getElementById('sp-study-list-required-documents');
  if (sp_study_list_required_documents) {
    gsap.from('#sp-study-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_study_list_application_process = document.getElementById('sp-study-list-application-process');
  if (sp_study_list_application_process) {
    gsap.from('#sp-study-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_study_section_timelines_deadlines = document.getElementById('sp-study-section-timelines-deadlines');
  if (sp_study_section_timelines_deadlines) {
    gsap.fromTo('#sp-study-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_study_section_fees_costs = document.getElementById('sp-study-section-fees-costs');
  if (sp_study_section_fees_costs) {
    gsap.fromTo('#sp-study-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_study_list_risks_common_mistakes = document.getElementById('sp-study-list-risks-common-mistakes');
  if (sp_study_list_risks_common_mistakes) {
    gsap.from('#sp-study-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_study_section_diy_vs_professional_assistance = document.getElementById('sp-study-section-diy-vs-professional-assistance');
  if (sp_study_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sp-study-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_study_section_so_paulo_specific_context = document.getElementById('sp-study-section-so-paulo-specific-context');
  if (sp_study_section_so_paulo_specific_context) {
    gsap.fromTo('#sp-study-section-so-paulo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_study_section_what_our_clients_say = document.getElementById('sp-study-section-what-our-clients-say');
  if (sp_study_section_what_our_clients_say) {
    gsap.fromTo('#sp-study-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_study_section_frequently_asked_questions = document.getElementById('sp-study-section-frequently-asked-questions');
  if (sp_study_section_frequently_asked_questions) {
    gsap.fromTo('#sp-study-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_study_section_international_support = document.getElementById('sp-study-section-international-support');
  if (sp_study_section_international_support) {
    gsap.fromTo('#sp-study-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_study_list_our_credentials = document.getElementById('sp-study-list-our-credentials');
  if (sp_study_list_our_credentials) {
    gsap.from('#sp-study-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_study_list_related_services = document.getElementById('sp-study-list-related-services');
  if (sp_study_list_related_services) {
    gsap.from('#sp-study-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_study_section_youre_in_good_hands = document.getElementById('sp-study-section-youre-in-good-hands');
  if (sp_study_section_youre_in_good_hands) {
    gsap.fromTo('#sp-study-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_study_section_21 = document.getElementById('sp-study-section-21');
  if (sp_study_section_21) {
    gsap.fromTo('#sp-study-section-21', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const educational_exchange.html = document.getElementById('educational-exchange.html');
  if (educational_exchange.html) {
    gsap.fromTo('#educational-exchange.html', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_educationalexchange_form_participate_in_educational_exchanges_with_residency_in_brazil = document.getElementById('sp-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil');
  if (sp_educationalexchange_form_participate_in_educational_exchanges_with_residency_in_brazil) {
    gsap.from('#sp-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil input, #sp-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_educationalexchange_list_quick_facts = document.getElementById('sp-educationalexchange-list-quick-facts');
  if (sp_educationalexchange_list_quick_facts) {
    gsap.from('#sp-educationalexchange-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_educationalexchange_list_common_challenges_applicants_face = document.getElementById('sp-educationalexchange-list-common-challenges-applicants-face');
  if (sp_educationalexchange_list_common_challenges_applicants_face) {
    gsap.from('#sp-educationalexchange-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_educationalexchange_list_how_we_solve_these_challenges = document.getElementById('sp-educationalexchange-list-how-we-solve-these-challenges');
  if (sp_educationalexchange_list_how_we_solve_these_challenges) {
    gsap.from('#sp-educationalexchange-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_educationalexchange_section_residency_overview = document.getElementById('sp-educationalexchange-section-residency-overview');
  if (sp_educationalexchange_section_residency_overview) {
    gsap.fromTo('#sp-educationalexchange-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_educationalexchange_form_who_is_this_residency_for = document.getElementById('sp-educationalexchange-form-who-is-this-residency-for');
  if (sp_educationalexchange_form_who_is_this_residency_for) {
    gsap.from('#sp-educationalexchange-form-who-is-this-residency-for input, #sp-educationalexchange-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_educationalexchange_list_required_documents = document.getElementById('sp-educationalexchange-list-required-documents');
  if (sp_educationalexchange_list_required_documents) {
    gsap.from('#sp-educationalexchange-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_educationalexchange_list_application_process = document.getElementById('sp-educationalexchange-list-application-process');
  if (sp_educationalexchange_list_application_process) {
    gsap.from('#sp-educationalexchange-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_educationalexchange_section_timelines_deadlines = document.getElementById('sp-educationalexchange-section-timelines-deadlines');
  if (sp_educationalexchange_section_timelines_deadlines) {
    gsap.fromTo('#sp-educationalexchange-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_educationalexchange_section_fees_costs = document.getElementById('sp-educationalexchange-section-fees-costs');
  if (sp_educationalexchange_section_fees_costs) {
    gsap.fromTo('#sp-educationalexchange-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_educationalexchange_list_risks_common_mistakes = document.getElementById('sp-educationalexchange-list-risks-common-mistakes');
  if (sp_educationalexchange_list_risks_common_mistakes) {
    gsap.from('#sp-educationalexchange-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_educationalexchange_section_diy_vs_professional_assistance = document.getElementById('sp-educationalexchange-section-diy-vs-professional-assistance');
  if (sp_educationalexchange_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sp-educationalexchange-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_educationalexchange_section_so_paulo_specific_context = document.getElementById('sp-educationalexchange-section-so-paulo-specific-context');
  if (sp_educationalexchange_section_so_paulo_specific_context) {
    gsap.fromTo('#sp-educationalexchange-section-so-paulo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_educationalexchange_section_what_our_clients_say = document.getElementById('sp-educationalexchange-section-what-our-clients-say');
  if (sp_educationalexchange_section_what_our_clients_say) {
    gsap.fromTo('#sp-educationalexchange-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_educationalexchange_section_frequently_asked_questions = document.getElementById('sp-educationalexchange-section-frequently-asked-questions');
  if (sp_educationalexchange_section_frequently_asked_questions) {
    gsap.fromTo('#sp-educationalexchange-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_educationalexchange_section_international_support = document.getElementById('sp-educationalexchange-section-international-support');
  if (sp_educationalexchange_section_international_support) {
    gsap.fromTo('#sp-educationalexchange-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_educationalexchange_list_our_credentials = document.getElementById('sp-educationalexchange-list-our-credentials');
  if (sp_educationalexchange_list_our_credentials) {
    gsap.from('#sp-educationalexchange-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_educationalexchange_list_related_services = document.getElementById('sp-educationalexchange-list-related-services');
  if (sp_educationalexchange_list_related_services) {
    gsap.from('#sp-educationalexchange-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_educationalexchange_section_youre_in_good_hands = document.getElementById('sp-educationalexchange-section-youre-in-good-hands');
  if (sp_educationalexchange_section_youre_in_good_hands) {
    gsap.fromTo('#sp-educationalexchange-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_educationalexchange_section_21 = document.getElementById('sp-educationalexchange-section-21');
  if (sp_educationalexchange_section_21) {
    gsap.fromTo('#sp-educationalexchange-section-21', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_humanitarian_form_humanitarian_residency_in_brazil_for_protection = document.getElementById('sp-humanitarian-form-humanitarian-residency-in-brazil-for-protection');
  if (sp_humanitarian_form_humanitarian_residency_in_brazil_for_protection) {
    gsap.from('#sp-humanitarian-form-humanitarian-residency-in-brazil-for-protection input, #sp-humanitarian-form-humanitarian-residency-in-brazil-for-protection textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_humanitarian_list_quick_facts = document.getElementById('sp-humanitarian-list-quick-facts');
  if (sp_humanitarian_list_quick_facts) {
    gsap.from('#sp-humanitarian-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_humanitarian_list_common_challenges_applicants_face = document.getElementById('sp-humanitarian-list-common-challenges-applicants-face');
  if (sp_humanitarian_list_common_challenges_applicants_face) {
    gsap.from('#sp-humanitarian-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_humanitarian_list_how_we_solve_these_challenges = document.getElementById('sp-humanitarian-list-how-we-solve-these-challenges');
  if (sp_humanitarian_list_how_we_solve_these_challenges) {
    gsap.from('#sp-humanitarian-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_humanitarian_section_residency_overview = document.getElementById('sp-humanitarian-section-residency-overview');
  if (sp_humanitarian_section_residency_overview) {
    gsap.fromTo('#sp-humanitarian-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_humanitarian_form_who_is_this_residency_for = document.getElementById('sp-humanitarian-form-who-is-this-residency-for');
  if (sp_humanitarian_form_who_is_this_residency_for) {
    gsap.from('#sp-humanitarian-form-who-is-this-residency-for input, #sp-humanitarian-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_humanitarian_list_required_documents = document.getElementById('sp-humanitarian-list-required-documents');
  if (sp_humanitarian_list_required_documents) {
    gsap.from('#sp-humanitarian-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_humanitarian_list_application_process = document.getElementById('sp-humanitarian-list-application-process');
  if (sp_humanitarian_list_application_process) {
    gsap.from('#sp-humanitarian-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_humanitarian_section_timelines_deadlines = document.getElementById('sp-humanitarian-section-timelines-deadlines');
  if (sp_humanitarian_section_timelines_deadlines) {
    gsap.fromTo('#sp-humanitarian-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_humanitarian_section_fees_costs = document.getElementById('sp-humanitarian-section-fees-costs');
  if (sp_humanitarian_section_fees_costs) {
    gsap.fromTo('#sp-humanitarian-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_humanitarian_list_risks_common_mistakes = document.getElementById('sp-humanitarian-list-risks-common-mistakes');
  if (sp_humanitarian_list_risks_common_mistakes) {
    gsap.from('#sp-humanitarian-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_humanitarian_section_diy_vs_professional_assistance = document.getElementById('sp-humanitarian-section-diy-vs-professional-assistance');
  if (sp_humanitarian_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sp-humanitarian-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_humanitarian_section_so_paulo_specific_context = document.getElementById('sp-humanitarian-section-so-paulo-specific-context');
  if (sp_humanitarian_section_so_paulo_specific_context) {
    gsap.fromTo('#sp-humanitarian-section-so-paulo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_humanitarian_section_what_our_clients_say = document.getElementById('sp-humanitarian-section-what-our-clients-say');
  if (sp_humanitarian_section_what_our_clients_say) {
    gsap.fromTo('#sp-humanitarian-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_humanitarian_section_frequently_asked_questions = document.getElementById('sp-humanitarian-section-frequently-asked-questions');
  if (sp_humanitarian_section_frequently_asked_questions) {
    gsap.fromTo('#sp-humanitarian-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_humanitarian_section_international_support = document.getElementById('sp-humanitarian-section-international-support');
  if (sp_humanitarian_section_international_support) {
    gsap.fromTo('#sp-humanitarian-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_humanitarian_list_our_credentials = document.getElementById('sp-humanitarian-list-our-credentials');
  if (sp_humanitarian_list_our_credentials) {
    gsap.from('#sp-humanitarian-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_humanitarian_list_related_services = document.getElementById('sp-humanitarian-list-related-services');
  if (sp_humanitarian_list_related_services) {
    gsap.from('#sp-humanitarian-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_humanitarian_section_youre_in_good_hands = document.getElementById('sp-humanitarian-section-youre-in-good-hands');
  if (sp_humanitarian_section_youre_in_good_hands) {
    gsap.fromTo('#sp-humanitarian-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_humanitarian_section_21 = document.getElementById('sp-humanitarian-section-21');
  if (sp_humanitarian_section_21) {
    gsap.fromTo('#sp-humanitarian-section-21', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const digital_nomad.html = document.getElementById('digital-nomad.html');
  if (digital_nomad.html) {
    gsap.fromTo('#digital-nomad.html', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_digitalnomad_form_digital_nomad_residency_in_brazil = document.getElementById('sp-digitalnomad-form-digital-nomad-residency-in-brazil');
  if (sp_digitalnomad_form_digital_nomad_residency_in_brazil) {
    gsap.from('#sp-digitalnomad-form-digital-nomad-residency-in-brazil input, #sp-digitalnomad-form-digital-nomad-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_digitalnomad_list_quick_facts = document.getElementById('sp-digitalnomad-list-quick-facts');
  if (sp_digitalnomad_list_quick_facts) {
    gsap.from('#sp-digitalnomad-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_digitalnomad_list_common_challenges_applicants_face = document.getElementById('sp-digitalnomad-list-common-challenges-applicants-face');
  if (sp_digitalnomad_list_common_challenges_applicants_face) {
    gsap.from('#sp-digitalnomad-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_digitalnomad_list_how_we_solve_these_challenges = document.getElementById('sp-digitalnomad-list-how-we-solve-these-challenges');
  if (sp_digitalnomad_list_how_we_solve_these_challenges) {
    gsap.from('#sp-digitalnomad-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_digitalnomad_section_residency_overview = document.getElementById('sp-digitalnomad-section-residency-overview');
  if (sp_digitalnomad_section_residency_overview) {
    gsap.fromTo('#sp-digitalnomad-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_digitalnomad_form_who_is_this_residency_for = document.getElementById('sp-digitalnomad-form-who-is-this-residency-for');
  if (sp_digitalnomad_form_who_is_this_residency_for) {
    gsap.from('#sp-digitalnomad-form-who-is-this-residency-for input, #sp-digitalnomad-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_digitalnomad_list_required_documents = document.getElementById('sp-digitalnomad-list-required-documents');
  if (sp_digitalnomad_list_required_documents) {
    gsap.from('#sp-digitalnomad-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_digitalnomad_list_application_process = document.getElementById('sp-digitalnomad-list-application-process');
  if (sp_digitalnomad_list_application_process) {
    gsap.from('#sp-digitalnomad-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_digitalnomad_section_timelines_deadlines = document.getElementById('sp-digitalnomad-section-timelines-deadlines');
  if (sp_digitalnomad_section_timelines_deadlines) {
    gsap.fromTo('#sp-digitalnomad-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_digitalnomad_section_fees_costs = document.getElementById('sp-digitalnomad-section-fees-costs');
  if (sp_digitalnomad_section_fees_costs) {
    gsap.fromTo('#sp-digitalnomad-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_digitalnomad_list_risks_common_mistakes = document.getElementById('sp-digitalnomad-list-risks-common-mistakes');
  if (sp_digitalnomad_list_risks_common_mistakes) {
    gsap.from('#sp-digitalnomad-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_digitalnomad_section_diy_vs_professional_assistance = document.getElementById('sp-digitalnomad-section-diy-vs-professional-assistance');
  if (sp_digitalnomad_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sp-digitalnomad-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_digitalnomad_section_so_paulo_specific_context = document.getElementById('sp-digitalnomad-section-so-paulo-specific-context');
  if (sp_digitalnomad_section_so_paulo_specific_context) {
    gsap.fromTo('#sp-digitalnomad-section-so-paulo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_digitalnomad_section_what_our_clients_say = document.getElementById('sp-digitalnomad-section-what-our-clients-say');
  if (sp_digitalnomad_section_what_our_clients_say) {
    gsap.fromTo('#sp-digitalnomad-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_digitalnomad_section_frequently_asked_questions = document.getElementById('sp-digitalnomad-section-frequently-asked-questions');
  if (sp_digitalnomad_section_frequently_asked_questions) {
    gsap.fromTo('#sp-digitalnomad-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_digitalnomad_section_international_support = document.getElementById('sp-digitalnomad-section-international-support');
  if (sp_digitalnomad_section_international_support) {
    gsap.fromTo('#sp-digitalnomad-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_digitalnomad_list_our_credentials = document.getElementById('sp-digitalnomad-list-our-credentials');
  if (sp_digitalnomad_list_our_credentials) {
    gsap.from('#sp-digitalnomad-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_digitalnomad_list_related_services = document.getElementById('sp-digitalnomad-list-related-services');
  if (sp_digitalnomad_list_related_services) {
    gsap.from('#sp-digitalnomad-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_digitalnomad_section_youre_in_good_hands = document.getElementById('sp-digitalnomad-section-youre-in-good-hands');
  if (sp_digitalnomad_section_youre_in_good_hands) {
    gsap.fromTo('#sp-digitalnomad-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_digitalnomad_section_21 = document.getElementById('sp-digitalnomad-section-21');
  if (sp_digitalnomad_section_21) {
    gsap.fromTo('#sp-digitalnomad-section-21', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const family_reunion.html = document.getElementById('family-reunion.html');
  if (family_reunion.html) {
    gsap.fromTo('#family-reunion.html', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_familyreunion_form_reunite_with_family_in_brazil_with_family_reunion_residency = document.getElementById('sp-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency');
  if (sp_familyreunion_form_reunite_with_family_in_brazil_with_family_reunion_residency) {
    gsap.from('#sp-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency input, #sp-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_familyreunion_list_quick_facts = document.getElementById('sp-familyreunion-list-quick-facts');
  if (sp_familyreunion_list_quick_facts) {
    gsap.from('#sp-familyreunion-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_familyreunion_list_common_challenges_applicants_face = document.getElementById('sp-familyreunion-list-common-challenges-applicants-face');
  if (sp_familyreunion_list_common_challenges_applicants_face) {
    gsap.from('#sp-familyreunion-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_familyreunion_list_how_we_solve_these_challenges = document.getElementById('sp-familyreunion-list-how-we-solve-these-challenges');
  if (sp_familyreunion_list_how_we_solve_these_challenges) {
    gsap.from('#sp-familyreunion-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_familyreunion_section_residency_overview = document.getElementById('sp-familyreunion-section-residency-overview');
  if (sp_familyreunion_section_residency_overview) {
    gsap.fromTo('#sp-familyreunion-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_familyreunion_form_who_is_this_residency_for = document.getElementById('sp-familyreunion-form-who-is-this-residency-for');
  if (sp_familyreunion_form_who_is_this_residency_for) {
    gsap.from('#sp-familyreunion-form-who-is-this-residency-for input, #sp-familyreunion-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_familyreunion_list_required_documents = document.getElementById('sp-familyreunion-list-required-documents');
  if (sp_familyreunion_list_required_documents) {
    gsap.from('#sp-familyreunion-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_familyreunion_list_application_process = document.getElementById('sp-familyreunion-list-application-process');
  if (sp_familyreunion_list_application_process) {
    gsap.from('#sp-familyreunion-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_familyreunion_section_timelines_deadlines = document.getElementById('sp-familyreunion-section-timelines-deadlines');
  if (sp_familyreunion_section_timelines_deadlines) {
    gsap.fromTo('#sp-familyreunion-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_familyreunion_section_fees_costs = document.getElementById('sp-familyreunion-section-fees-costs');
  if (sp_familyreunion_section_fees_costs) {
    gsap.fromTo('#sp-familyreunion-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_familyreunion_list_risks_common_mistakes = document.getElementById('sp-familyreunion-list-risks-common-mistakes');
  if (sp_familyreunion_list_risks_common_mistakes) {
    gsap.from('#sp-familyreunion-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_familyreunion_section_diy_vs_professional_assistance = document.getElementById('sp-familyreunion-section-diy-vs-professional-assistance');
  if (sp_familyreunion_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sp-familyreunion-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_familyreunion_section_so_paulo_specific_context = document.getElementById('sp-familyreunion-section-so-paulo-specific-context');
  if (sp_familyreunion_section_so_paulo_specific_context) {
    gsap.fromTo('#sp-familyreunion-section-so-paulo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_familyreunion_section_what_our_clients_say = document.getElementById('sp-familyreunion-section-what-our-clients-say');
  if (sp_familyreunion_section_what_our_clients_say) {
    gsap.fromTo('#sp-familyreunion-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_familyreunion_section_frequently_asked_questions = document.getElementById('sp-familyreunion-section-frequently-asked-questions');
  if (sp_familyreunion_section_frequently_asked_questions) {
    gsap.fromTo('#sp-familyreunion-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_familyreunion_section_international_support = document.getElementById('sp-familyreunion-section-international-support');
  if (sp_familyreunion_section_international_support) {
    gsap.fromTo('#sp-familyreunion-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_familyreunion_list_our_credentials = document.getElementById('sp-familyreunion-list-our-credentials');
  if (sp_familyreunion_list_our_credentials) {
    gsap.from('#sp-familyreunion-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_familyreunion_list_related_services = document.getElementById('sp-familyreunion-list-related-services');
  if (sp_familyreunion_list_related_services) {
    gsap.from('#sp-familyreunion-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_familyreunion_section_youre_in_good_hands = document.getElementById('sp-familyreunion-section-youre-in-good-hands');
  if (sp_familyreunion_section_youre_in_good_hands) {
    gsap.fromTo('#sp-familyreunion-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_familyreunion_section_21 = document.getElementById('sp-familyreunion-section-21');
  if (sp_familyreunion_section_21) {
    gsap.fromTo('#sp-familyreunion-section-21', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_mercosul_form_residency_for_mercosul_citizens_in_brazil = document.getElementById('sp-mercosul-form-residency-for-mercosul-citizens-in-brazil');
  if (sp_mercosul_form_residency_for_mercosul_citizens_in_brazil) {
    gsap.from('#sp-mercosul-form-residency-for-mercosul-citizens-in-brazil input, #sp-mercosul-form-residency-for-mercosul-citizens-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_mercosul_list_quick_facts = document.getElementById('sp-mercosul-list-quick-facts');
  if (sp_mercosul_list_quick_facts) {
    gsap.from('#sp-mercosul-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_mercosul_list_common_challenges_applicants_face = document.getElementById('sp-mercosul-list-common-challenges-applicants-face');
  if (sp_mercosul_list_common_challenges_applicants_face) {
    gsap.from('#sp-mercosul-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_mercosul_list_how_we_solve_these_challenges = document.getElementById('sp-mercosul-list-how-we-solve-these-challenges');
  if (sp_mercosul_list_how_we_solve_these_challenges) {
    gsap.from('#sp-mercosul-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_mercosul_section_residency_overview = document.getElementById('sp-mercosul-section-residency-overview');
  if (sp_mercosul_section_residency_overview) {
    gsap.fromTo('#sp-mercosul-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_mercosul_form_who_is_this_residency_for = document.getElementById('sp-mercosul-form-who-is-this-residency-for');
  if (sp_mercosul_form_who_is_this_residency_for) {
    gsap.from('#sp-mercosul-form-who-is-this-residency-for input, #sp-mercosul-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_mercosul_list_required_documents = document.getElementById('sp-mercosul-list-required-documents');
  if (sp_mercosul_list_required_documents) {
    gsap.from('#sp-mercosul-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_mercosul_list_application_process = document.getElementById('sp-mercosul-list-application-process');
  if (sp_mercosul_list_application_process) {
    gsap.from('#sp-mercosul-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_mercosul_section_timelines_deadlines = document.getElementById('sp-mercosul-section-timelines-deadlines');
  if (sp_mercosul_section_timelines_deadlines) {
    gsap.fromTo('#sp-mercosul-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_mercosul_section_fees_costs = document.getElementById('sp-mercosul-section-fees-costs');
  if (sp_mercosul_section_fees_costs) {
    gsap.fromTo('#sp-mercosul-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_mercosul_list_risks_common_mistakes = document.getElementById('sp-mercosul-list-risks-common-mistakes');
  if (sp_mercosul_list_risks_common_mistakes) {
    gsap.from('#sp-mercosul-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_mercosul_section_diy_vs_professional_assistance = document.getElementById('sp-mercosul-section-diy-vs-professional-assistance');
  if (sp_mercosul_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sp-mercosul-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_mercosul_section_so_paulo_specific_context = document.getElementById('sp-mercosul-section-so-paulo-specific-context');
  if (sp_mercosul_section_so_paulo_specific_context) {
    gsap.fromTo('#sp-mercosul-section-so-paulo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_mercosul_section_what_our_clients_say = document.getElementById('sp-mercosul-section-what-our-clients-say');
  if (sp_mercosul_section_what_our_clients_say) {
    gsap.fromTo('#sp-mercosul-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_mercosul_section_frequently_asked_questions = document.getElementById('sp-mercosul-section-frequently-asked-questions');
  if (sp_mercosul_section_frequently_asked_questions) {
    gsap.fromTo('#sp-mercosul-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_mercosul_section_international_support = document.getElementById('sp-mercosul-section-international-support');
  if (sp_mercosul_section_international_support) {
    gsap.fromTo('#sp-mercosul-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_mercosul_list_our_credentials = document.getElementById('sp-mercosul-list-our-credentials');
  if (sp_mercosul_list_our_credentials) {
    gsap.from('#sp-mercosul-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_mercosul_list_related_services = document.getElementById('sp-mercosul-list-related-services');
  if (sp_mercosul_list_related_services) {
    gsap.from('#sp-mercosul-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_mercosul_section_youre_in_good_hands = document.getElementById('sp-mercosul-section-youre-in-good-hands');
  if (sp_mercosul_section_youre_in_good_hands) {
    gsap.fromTo('#sp-mercosul-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_mercosul_section_21 = document.getElementById('sp-mercosul-section-21');
  if (sp_mercosul_section_21) {
    gsap.fromTo('#sp-mercosul-section-21', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_retiree_form_retire_in_brazil_with_retiree_residency = document.getElementById('sp-retiree-form-retire-in-brazil-with-retiree-residency');
  if (sp_retiree_form_retire_in_brazil_with_retiree_residency) {
    gsap.from('#sp-retiree-form-retire-in-brazil-with-retiree-residency input, #sp-retiree-form-retire-in-brazil-with-retiree-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_retiree_list_quick_facts = document.getElementById('sp-retiree-list-quick-facts');
  if (sp_retiree_list_quick_facts) {
    gsap.from('#sp-retiree-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_retiree_list_common_challenges_applicants_face = document.getElementById('sp-retiree-list-common-challenges-applicants-face');
  if (sp_retiree_list_common_challenges_applicants_face) {
    gsap.from('#sp-retiree-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_retiree_list_how_we_solve_these_challenges = document.getElementById('sp-retiree-list-how-we-solve-these-challenges');
  if (sp_retiree_list_how_we_solve_these_challenges) {
    gsap.from('#sp-retiree-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_retiree_section_residency_overview = document.getElementById('sp-retiree-section-residency-overview');
  if (sp_retiree_section_residency_overview) {
    gsap.fromTo('#sp-retiree-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_retiree_form_who_is_this_residency_for = document.getElementById('sp-retiree-form-who-is-this-residency-for');
  if (sp_retiree_form_who_is_this_residency_for) {
    gsap.from('#sp-retiree-form-who-is-this-residency-for input, #sp-retiree-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_retiree_list_required_documents = document.getElementById('sp-retiree-list-required-documents');
  if (sp_retiree_list_required_documents) {
    gsap.from('#sp-retiree-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_retiree_list_application_process = document.getElementById('sp-retiree-list-application-process');
  if (sp_retiree_list_application_process) {
    gsap.from('#sp-retiree-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_retiree_section_timelines_deadlines = document.getElementById('sp-retiree-section-timelines-deadlines');
  if (sp_retiree_section_timelines_deadlines) {
    gsap.fromTo('#sp-retiree-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_retiree_section_fees_costs = document.getElementById('sp-retiree-section-fees-costs');
  if (sp_retiree_section_fees_costs) {
    gsap.fromTo('#sp-retiree-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_retiree_list_risks_common_mistakes = document.getElementById('sp-retiree-list-risks-common-mistakes');
  if (sp_retiree_list_risks_common_mistakes) {
    gsap.from('#sp-retiree-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_retiree_section_diy_vs_professional_assistance = document.getElementById('sp-retiree-section-diy-vs-professional-assistance');
  if (sp_retiree_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sp-retiree-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_retiree_section_so_paulo_specific_context = document.getElementById('sp-retiree-section-so-paulo-specific-context');
  if (sp_retiree_section_so_paulo_specific_context) {
    gsap.fromTo('#sp-retiree-section-so-paulo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_retiree_section_what_our_clients_say = document.getElementById('sp-retiree-section-what-our-clients-say');
  if (sp_retiree_section_what_our_clients_say) {
    gsap.fromTo('#sp-retiree-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_retiree_section_frequently_asked_questions = document.getElementById('sp-retiree-section-frequently-asked-questions');
  if (sp_retiree_section_frequently_asked_questions) {
    gsap.fromTo('#sp-retiree-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_retiree_section_international_support = document.getElementById('sp-retiree-section-international-support');
  if (sp_retiree_section_international_support) {
    gsap.fromTo('#sp-retiree-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_retiree_list_our_credentials = document.getElementById('sp-retiree-list-our-credentials');
  if (sp_retiree_list_our_credentials) {
    gsap.from('#sp-retiree-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_retiree_list_related_services = document.getElementById('sp-retiree-list-related-services');
  if (sp_retiree_list_related_services) {
    gsap.from('#sp-retiree-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_retiree_section_youre_in_good_hands = document.getElementById('sp-retiree-section-youre-in-good-hands');
  if (sp_retiree_section_youre_in_good_hands) {
    gsap.fromTo('#sp-retiree-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_retiree_section_21 = document.getElementById('sp-retiree-section-21');
  if (sp_retiree_section_21) {
    gsap.fromTo('#sp-retiree-section-21', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_volunteer_form_volunteer_in_brazil_with_volunteer_residency = document.getElementById('sp-volunteer-form-volunteer-in-brazil-with-volunteer-residency');
  if (sp_volunteer_form_volunteer_in_brazil_with_volunteer_residency) {
    gsap.from('#sp-volunteer-form-volunteer-in-brazil-with-volunteer-residency input, #sp-volunteer-form-volunteer-in-brazil-with-volunteer-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_volunteer_list_quick_facts = document.getElementById('sp-volunteer-list-quick-facts');
  if (sp_volunteer_list_quick_facts) {
    gsap.from('#sp-volunteer-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_volunteer_list_common_challenges_applicants_face = document.getElementById('sp-volunteer-list-common-challenges-applicants-face');
  if (sp_volunteer_list_common_challenges_applicants_face) {
    gsap.from('#sp-volunteer-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_volunteer_list_how_we_solve_these_challenges = document.getElementById('sp-volunteer-list-how-we-solve-these-challenges');
  if (sp_volunteer_list_how_we_solve_these_challenges) {
    gsap.from('#sp-volunteer-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_volunteer_section_residency_overview = document.getElementById('sp-volunteer-section-residency-overview');
  if (sp_volunteer_section_residency_overview) {
    gsap.fromTo('#sp-volunteer-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_volunteer_form_who_is_this_residency_for = document.getElementById('sp-volunteer-form-who-is-this-residency-for');
  if (sp_volunteer_form_who_is_this_residency_for) {
    gsap.from('#sp-volunteer-form-who-is-this-residency-for input, #sp-volunteer-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_volunteer_list_required_documents = document.getElementById('sp-volunteer-list-required-documents');
  if (sp_volunteer_list_required_documents) {
    gsap.from('#sp-volunteer-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_volunteer_list_application_process = document.getElementById('sp-volunteer-list-application-process');
  if (sp_volunteer_list_application_process) {
    gsap.from('#sp-volunteer-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_volunteer_section_timelines_deadlines = document.getElementById('sp-volunteer-section-timelines-deadlines');
  if (sp_volunteer_section_timelines_deadlines) {
    gsap.fromTo('#sp-volunteer-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_volunteer_section_fees_costs = document.getElementById('sp-volunteer-section-fees-costs');
  if (sp_volunteer_section_fees_costs) {
    gsap.fromTo('#sp-volunteer-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_volunteer_list_risks_common_mistakes = document.getElementById('sp-volunteer-list-risks-common-mistakes');
  if (sp_volunteer_list_risks_common_mistakes) {
    gsap.from('#sp-volunteer-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_volunteer_section_diy_vs_professional_assistance = document.getElementById('sp-volunteer-section-diy-vs-professional-assistance');
  if (sp_volunteer_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sp-volunteer-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_volunteer_section_so_paulo_specific_context = document.getElementById('sp-volunteer-section-so-paulo-specific-context');
  if (sp_volunteer_section_so_paulo_specific_context) {
    gsap.fromTo('#sp-volunteer-section-so-paulo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_volunteer_section_what_our_clients_say = document.getElementById('sp-volunteer-section-what-our-clients-say');
  if (sp_volunteer_section_what_our_clients_say) {
    gsap.fromTo('#sp-volunteer-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_volunteer_section_frequently_asked_questions = document.getElementById('sp-volunteer-section-frequently-asked-questions');
  if (sp_volunteer_section_frequently_asked_questions) {
    gsap.fromTo('#sp-volunteer-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_volunteer_section_international_support = document.getElementById('sp-volunteer-section-international-support');
  if (sp_volunteer_section_international_support) {
    gsap.fromTo('#sp-volunteer-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_volunteer_list_our_credentials = document.getElementById('sp-volunteer-list-our-credentials');
  if (sp_volunteer_list_our_credentials) {
    gsap.from('#sp-volunteer-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_volunteer_list_related_services = document.getElementById('sp-volunteer-list-related-services');
  if (sp_volunteer_list_related_services) {
    gsap.from('#sp-volunteer-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_volunteer_section_youre_in_good_hands = document.getElementById('sp-volunteer-section-youre-in-good-hands');
  if (sp_volunteer_section_youre_in_good_hands) {
    gsap.fromTo('#sp-volunteer-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_volunteer_section_21 = document.getElementById('sp-volunteer-section-21');
  if (sp_volunteer_section_21) {
    gsap.fromTo('#sp-volunteer-section-21', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const skilled_worker.html = document.getElementById('skilled-worker.html');
  if (skilled_worker.html) {
    gsap.fromTo('#skilled-worker.html', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_skilledworker_form_skilled_worker_residency_in_brazil_for_professionals = document.getElementById('sp-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals');
  if (sp_skilledworker_form_skilled_worker_residency_in_brazil_for_professionals) {
    gsap.from('#sp-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals input, #sp-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_skilledworker_list_quick_facts = document.getElementById('sp-skilledworker-list-quick-facts');
  if (sp_skilledworker_list_quick_facts) {
    gsap.from('#sp-skilledworker-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_skilledworker_list_common_challenges_applicants_face = document.getElementById('sp-skilledworker-list-common-challenges-applicants-face');
  if (sp_skilledworker_list_common_challenges_applicants_face) {
    gsap.from('#sp-skilledworker-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_skilledworker_list_how_we_solve_these_challenges = document.getElementById('sp-skilledworker-list-how-we-solve-these-challenges');
  if (sp_skilledworker_list_how_we_solve_these_challenges) {
    gsap.from('#sp-skilledworker-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_skilledworker_section_residency_overview = document.getElementById('sp-skilledworker-section-residency-overview');
  if (sp_skilledworker_section_residency_overview) {
    gsap.fromTo('#sp-skilledworker-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_skilledworker_form_who_is_this_residency_for = document.getElementById('sp-skilledworker-form-who-is-this-residency-for');
  if (sp_skilledworker_form_who_is_this_residency_for) {
    gsap.from('#sp-skilledworker-form-who-is-this-residency-for input, #sp-skilledworker-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_skilledworker_list_required_documents = document.getElementById('sp-skilledworker-list-required-documents');
  if (sp_skilledworker_list_required_documents) {
    gsap.from('#sp-skilledworker-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_skilledworker_list_application_process = document.getElementById('sp-skilledworker-list-application-process');
  if (sp_skilledworker_list_application_process) {
    gsap.from('#sp-skilledworker-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_skilledworker_section_timelines_deadlines = document.getElementById('sp-skilledworker-section-timelines-deadlines');
  if (sp_skilledworker_section_timelines_deadlines) {
    gsap.fromTo('#sp-skilledworker-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_skilledworker_section_fees_costs = document.getElementById('sp-skilledworker-section-fees-costs');
  if (sp_skilledworker_section_fees_costs) {
    gsap.fromTo('#sp-skilledworker-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_skilledworker_list_risks_common_mistakes = document.getElementById('sp-skilledworker-list-risks-common-mistakes');
  if (sp_skilledworker_list_risks_common_mistakes) {
    gsap.from('#sp-skilledworker-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_skilledworker_section_diy_vs_professional_assistance = document.getElementById('sp-skilledworker-section-diy-vs-professional-assistance');
  if (sp_skilledworker_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sp-skilledworker-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_skilledworker_section_so_paulo_specific_context = document.getElementById('sp-skilledworker-section-so-paulo-specific-context');
  if (sp_skilledworker_section_so_paulo_specific_context) {
    gsap.fromTo('#sp-skilledworker-section-so-paulo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_skilledworker_section_what_our_clients_say = document.getElementById('sp-skilledworker-section-what-our-clients-say');
  if (sp_skilledworker_section_what_our_clients_say) {
    gsap.fromTo('#sp-skilledworker-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_skilledworker_section_frequently_asked_questions = document.getElementById('sp-skilledworker-section-frequently-asked-questions');
  if (sp_skilledworker_section_frequently_asked_questions) {
    gsap.fromTo('#sp-skilledworker-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_skilledworker_section_international_support = document.getElementById('sp-skilledworker-section-international-support');
  if (sp_skilledworker_section_international_support) {
    gsap.fromTo('#sp-skilledworker-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_skilledworker_list_our_credentials = document.getElementById('sp-skilledworker-list-our-credentials');
  if (sp_skilledworker_list_our_credentials) {
    gsap.from('#sp-skilledworker-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_skilledworker_list_related_services = document.getElementById('sp-skilledworker-list-related-services');
  if (sp_skilledworker_list_related_services) {
    gsap.from('#sp-skilledworker-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_skilledworker_section_youre_in_good_hands = document.getElementById('sp-skilledworker-section-youre-in-good-hands');
  if (sp_skilledworker_section_youre_in_good_hands) {
    gsap.fromTo('#sp-skilledworker-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_skilledworker_section_21 = document.getElementById('sp-skilledworker-section-21');
  if (sp_skilledworker_section_21) {
    gsap.fromTo('#sp-skilledworker-section-21', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_religious_form_religious_residency_in_brazil_for_missions = document.getElementById('sp-religious-form-religious-residency-in-brazil-for-missions');
  if (sp_religious_form_religious_residency_in_brazil_for_missions) {
    gsap.from('#sp-religious-form-religious-residency-in-brazil-for-missions input, #sp-religious-form-religious-residency-in-brazil-for-missions textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_religious_list_quick_facts = document.getElementById('sp-religious-list-quick-facts');
  if (sp_religious_list_quick_facts) {
    gsap.from('#sp-religious-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_religious_list_common_challenges_applicants_face = document.getElementById('sp-religious-list-common-challenges-applicants-face');
  if (sp_religious_list_common_challenges_applicants_face) {
    gsap.from('#sp-religious-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_religious_list_how_we_solve_these_challenges = document.getElementById('sp-religious-list-how-we-solve-these-challenges');
  if (sp_religious_list_how_we_solve_these_challenges) {
    gsap.from('#sp-religious-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_religious_section_residency_overview = document.getElementById('sp-religious-section-residency-overview');
  if (sp_religious_section_residency_overview) {
    gsap.fromTo('#sp-religious-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_religious_form_who_is_this_residency_for = document.getElementById('sp-religious-form-who-is-this-residency-for');
  if (sp_religious_form_who_is_this_residency_for) {
    gsap.from('#sp-religious-form-who-is-this-residency-for input, #sp-religious-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_religious_list_required_documents = document.getElementById('sp-religious-list-required-documents');
  if (sp_religious_list_required_documents) {
    gsap.from('#sp-religious-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_religious_list_application_process = document.getElementById('sp-religious-list-application-process');
  if (sp_religious_list_application_process) {
    gsap.from('#sp-religious-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_religious_section_timelines_deadlines = document.getElementById('sp-religious-section-timelines-deadlines');
  if (sp_religious_section_timelines_deadlines) {
    gsap.fromTo('#sp-religious-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_religious_section_fees_costs = document.getElementById('sp-religious-section-fees-costs');
  if (sp_religious_section_fees_costs) {
    gsap.fromTo('#sp-religious-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_religious_list_risks_common_mistakes = document.getElementById('sp-religious-list-risks-common-mistakes');
  if (sp_religious_list_risks_common_mistakes) {
    gsap.from('#sp-religious-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_religious_section_diy_vs_professional_assistance = document.getElementById('sp-religious-section-diy-vs-professional-assistance');
  if (sp_religious_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sp-religious-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_religious_section_so_paulo_specific_context = document.getElementById('sp-religious-section-so-paulo-specific-context');
  if (sp_religious_section_so_paulo_specific_context) {
    gsap.fromTo('#sp-religious-section-so-paulo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_religious_section_what_our_clients_say = document.getElementById('sp-religious-section-what-our-clients-say');
  if (sp_religious_section_what_our_clients_say) {
    gsap.fromTo('#sp-religious-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_religious_section_frequently_asked_questions = document.getElementById('sp-religious-section-frequently-asked-questions');
  if (sp_religious_section_frequently_asked_questions) {
    gsap.fromTo('#sp-religious-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_religious_section_international_support = document.getElementById('sp-religious-section-international-support');
  if (sp_religious_section_international_support) {
    gsap.fromTo('#sp-religious-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_religious_list_our_credentials = document.getElementById('sp-religious-list-our-credentials');
  if (sp_religious_list_our_credentials) {
    gsap.from('#sp-religious-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_religious_list_related_services = document.getElementById('sp-religious-list-related-services');
  if (sp_religious_list_related_services) {
    gsap.from('#sp-religious-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_religious_section_youre_in_good_hands = document.getElementById('sp-religious-section-youre-in-good-hands');
  if (sp_religious_section_youre_in_good_hands) {
    gsap.fromTo('#sp-religious-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_religious_section_21 = document.getElementById('sp-religious-section-21');
  if (sp_religious_section_21) {
    gsap.fromTo('#sp-religious-section-21', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_investor_form_gain_residency_in_brazil_through_investment = document.getElementById('sp-investor-form-gain-residency-in-brazil-through-investment');
  if (sp_investor_form_gain_residency_in_brazil_through_investment) {
    gsap.from('#sp-investor-form-gain-residency-in-brazil-through-investment input, #sp-investor-form-gain-residency-in-brazil-through-investment textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_investor_list_quick_facts = document.getElementById('sp-investor-list-quick-facts');
  if (sp_investor_list_quick_facts) {
    gsap.from('#sp-investor-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_investor_list_common_challenges_applicants_face = document.getElementById('sp-investor-list-common-challenges-applicants-face');
  if (sp_investor_list_common_challenges_applicants_face) {
    gsap.from('#sp-investor-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_investor_list_how_we_solve_these_challenges = document.getElementById('sp-investor-list-how-we-solve-these-challenges');
  if (sp_investor_list_how_we_solve_these_challenges) {
    gsap.from('#sp-investor-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_investor_section_residency_overview = document.getElementById('sp-investor-section-residency-overview');
  if (sp_investor_section_residency_overview) {
    gsap.fromTo('#sp-investor-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_investor_form_who_is_this_residency_for = document.getElementById('sp-investor-form-who-is-this-residency-for');
  if (sp_investor_form_who_is_this_residency_for) {
    gsap.from('#sp-investor-form-who-is-this-residency-for input, #sp-investor-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_investor_list_required_documents = document.getElementById('sp-investor-list-required-documents');
  if (sp_investor_list_required_documents) {
    gsap.from('#sp-investor-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_investor_list_application_process = document.getElementById('sp-investor-list-application-process');
  if (sp_investor_list_application_process) {
    gsap.from('#sp-investor-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_investor_section_timelines_deadlines = document.getElementById('sp-investor-section-timelines-deadlines');
  if (sp_investor_section_timelines_deadlines) {
    gsap.fromTo('#sp-investor-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_investor_section_fees_costs = document.getElementById('sp-investor-section-fees-costs');
  if (sp_investor_section_fees_costs) {
    gsap.fromTo('#sp-investor-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_investor_list_risks_common_mistakes = document.getElementById('sp-investor-list-risks-common-mistakes');
  if (sp_investor_list_risks_common_mistakes) {
    gsap.from('#sp-investor-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_investor_section_diy_vs_professional_assistance = document.getElementById('sp-investor-section-diy-vs-professional-assistance');
  if (sp_investor_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sp-investor-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_investor_section_so_paulo_specific_context = document.getElementById('sp-investor-section-so-paulo-specific-context');
  if (sp_investor_section_so_paulo_specific_context) {
    gsap.fromTo('#sp-investor-section-so-paulo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_investor_section_what_our_clients_say = document.getElementById('sp-investor-section-what-our-clients-say');
  if (sp_investor_section_what_our_clients_say) {
    gsap.fromTo('#sp-investor-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_investor_section_frequently_asked_questions = document.getElementById('sp-investor-section-frequently-asked-questions');
  if (sp_investor_section_frequently_asked_questions) {
    gsap.fromTo('#sp-investor-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_investor_section_international_support = document.getElementById('sp-investor-section-international-support');
  if (sp_investor_section_international_support) {
    gsap.fromTo('#sp-investor-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_investor_list_our_credentials = document.getElementById('sp-investor-list-our-credentials');
  if (sp_investor_list_our_credentials) {
    gsap.from('#sp-investor-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_investor_list_related_services = document.getElementById('sp-investor-list-related-services');
  if (sp_investor_list_related_services) {
    gsap.from('#sp-investor-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_investor_section_youre_in_good_hands = document.getElementById('sp-investor-section-youre-in-good-hands');
  if (sp_investor_section_youre_in_good_hands) {
    gsap.fromTo('#sp-investor-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_investor_section_21 = document.getElementById('sp-investor-section-21');
  if (sp_investor_section_21) {
    gsap.fromTo('#sp-investor-section-21', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const health_treatment.html = document.getElementById('health-treatment.html');
  if (health_treatment.html) {
    gsap.fromTo('#health-treatment.html', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_healthtreatment_form_extend_your_stay_for_health_treatment_in_brazil = document.getElementById('sp-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil');
  if (sp_healthtreatment_form_extend_your_stay_for_health_treatment_in_brazil) {
    gsap.from('#sp-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil input, #sp-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_healthtreatment_list_quick_facts = document.getElementById('sp-healthtreatment-list-quick-facts');
  if (sp_healthtreatment_list_quick_facts) {
    gsap.from('#sp-healthtreatment-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_healthtreatment_list_common_challenges_applicants_face = document.getElementById('sp-healthtreatment-list-common-challenges-applicants-face');
  if (sp_healthtreatment_list_common_challenges_applicants_face) {
    gsap.from('#sp-healthtreatment-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_healthtreatment_list_how_we_solve_these_challenges = document.getElementById('sp-healthtreatment-list-how-we-solve-these-challenges');
  if (sp_healthtreatment_list_how_we_solve_these_challenges) {
    gsap.from('#sp-healthtreatment-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_healthtreatment_section_residency_overview = document.getElementById('sp-healthtreatment-section-residency-overview');
  if (sp_healthtreatment_section_residency_overview) {
    gsap.fromTo('#sp-healthtreatment-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_healthtreatment_form_who_is_this_residency_for = document.getElementById('sp-healthtreatment-form-who-is-this-residency-for');
  if (sp_healthtreatment_form_who_is_this_residency_for) {
    gsap.from('#sp-healthtreatment-form-who-is-this-residency-for input, #sp-healthtreatment-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_healthtreatment_list_required_documents = document.getElementById('sp-healthtreatment-list-required-documents');
  if (sp_healthtreatment_list_required_documents) {
    gsap.from('#sp-healthtreatment-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_healthtreatment_list_application_process = document.getElementById('sp-healthtreatment-list-application-process');
  if (sp_healthtreatment_list_application_process) {
    gsap.from('#sp-healthtreatment-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_healthtreatment_section_timelines_deadlines = document.getElementById('sp-healthtreatment-section-timelines-deadlines');
  if (sp_healthtreatment_section_timelines_deadlines) {
    gsap.fromTo('#sp-healthtreatment-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_healthtreatment_section_fees_costs = document.getElementById('sp-healthtreatment-section-fees-costs');
  if (sp_healthtreatment_section_fees_costs) {
    gsap.fromTo('#sp-healthtreatment-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_healthtreatment_list_risks_common_mistakes = document.getElementById('sp-healthtreatment-list-risks-common-mistakes');
  if (sp_healthtreatment_list_risks_common_mistakes) {
    gsap.from('#sp-healthtreatment-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_healthtreatment_section_diy_vs_professional_assistance = document.getElementById('sp-healthtreatment-section-diy-vs-professional-assistance');
  if (sp_healthtreatment_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sp-healthtreatment-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_healthtreatment_section_so_paulo_specific_context = document.getElementById('sp-healthtreatment-section-so-paulo-specific-context');
  if (sp_healthtreatment_section_so_paulo_specific_context) {
    gsap.fromTo('#sp-healthtreatment-section-so-paulo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_healthtreatment_section_what_our_clients_say = document.getElementById('sp-healthtreatment-section-what-our-clients-say');
  if (sp_healthtreatment_section_what_our_clients_say) {
    gsap.fromTo('#sp-healthtreatment-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_healthtreatment_section_frequently_asked_questions = document.getElementById('sp-healthtreatment-section-frequently-asked-questions');
  if (sp_healthtreatment_section_frequently_asked_questions) {
    gsap.fromTo('#sp-healthtreatment-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_healthtreatment_section_international_support = document.getElementById('sp-healthtreatment-section-international-support');
  if (sp_healthtreatment_section_international_support) {
    gsap.fromTo('#sp-healthtreatment-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_healthtreatment_list_our_credentials = document.getElementById('sp-healthtreatment-list-our-credentials');
  if (sp_healthtreatment_list_our_credentials) {
    gsap.from('#sp-healthtreatment-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_healthtreatment_list_related_services = document.getElementById('sp-healthtreatment-list-related-services');
  if (sp_healthtreatment_list_related_services) {
    gsap.from('#sp-healthtreatment-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_healthtreatment_section_youre_in_good_hands = document.getElementById('sp-healthtreatment-section-youre-in-good-hands');
  if (sp_healthtreatment_section_youre_in_good_hands) {
    gsap.fromTo('#sp-healthtreatment-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_healthtreatment_section_21 = document.getElementById('sp-healthtreatment-section-21');
  if (sp_healthtreatment_section_21) {
    gsap.fromTo('#sp-healthtreatment-section-21', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_cplp_form_residency_for_cplp_citizens_in_brazil = document.getElementById('sp-cplp-form-residency-for-cplp-citizens-in-brazil');
  if (sp_cplp_form_residency_for_cplp_citizens_in_brazil) {
    gsap.from('#sp-cplp-form-residency-for-cplp-citizens-in-brazil input, #sp-cplp-form-residency-for-cplp-citizens-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_cplp_list_quick_facts = document.getElementById('sp-cplp-list-quick-facts');
  if (sp_cplp_list_quick_facts) {
    gsap.from('#sp-cplp-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_cplp_list_common_challenges_applicants_face = document.getElementById('sp-cplp-list-common-challenges-applicants-face');
  if (sp_cplp_list_common_challenges_applicants_face) {
    gsap.from('#sp-cplp-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_cplp_list_how_we_solve_these_challenges = document.getElementById('sp-cplp-list-how-we-solve-these-challenges');
  if (sp_cplp_list_how_we_solve_these_challenges) {
    gsap.from('#sp-cplp-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_cplp_section_residency_overview = document.getElementById('sp-cplp-section-residency-overview');
  if (sp_cplp_section_residency_overview) {
    gsap.fromTo('#sp-cplp-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_cplp_form_who_is_this_residency_for = document.getElementById('sp-cplp-form-who-is-this-residency-for');
  if (sp_cplp_form_who_is_this_residency_for) {
    gsap.from('#sp-cplp-form-who-is-this-residency-for input, #sp-cplp-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_cplp_list_required_documents = document.getElementById('sp-cplp-list-required-documents');
  if (sp_cplp_list_required_documents) {
    gsap.from('#sp-cplp-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_cplp_list_application_process = document.getElementById('sp-cplp-list-application-process');
  if (sp_cplp_list_application_process) {
    gsap.from('#sp-cplp-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_cplp_section_timelines_deadlines = document.getElementById('sp-cplp-section-timelines-deadlines');
  if (sp_cplp_section_timelines_deadlines) {
    gsap.fromTo('#sp-cplp-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_cplp_section_fees_costs = document.getElementById('sp-cplp-section-fees-costs');
  if (sp_cplp_section_fees_costs) {
    gsap.fromTo('#sp-cplp-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_cplp_list_risks_common_mistakes = document.getElementById('sp-cplp-list-risks-common-mistakes');
  if (sp_cplp_list_risks_common_mistakes) {
    gsap.from('#sp-cplp-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_cplp_section_diy_vs_professional_assistance = document.getElementById('sp-cplp-section-diy-vs-professional-assistance');
  if (sp_cplp_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sp-cplp-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_cplp_section_so_paulo_specific_context = document.getElementById('sp-cplp-section-so-paulo-specific-context');
  if (sp_cplp_section_so_paulo_specific_context) {
    gsap.fromTo('#sp-cplp-section-so-paulo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_cplp_section_what_our_clients_say = document.getElementById('sp-cplp-section-what-our-clients-say');
  if (sp_cplp_section_what_our_clients_say) {
    gsap.fromTo('#sp-cplp-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_cplp_section_frequently_asked_questions = document.getElementById('sp-cplp-section-frequently-asked-questions');
  if (sp_cplp_section_frequently_asked_questions) {
    gsap.fromTo('#sp-cplp-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_cplp_section_international_support = document.getElementById('sp-cplp-section-international-support');
  if (sp_cplp_section_international_support) {
    gsap.fromTo('#sp-cplp-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_cplp_list_our_credentials = document.getElementById('sp-cplp-list-our-credentials');
  if (sp_cplp_list_our_credentials) {
    gsap.from('#sp-cplp-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_cplp_list_related_services = document.getElementById('sp-cplp-list-related-services');
  if (sp_cplp_list_related_services) {
    gsap.from('#sp-cplp-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_cplp_section_youre_in_good_hands = document.getElementById('sp-cplp-section-youre-in-good-hands');
  if (sp_cplp_section_youre_in_good_hands) {
    gsap.fromTo('#sp-cplp-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_cplp_section_21 = document.getElementById('sp-cplp-section-21');
  if (sp_cplp_section_21) {
    gsap.fromTo('#sp-cplp-section-21', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const youth_exchange.html = document.getElementById('youth-exchange.html');
  if (youth_exchange.html) {
    gsap.fromTo('#youth-exchange.html', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_youthexchange_form_youth_exchange_residency_in_brazil_for_programs = document.getElementById('sp-youthexchange-form-youth-exchange-residency-in-brazil-for-programs');
  if (sp_youthexchange_form_youth_exchange_residency_in_brazil_for_programs) {
    gsap.from('#sp-youthexchange-form-youth-exchange-residency-in-brazil-for-programs input, #sp-youthexchange-form-youth-exchange-residency-in-brazil-for-programs textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_youthexchange_list_quick_facts = document.getElementById('sp-youthexchange-list-quick-facts');
  if (sp_youthexchange_list_quick_facts) {
    gsap.from('#sp-youthexchange-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_youthexchange_list_common_challenges_applicants_face = document.getElementById('sp-youthexchange-list-common-challenges-applicants-face');
  if (sp_youthexchange_list_common_challenges_applicants_face) {
    gsap.from('#sp-youthexchange-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_youthexchange_list_how_we_solve_these_challenges = document.getElementById('sp-youthexchange-list-how-we-solve-these-challenges');
  if (sp_youthexchange_list_how_we_solve_these_challenges) {
    gsap.from('#sp-youthexchange-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_youthexchange_section_residency_overview = document.getElementById('sp-youthexchange-section-residency-overview');
  if (sp_youthexchange_section_residency_overview) {
    gsap.fromTo('#sp-youthexchange-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_youthexchange_form_who_is_this_residency_for = document.getElementById('sp-youthexchange-form-who-is-this-residency-for');
  if (sp_youthexchange_form_who_is_this_residency_for) {
    gsap.from('#sp-youthexchange-form-who-is-this-residency-for input, #sp-youthexchange-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_youthexchange_list_required_documents = document.getElementById('sp-youthexchange-list-required-documents');
  if (sp_youthexchange_list_required_documents) {
    gsap.from('#sp-youthexchange-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_youthexchange_list_application_process = document.getElementById('sp-youthexchange-list-application-process');
  if (sp_youthexchange_list_application_process) {
    gsap.from('#sp-youthexchange-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_youthexchange_section_timelines_deadlines = document.getElementById('sp-youthexchange-section-timelines-deadlines');
  if (sp_youthexchange_section_timelines_deadlines) {
    gsap.fromTo('#sp-youthexchange-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_youthexchange_section_fees_costs = document.getElementById('sp-youthexchange-section-fees-costs');
  if (sp_youthexchange_section_fees_costs) {
    gsap.fromTo('#sp-youthexchange-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_youthexchange_list_risks_common_mistakes = document.getElementById('sp-youthexchange-list-risks-common-mistakes');
  if (sp_youthexchange_list_risks_common_mistakes) {
    gsap.from('#sp-youthexchange-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_youthexchange_section_diy_vs_professional_assistance = document.getElementById('sp-youthexchange-section-diy-vs-professional-assistance');
  if (sp_youthexchange_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sp-youthexchange-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_youthexchange_section_so_paulo_specific_context = document.getElementById('sp-youthexchange-section-so-paulo-specific-context');
  if (sp_youthexchange_section_so_paulo_specific_context) {
    gsap.fromTo('#sp-youthexchange-section-so-paulo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_youthexchange_section_what_our_clients_say = document.getElementById('sp-youthexchange-section-what-our-clients-say');
  if (sp_youthexchange_section_what_our_clients_say) {
    gsap.fromTo('#sp-youthexchange-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_youthexchange_section_frequently_asked_questions = document.getElementById('sp-youthexchange-section-frequently-asked-questions');
  if (sp_youthexchange_section_frequently_asked_questions) {
    gsap.fromTo('#sp-youthexchange-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_youthexchange_section_international_support = document.getElementById('sp-youthexchange-section-international-support');
  if (sp_youthexchange_section_international_support) {
    gsap.fromTo('#sp-youthexchange-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_youthexchange_list_our_credentials = document.getElementById('sp-youthexchange-list-our-credentials');
  if (sp_youthexchange_list_our_credentials) {
    gsap.from('#sp-youthexchange-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_youthexchange_list_related_services = document.getElementById('sp-youthexchange-list-related-services');
  if (sp_youthexchange_list_related_services) {
    gsap.from('#sp-youthexchange-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_youthexchange_section_youre_in_good_hands = document.getElementById('sp-youthexchange-section-youre-in-good-hands');
  if (sp_youthexchange_section_youre_in_good_hands) {
    gsap.fromTo('#sp-youthexchange-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_youthexchange_section_21 = document.getElementById('sp-youthexchange-section-21');
  if (sp_youthexchange_section_21) {
    gsap.fromTo('#sp-youthexchange-section-21', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_work_form_work_and_reside_in_brazil_with_work_residency = document.getElementById('sp-work-form-work-and-reside-in-brazil-with-work-residency');
  if (sp_work_form_work_and_reside_in_brazil_with_work_residency) {
    gsap.from('#sp-work-form-work-and-reside-in-brazil-with-work-residency input, #sp-work-form-work-and-reside-in-brazil-with-work-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_work_list_quick_facts = document.getElementById('sp-work-list-quick-facts');
  if (sp_work_list_quick_facts) {
    gsap.from('#sp-work-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_work_list_common_challenges_applicants_face = document.getElementById('sp-work-list-common-challenges-applicants-face');
  if (sp_work_list_common_challenges_applicants_face) {
    gsap.from('#sp-work-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_work_list_how_we_solve_these_challenges = document.getElementById('sp-work-list-how-we-solve-these-challenges');
  if (sp_work_list_how_we_solve_these_challenges) {
    gsap.from('#sp-work-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_work_section_residency_overview = document.getElementById('sp-work-section-residency-overview');
  if (sp_work_section_residency_overview) {
    gsap.fromTo('#sp-work-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_work_form_who_is_this_residency_for = document.getElementById('sp-work-form-who-is-this-residency-for');
  if (sp_work_form_who_is_this_residency_for) {
    gsap.from('#sp-work-form-who-is-this-residency-for input, #sp-work-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_work_list_required_documents = document.getElementById('sp-work-list-required-documents');
  if (sp_work_list_required_documents) {
    gsap.from('#sp-work-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_work_list_application_process = document.getElementById('sp-work-list-application-process');
  if (sp_work_list_application_process) {
    gsap.from('#sp-work-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_work_section_timelines_deadlines = document.getElementById('sp-work-section-timelines-deadlines');
  if (sp_work_section_timelines_deadlines) {
    gsap.fromTo('#sp-work-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_work_section_fees_costs = document.getElementById('sp-work-section-fees-costs');
  if (sp_work_section_fees_costs) {
    gsap.fromTo('#sp-work-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_work_list_risks_common_mistakes = document.getElementById('sp-work-list-risks-common-mistakes');
  if (sp_work_list_risks_common_mistakes) {
    gsap.from('#sp-work-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_work_section_diy_vs_professional_assistance = document.getElementById('sp-work-section-diy-vs-professional-assistance');
  if (sp_work_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sp-work-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_work_section_so_paulo_specific_context = document.getElementById('sp-work-section-so-paulo-specific-context');
  if (sp_work_section_so_paulo_specific_context) {
    gsap.fromTo('#sp-work-section-so-paulo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_work_section_what_our_clients_say = document.getElementById('sp-work-section-what-our-clients-say');
  if (sp_work_section_what_our_clients_say) {
    gsap.fromTo('#sp-work-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_work_section_frequently_asked_questions = document.getElementById('sp-work-section-frequently-asked-questions');
  if (sp_work_section_frequently_asked_questions) {
    gsap.fromTo('#sp-work-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_work_section_international_support = document.getElementById('sp-work-section-international-support');
  if (sp_work_section_international_support) {
    gsap.fromTo('#sp-work-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_work_list_our_credentials = document.getElementById('sp-work-list-our-credentials');
  if (sp_work_list_our_credentials) {
    gsap.from('#sp-work-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_work_list_related_services = document.getElementById('sp-work-list-related-services');
  if (sp_work_list_related_services) {
    gsap.from('#sp-work-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_work_section_youre_in_good_hands = document.getElementById('sp-work-section-youre-in-good-hands');
  if (sp_work_section_youre_in_good_hands) {
    gsap.fromTo('#sp-work-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_work_section_21 = document.getElementById('sp-work-section-21');
  if (sp_work_section_21) {
    gsap.fromTo('#sp-work-section-21', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_startup_form_launch_your_startup_in_brazil_with_the_startup_visa = document.getElementById('sp-startup-form-launch-your-startup-in-brazil-with-the-startup-visa');
  if (sp_startup_form_launch_your_startup_in_brazil_with_the_startup_visa) {
    gsap.from('#sp-startup-form-launch-your-startup-in-brazil-with-the-startup-visa input, #sp-startup-form-launch-your-startup-in-brazil-with-the-startup-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_startup_list_quick_facts = document.getElementById('sp-startup-list-quick-facts');
  if (sp_startup_list_quick_facts) {
    gsap.from('#sp-startup-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_startup_list_common_challenges_applicants_face = document.getElementById('sp-startup-list-common-challenges-applicants-face');
  if (sp_startup_list_common_challenges_applicants_face) {
    gsap.from('#sp-startup-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_startup_list_how_we_solve_these_challenges = document.getElementById('sp-startup-list-how-we-solve-these-challenges');
  if (sp_startup_list_how_we_solve_these_challenges) {
    gsap.from('#sp-startup-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_startup_section_visa_overview = document.getElementById('sp-startup-section-visa-overview');
  if (sp_startup_section_visa_overview) {
    gsap.fromTo('#sp-startup-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_startup_form_who_is_this_visa_for = document.getElementById('sp-startup-form-who-is-this-visa-for');
  if (sp_startup_form_who_is_this_visa_for) {
    gsap.from('#sp-startup-form-who-is-this-visa-for input, #sp-startup-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_startup_list_required_documents = document.getElementById('sp-startup-list-required-documents');
  if (sp_startup_list_required_documents) {
    gsap.from('#sp-startup-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_startup_list_application_process = document.getElementById('sp-startup-list-application-process');
  if (sp_startup_list_application_process) {
    gsap.from('#sp-startup-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_startup_section_timelines_deadlines = document.getElementById('sp-startup-section-timelines-deadlines');
  if (sp_startup_section_timelines_deadlines) {
    gsap.fromTo('#sp-startup-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_startup_section_fees_costs = document.getElementById('sp-startup-section-fees-costs');
  if (sp_startup_section_fees_costs) {
    gsap.fromTo('#sp-startup-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_startup_list_risks_common_mistakes = document.getElementById('sp-startup-list-risks-common-mistakes');
  if (sp_startup_list_risks_common_mistakes) {
    gsap.from('#sp-startup-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_startup_section_diy_vs_professional_assistance = document.getElementById('sp-startup-section-diy-vs-professional-assistance');
  if (sp_startup_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sp-startup-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_startup_section_so_paulo_specific_context = document.getElementById('sp-startup-section-so-paulo-specific-context');
  if (sp_startup_section_so_paulo_specific_context) {
    gsap.fromTo('#sp-startup-section-so-paulo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_startup_section_what_our_clients_say = document.getElementById('sp-startup-section-what-our-clients-say');
  if (sp_startup_section_what_our_clients_say) {
    gsap.fromTo('#sp-startup-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_startup_section_frequently_asked_questions = document.getElementById('sp-startup-section-frequently-asked-questions');
  if (sp_startup_section_frequently_asked_questions) {
    gsap.fromTo('#sp-startup-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_startup_section_international_support = document.getElementById('sp-startup-section-international-support');
  if (sp_startup_section_international_support) {
    gsap.fromTo('#sp-startup-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_startup_list_our_credentials = document.getElementById('sp-startup-list-our-credentials');
  if (sp_startup_list_our_credentials) {
    gsap.from('#sp-startup-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_startup_list_related_services = document.getElementById('sp-startup-list-related-services');
  if (sp_startup_list_related_services) {
    gsap.from('#sp-startup-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_startup_section_youre_in_good_hands = document.getElementById('sp-startup-section-youre-in-good-hands');
  if (sp_startup_section_youre_in_good_hands) {
    gsap.fromTo('#sp-startup-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_startup_section_21 = document.getElementById('sp-startup-section-21');
  if (sp_startup_section_21) {
    gsap.fromTo('#sp-startup-section-21', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_family_form_reunite_with_family_in_brazil_with_the_family_visa = document.getElementById('sp-family-form-reunite-with-family-in-brazil-with-the-family-visa');
  if (sp_family_form_reunite_with_family_in_brazil_with_the_family_visa) {
    gsap.from('#sp-family-form-reunite-with-family-in-brazil-with-the-family-visa input, #sp-family-form-reunite-with-family-in-brazil-with-the-family-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_family_list_quick_facts = document.getElementById('sp-family-list-quick-facts');
  if (sp_family_list_quick_facts) {
    gsap.from('#sp-family-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_family_list_common_challenges_applicants_face = document.getElementById('sp-family-list-common-challenges-applicants-face');
  if (sp_family_list_common_challenges_applicants_face) {
    gsap.from('#sp-family-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_family_list_how_we_solve_these_challenges = document.getElementById('sp-family-list-how-we-solve-these-challenges');
  if (sp_family_list_how_we_solve_these_challenges) {
    gsap.from('#sp-family-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_family_section_visa_overview = document.getElementById('sp-family-section-visa-overview');
  if (sp_family_section_visa_overview) {
    gsap.fromTo('#sp-family-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_family_form_who_is_this_visa_for = document.getElementById('sp-family-form-who-is-this-visa-for');
  if (sp_family_form_who_is_this_visa_for) {
    gsap.from('#sp-family-form-who-is-this-visa-for input, #sp-family-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_family_list_required_documents = document.getElementById('sp-family-list-required-documents');
  if (sp_family_list_required_documents) {
    gsap.from('#sp-family-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_family_list_application_process = document.getElementById('sp-family-list-application-process');
  if (sp_family_list_application_process) {
    gsap.from('#sp-family-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_family_section_timelines_deadlines = document.getElementById('sp-family-section-timelines-deadlines');
  if (sp_family_section_timelines_deadlines) {
    gsap.fromTo('#sp-family-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_family_section_fees_costs = document.getElementById('sp-family-section-fees-costs');
  if (sp_family_section_fees_costs) {
    gsap.fromTo('#sp-family-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_family_list_risks_common_mistakes = document.getElementById('sp-family-list-risks-common-mistakes');
  if (sp_family_list_risks_common_mistakes) {
    gsap.from('#sp-family-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_family_section_diy_vs_professional_assistance = document.getElementById('sp-family-section-diy-vs-professional-assistance');
  if (sp_family_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sp-family-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_family_section_so_paulo_specific_context = document.getElementById('sp-family-section-so-paulo-specific-context');
  if (sp_family_section_so_paulo_specific_context) {
    gsap.fromTo('#sp-family-section-so-paulo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_family_section_what_our_clients_say = document.getElementById('sp-family-section-what-our-clients-say');
  if (sp_family_section_what_our_clients_say) {
    gsap.fromTo('#sp-family-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_family_section_frequently_asked_questions = document.getElementById('sp-family-section-frequently-asked-questions');
  if (sp_family_section_frequently_asked_questions) {
    gsap.fromTo('#sp-family-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_family_section_international_support = document.getElementById('sp-family-section-international-support');
  if (sp_family_section_international_support) {
    gsap.fromTo('#sp-family-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_family_list_our_credentials = document.getElementById('sp-family-list-our-credentials');
  if (sp_family_list_our_credentials) {
    gsap.from('#sp-family-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_family_list_related_services = document.getElementById('sp-family-list-related-services');
  if (sp_family_list_related_services) {
    gsap.from('#sp-family-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_family_section_youre_in_good_hands = document.getElementById('sp-family-section-youre-in-good-hands');
  if (sp_family_section_youre_in_good_hands) {
    gsap.fromTo('#sp-family-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_family_section_21 = document.getElementById('sp-family-section-21');
  if (sp_family_section_21) {
    gsap.fromTo('#sp-family-section-21', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_sports_form_compete_in_brazil_with_the_sports_visa = document.getElementById('sp-sports-form-compete-in-brazil-with-the-sports-visa');
  if (sp_sports_form_compete_in_brazil_with_the_sports_visa) {
    gsap.from('#sp-sports-form-compete-in-brazil-with-the-sports-visa input, #sp-sports-form-compete-in-brazil-with-the-sports-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_sports_list_quick_facts = document.getElementById('sp-sports-list-quick-facts');
  if (sp_sports_list_quick_facts) {
    gsap.from('#sp-sports-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_sports_list_common_challenges_applicants_face = document.getElementById('sp-sports-list-common-challenges-applicants-face');
  if (sp_sports_list_common_challenges_applicants_face) {
    gsap.from('#sp-sports-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_sports_list_how_we_solve_these_challenges = document.getElementById('sp-sports-list-how-we-solve-these-challenges');
  if (sp_sports_list_how_we_solve_these_challenges) {
    gsap.from('#sp-sports-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_sports_section_visa_overview = document.getElementById('sp-sports-section-visa-overview');
  if (sp_sports_section_visa_overview) {
    gsap.fromTo('#sp-sports-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_sports_form_who_is_this_visa_for = document.getElementById('sp-sports-form-who-is-this-visa-for');
  if (sp_sports_form_who_is_this_visa_for) {
    gsap.from('#sp-sports-form-who-is-this-visa-for input, #sp-sports-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_sports_list_required_documents = document.getElementById('sp-sports-list-required-documents');
  if (sp_sports_list_required_documents) {
    gsap.from('#sp-sports-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_sports_list_application_process = document.getElementById('sp-sports-list-application-process');
  if (sp_sports_list_application_process) {
    gsap.from('#sp-sports-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_sports_section_timelines_deadlines = document.getElementById('sp-sports-section-timelines-deadlines');
  if (sp_sports_section_timelines_deadlines) {
    gsap.fromTo('#sp-sports-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_sports_section_fees_costs = document.getElementById('sp-sports-section-fees-costs');
  if (sp_sports_section_fees_costs) {
    gsap.fromTo('#sp-sports-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_sports_list_risks_common_mistakes = document.getElementById('sp-sports-list-risks-common-mistakes');
  if (sp_sports_list_risks_common_mistakes) {
    gsap.from('#sp-sports-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_sports_section_diy_vs_professional_assistance = document.getElementById('sp-sports-section-diy-vs-professional-assistance');
  if (sp_sports_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sp-sports-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_sports_section_so_paulo_specific_context = document.getElementById('sp-sports-section-so-paulo-specific-context');
  if (sp_sports_section_so_paulo_specific_context) {
    gsap.fromTo('#sp-sports-section-so-paulo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_sports_section_what_our_clients_say = document.getElementById('sp-sports-section-what-our-clients-say');
  if (sp_sports_section_what_our_clients_say) {
    gsap.fromTo('#sp-sports-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_sports_section_frequently_asked_questions = document.getElementById('sp-sports-section-frequently-asked-questions');
  if (sp_sports_section_frequently_asked_questions) {
    gsap.fromTo('#sp-sports-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_sports_section_international_support = document.getElementById('sp-sports-section-international-support');
  if (sp_sports_section_international_support) {
    gsap.fromTo('#sp-sports-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_sports_list_our_credentials = document.getElementById('sp-sports-list-our-credentials');
  if (sp_sports_list_our_credentials) {
    gsap.from('#sp-sports-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_sports_list_related_services = document.getElementById('sp-sports-list-related-services');
  if (sp_sports_list_related_services) {
    gsap.from('#sp-sports-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_sports_section_youre_in_good_hands = document.getElementById('sp-sports-section-youre-in-good-hands');
  if (sp_sports_section_youre_in_good_hands) {
    gsap.fromTo('#sp-sports-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_sports_section_21 = document.getElementById('sp-sports-section-21');
  if (sp_sports_section_21) {
    gsap.fromTo('#sp-sports-section-21', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_medical_form_receive_medical_treatment_in_brazil_with_the_medical_visa = document.getElementById('sp-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa');
  if (sp_medical_form_receive_medical_treatment_in_brazil_with_the_medical_visa) {
    gsap.from('#sp-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa input, #sp-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_medical_list_quick_facts = document.getElementById('sp-medical-list-quick-facts');
  if (sp_medical_list_quick_facts) {
    gsap.from('#sp-medical-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_medical_list_common_challenges_applicants_face = document.getElementById('sp-medical-list-common-challenges-applicants-face');
  if (sp_medical_list_common_challenges_applicants_face) {
    gsap.from('#sp-medical-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_medical_list_how_we_solve_these_challenges = document.getElementById('sp-medical-list-how-we-solve-these-challenges');
  if (sp_medical_list_how_we_solve_these_challenges) {
    gsap.from('#sp-medical-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_medical_section_visa_overview = document.getElementById('sp-medical-section-visa-overview');
  if (sp_medical_section_visa_overview) {
    gsap.fromTo('#sp-medical-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_medical_form_who_is_this_visa_for = document.getElementById('sp-medical-form-who-is-this-visa-for');
  if (sp_medical_form_who_is_this_visa_for) {
    gsap.from('#sp-medical-form-who-is-this-visa-for input, #sp-medical-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_medical_list_required_documents = document.getElementById('sp-medical-list-required-documents');
  if (sp_medical_list_required_documents) {
    gsap.from('#sp-medical-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_medical_list_application_process = document.getElementById('sp-medical-list-application-process');
  if (sp_medical_list_application_process) {
    gsap.from('#sp-medical-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_medical_section_timelines_deadlines = document.getElementById('sp-medical-section-timelines-deadlines');
  if (sp_medical_section_timelines_deadlines) {
    gsap.fromTo('#sp-medical-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_medical_section_fees_costs = document.getElementById('sp-medical-section-fees-costs');
  if (sp_medical_section_fees_costs) {
    gsap.fromTo('#sp-medical-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_medical_list_risks_common_mistakes = document.getElementById('sp-medical-list-risks-common-mistakes');
  if (sp_medical_list_risks_common_mistakes) {
    gsap.from('#sp-medical-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_medical_section_diy_vs_professional_assistance = document.getElementById('sp-medical-section-diy-vs-professional-assistance');
  if (sp_medical_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sp-medical-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_medical_section_so_paulo_specific_context = document.getElementById('sp-medical-section-so-paulo-specific-context');
  if (sp_medical_section_so_paulo_specific_context) {
    gsap.fromTo('#sp-medical-section-so-paulo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_medical_section_what_our_clients_say = document.getElementById('sp-medical-section-what-our-clients-say');
  if (sp_medical_section_what_our_clients_say) {
    gsap.fromTo('#sp-medical-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_medical_section_frequently_asked_questions = document.getElementById('sp-medical-section-frequently-asked-questions');
  if (sp_medical_section_frequently_asked_questions) {
    gsap.fromTo('#sp-medical-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_medical_section_international_support = document.getElementById('sp-medical-section-international-support');
  if (sp_medical_section_international_support) {
    gsap.fromTo('#sp-medical-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_medical_list_our_credentials = document.getElementById('sp-medical-list-our-credentials');
  if (sp_medical_list_our_credentials) {
    gsap.from('#sp-medical-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_medical_list_related_services = document.getElementById('sp-medical-list-related-services');
  if (sp_medical_list_related_services) {
    gsap.from('#sp-medical-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_medical_section_youre_in_good_hands = document.getElementById('sp-medical-section-youre-in-good-hands');
  if (sp_medical_section_youre_in_good_hands) {
    gsap.fromTo('#sp-medical-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_medical_section_21 = document.getElementById('sp-medical-section-21');
  if (sp_medical_section_21) {
    gsap.fromTo('#sp-medical-section-21', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_tourist_form_visit_brazil_as_a_tourist_with_the_tourist_visa = document.getElementById('sp-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa');
  if (sp_tourist_form_visit_brazil_as_a_tourist_with_the_tourist_visa) {
    gsap.from('#sp-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa input, #sp-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_tourist_list_quick_facts = document.getElementById('sp-tourist-list-quick-facts');
  if (sp_tourist_list_quick_facts) {
    gsap.from('#sp-tourist-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_tourist_list_common_challenges_applicants_face = document.getElementById('sp-tourist-list-common-challenges-applicants-face');
  if (sp_tourist_list_common_challenges_applicants_face) {
    gsap.from('#sp-tourist-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_tourist_list_how_we_solve_these_challenges = document.getElementById('sp-tourist-list-how-we-solve-these-challenges');
  if (sp_tourist_list_how_we_solve_these_challenges) {
    gsap.from('#sp-tourist-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_tourist_section_visa_overview = document.getElementById('sp-tourist-section-visa-overview');
  if (sp_tourist_section_visa_overview) {
    gsap.fromTo('#sp-tourist-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_tourist_form_who_is_this_visa_for = document.getElementById('sp-tourist-form-who-is-this-visa-for');
  if (sp_tourist_form_who_is_this_visa_for) {
    gsap.from('#sp-tourist-form-who-is-this-visa-for input, #sp-tourist-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_tourist_list_required_documents = document.getElementById('sp-tourist-list-required-documents');
  if (sp_tourist_list_required_documents) {
    gsap.from('#sp-tourist-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_tourist_list_application_process = document.getElementById('sp-tourist-list-application-process');
  if (sp_tourist_list_application_process) {
    gsap.from('#sp-tourist-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_tourist_section_timelines_deadlines = document.getElementById('sp-tourist-section-timelines-deadlines');
  if (sp_tourist_section_timelines_deadlines) {
    gsap.fromTo('#sp-tourist-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_tourist_section_fees_costs = document.getElementById('sp-tourist-section-fees-costs');
  if (sp_tourist_section_fees_costs) {
    gsap.fromTo('#sp-tourist-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_tourist_list_risks_common_mistakes = document.getElementById('sp-tourist-list-risks-common-mistakes');
  if (sp_tourist_list_risks_common_mistakes) {
    gsap.from('#sp-tourist-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_tourist_section_diy_vs_professional_assistance = document.getElementById('sp-tourist-section-diy-vs-professional-assistance');
  if (sp_tourist_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sp-tourist-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_tourist_section_so_paulo_specific_context = document.getElementById('sp-tourist-section-so-paulo-specific-context');
  if (sp_tourist_section_so_paulo_specific_context) {
    gsap.fromTo('#sp-tourist-section-so-paulo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_tourist_section_what_our_clients_say = document.getElementById('sp-tourist-section-what-our-clients-say');
  if (sp_tourist_section_what_our_clients_say) {
    gsap.fromTo('#sp-tourist-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_tourist_section_frequently_asked_questions = document.getElementById('sp-tourist-section-frequently-asked-questions');
  if (sp_tourist_section_frequently_asked_questions) {
    gsap.fromTo('#sp-tourist-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_tourist_section_international_support = document.getElementById('sp-tourist-section-international-support');
  if (sp_tourist_section_international_support) {
    gsap.fromTo('#sp-tourist-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_tourist_list_our_credentials = document.getElementById('sp-tourist-list-our-credentials');
  if (sp_tourist_list_our_credentials) {
    gsap.from('#sp-tourist-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_tourist_list_related_services = document.getElementById('sp-tourist-list-related-services');
  if (sp_tourist_list_related_services) {
    gsap.from('#sp-tourist-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_tourist_section_youre_in_good_hands = document.getElementById('sp-tourist-section-youre-in-good-hands');
  if (sp_tourist_section_youre_in_good_hands) {
    gsap.fromTo('#sp-tourist-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_tourist_section_21 = document.getElementById('sp-tourist-section-21');
  if (sp_tourist_section_21) {
    gsap.fromTo('#sp-tourist-section-21', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_transit_form_transit_through_brazil_with_the_transit_visa = document.getElementById('sp-transit-form-transit-through-brazil-with-the-transit-visa');
  if (sp_transit_form_transit_through_brazil_with_the_transit_visa) {
    gsap.from('#sp-transit-form-transit-through-brazil-with-the-transit-visa input, #sp-transit-form-transit-through-brazil-with-the-transit-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_transit_list_quick_facts = document.getElementById('sp-transit-list-quick-facts');
  if (sp_transit_list_quick_facts) {
    gsap.from('#sp-transit-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_transit_list_common_challenges_applicants_face = document.getElementById('sp-transit-list-common-challenges-applicants-face');
  if (sp_transit_list_common_challenges_applicants_face) {
    gsap.from('#sp-transit-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_transit_list_how_we_solve_these_challenges = document.getElementById('sp-transit-list-how-we-solve-these-challenges');
  if (sp_transit_list_how_we_solve_these_challenges) {
    gsap.from('#sp-transit-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_transit_section_visa_overview = document.getElementById('sp-transit-section-visa-overview');
  if (sp_transit_section_visa_overview) {
    gsap.fromTo('#sp-transit-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_transit_form_who_is_this_visa_for = document.getElementById('sp-transit-form-who-is-this-visa-for');
  if (sp_transit_form_who_is_this_visa_for) {
    gsap.from('#sp-transit-form-who-is-this-visa-for input, #sp-transit-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_transit_list_required_documents = document.getElementById('sp-transit-list-required-documents');
  if (sp_transit_list_required_documents) {
    gsap.from('#sp-transit-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_transit_list_application_process = document.getElementById('sp-transit-list-application-process');
  if (sp_transit_list_application_process) {
    gsap.from('#sp-transit-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_transit_section_timelines_deadlines = document.getElementById('sp-transit-section-timelines-deadlines');
  if (sp_transit_section_timelines_deadlines) {
    gsap.fromTo('#sp-transit-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_transit_section_fees_costs = document.getElementById('sp-transit-section-fees-costs');
  if (sp_transit_section_fees_costs) {
    gsap.fromTo('#sp-transit-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_transit_list_risks_common_mistakes = document.getElementById('sp-transit-list-risks-common-mistakes');
  if (sp_transit_list_risks_common_mistakes) {
    gsap.from('#sp-transit-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_transit_section_diy_vs_professional_assistance = document.getElementById('sp-transit-section-diy-vs-professional-assistance');
  if (sp_transit_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sp-transit-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_transit_section_so_paulo_specific_context = document.getElementById('sp-transit-section-so-paulo-specific-context');
  if (sp_transit_section_so_paulo_specific_context) {
    gsap.fromTo('#sp-transit-section-so-paulo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_transit_section_what_our_clients_say = document.getElementById('sp-transit-section-what-our-clients-say');
  if (sp_transit_section_what_our_clients_say) {
    gsap.fromTo('#sp-transit-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_transit_section_frequently_asked_questions = document.getElementById('sp-transit-section-frequently-asked-questions');
  if (sp_transit_section_frequently_asked_questions) {
    gsap.fromTo('#sp-transit-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_transit_section_international_support = document.getElementById('sp-transit-section-international-support');
  if (sp_transit_section_international_support) {
    gsap.fromTo('#sp-transit-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_transit_list_our_credentials = document.getElementById('sp-transit-list-our-credentials');
  if (sp_transit_list_our_credentials) {
    gsap.from('#sp-transit-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_transit_list_related_services = document.getElementById('sp-transit-list-related-services');
  if (sp_transit_list_related_services) {
    gsap.from('#sp-transit-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_transit_section_youre_in_good_hands = document.getElementById('sp-transit-section-youre-in-good-hands');
  if (sp_transit_section_youre_in_good_hands) {
    gsap.fromTo('#sp-transit-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_transit_section_21 = document.getElementById('sp-transit-section-21');
  if (sp_transit_section_21) {
    gsap.fromTo('#sp-transit-section-21', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_student_form_study_in_brazil_with_the_student_visa = document.getElementById('sp-student-form-study-in-brazil-with-the-student-visa');
  if (sp_student_form_study_in_brazil_with_the_student_visa) {
    gsap.from('#sp-student-form-study-in-brazil-with-the-student-visa input, #sp-student-form-study-in-brazil-with-the-student-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_student_list_quick_facts = document.getElementById('sp-student-list-quick-facts');
  if (sp_student_list_quick_facts) {
    gsap.from('#sp-student-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_student_list_common_challenges_applicants_face = document.getElementById('sp-student-list-common-challenges-applicants-face');
  if (sp_student_list_common_challenges_applicants_face) {
    gsap.from('#sp-student-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_student_list_how_we_solve_these_challenges = document.getElementById('sp-student-list-how-we-solve-these-challenges');
  if (sp_student_list_how_we_solve_these_challenges) {
    gsap.from('#sp-student-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_student_section_visa_overview = document.getElementById('sp-student-section-visa-overview');
  if (sp_student_section_visa_overview) {
    gsap.fromTo('#sp-student-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_student_form_who_is_this_visa_for = document.getElementById('sp-student-form-who-is-this-visa-for');
  if (sp_student_form_who_is_this_visa_for) {
    gsap.from('#sp-student-form-who-is-this-visa-for input, #sp-student-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_student_list_required_documents = document.getElementById('sp-student-list-required-documents');
  if (sp_student_list_required_documents) {
    gsap.from('#sp-student-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_student_list_application_process = document.getElementById('sp-student-list-application-process');
  if (sp_student_list_application_process) {
    gsap.from('#sp-student-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_student_section_timelines_deadlines = document.getElementById('sp-student-section-timelines-deadlines');
  if (sp_student_section_timelines_deadlines) {
    gsap.fromTo('#sp-student-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_student_section_fees_costs = document.getElementById('sp-student-section-fees-costs');
  if (sp_student_section_fees_costs) {
    gsap.fromTo('#sp-student-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_student_list_risks_common_mistakes = document.getElementById('sp-student-list-risks-common-mistakes');
  if (sp_student_list_risks_common_mistakes) {
    gsap.from('#sp-student-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_student_section_diy_vs_professional_assistance = document.getElementById('sp-student-section-diy-vs-professional-assistance');
  if (sp_student_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sp-student-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_student_section_so_paulo_specific_context = document.getElementById('sp-student-section-so-paulo-specific-context');
  if (sp_student_section_so_paulo_specific_context) {
    gsap.fromTo('#sp-student-section-so-paulo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_student_section_what_our_clients_say = document.getElementById('sp-student-section-what-our-clients-say');
  if (sp_student_section_what_our_clients_say) {
    gsap.fromTo('#sp-student-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_student_section_frequently_asked_questions = document.getElementById('sp-student-section-frequently-asked-questions');
  if (sp_student_section_frequently_asked_questions) {
    gsap.fromTo('#sp-student-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_student_section_international_support = document.getElementById('sp-student-section-international-support');
  if (sp_student_section_international_support) {
    gsap.fromTo('#sp-student-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_student_list_our_credentials = document.getElementById('sp-student-list-our-credentials');
  if (sp_student_list_our_credentials) {
    gsap.from('#sp-student-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_student_list_related_services = document.getElementById('sp-student-list-related-services');
  if (sp_student_list_related_services) {
    gsap.from('#sp-student-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_student_section_youre_in_good_hands = document.getElementById('sp-student-section-youre-in-good-hands');
  if (sp_student_section_youre_in_good_hands) {
    gsap.fromTo('#sp-student-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_student_section_21 = document.getElementById('sp-student-section-21');
  if (sp_student_section_21) {
    gsap.fromTo('#sp-student-section-21', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_business_form_conduct_business_in_brazil_with_the_business_visa = document.getElementById('sp-business-form-conduct-business-in-brazil-with-the-business-visa');
  if (sp_business_form_conduct_business_in_brazil_with_the_business_visa) {
    gsap.from('#sp-business-form-conduct-business-in-brazil-with-the-business-visa input, #sp-business-form-conduct-business-in-brazil-with-the-business-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_business_list_quick_facts = document.getElementById('sp-business-list-quick-facts');
  if (sp_business_list_quick_facts) {
    gsap.from('#sp-business-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_business_list_common_challenges_applicants_face = document.getElementById('sp-business-list-common-challenges-applicants-face');
  if (sp_business_list_common_challenges_applicants_face) {
    gsap.from('#sp-business-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_business_list_how_we_solve_these_challenges = document.getElementById('sp-business-list-how-we-solve-these-challenges');
  if (sp_business_list_how_we_solve_these_challenges) {
    gsap.from('#sp-business-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_business_section_visa_overview = document.getElementById('sp-business-section-visa-overview');
  if (sp_business_section_visa_overview) {
    gsap.fromTo('#sp-business-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_business_form_who_is_this_visa_for = document.getElementById('sp-business-form-who-is-this-visa-for');
  if (sp_business_form_who_is_this_visa_for) {
    gsap.from('#sp-business-form-who-is-this-visa-for input, #sp-business-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_business_list_required_documents = document.getElementById('sp-business-list-required-documents');
  if (sp_business_list_required_documents) {
    gsap.from('#sp-business-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_business_list_application_process = document.getElementById('sp-business-list-application-process');
  if (sp_business_list_application_process) {
    gsap.from('#sp-business-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_business_section_timelines_deadlines = document.getElementById('sp-business-section-timelines-deadlines');
  if (sp_business_section_timelines_deadlines) {
    gsap.fromTo('#sp-business-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_business_section_fees_costs = document.getElementById('sp-business-section-fees-costs');
  if (sp_business_section_fees_costs) {
    gsap.fromTo('#sp-business-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_business_list_risks_common_mistakes = document.getElementById('sp-business-list-risks-common-mistakes');
  if (sp_business_list_risks_common_mistakes) {
    gsap.from('#sp-business-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_business_section_diy_vs_professional_assistance = document.getElementById('sp-business-section-diy-vs-professional-assistance');
  if (sp_business_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sp-business-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_business_section_so_paulo_specific_context = document.getElementById('sp-business-section-so-paulo-specific-context');
  if (sp_business_section_so_paulo_specific_context) {
    gsap.fromTo('#sp-business-section-so-paulo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_business_section_what_our_clients_say = document.getElementById('sp-business-section-what-our-clients-say');
  if (sp_business_section_what_our_clients_say) {
    gsap.fromTo('#sp-business-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_business_section_frequently_asked_questions = document.getElementById('sp-business-section-frequently-asked-questions');
  if (sp_business_section_frequently_asked_questions) {
    gsap.fromTo('#sp-business-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_business_section_international_support = document.getElementById('sp-business-section-international-support');
  if (sp_business_section_international_support) {
    gsap.fromTo('#sp-business-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_business_list_our_credentials = document.getElementById('sp-business-list-our-credentials');
  if (sp_business_list_our_credentials) {
    gsap.from('#sp-business-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_business_list_related_services = document.getElementById('sp-business-list-related-services');
  if (sp_business_list_related_services) {
    gsap.from('#sp-business-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_business_section_youre_in_good_hands = document.getElementById('sp-business-section-youre-in-good-hands');
  if (sp_business_section_youre_in_good_hands) {
    gsap.fromTo('#sp-business-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_business_section_21 = document.getElementById('sp-business-section-21');
  if (sp_business_section_21) {
    gsap.fromTo('#sp-business-section-21', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_research_form_conduct_research_in_brazil_with_the_research_visa = document.getElementById('sp-research-form-conduct-research-in-brazil-with-the-research-visa');
  if (sp_research_form_conduct_research_in_brazil_with_the_research_visa) {
    gsap.from('#sp-research-form-conduct-research-in-brazil-with-the-research-visa input, #sp-research-form-conduct-research-in-brazil-with-the-research-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_research_list_quick_facts = document.getElementById('sp-research-list-quick-facts');
  if (sp_research_list_quick_facts) {
    gsap.from('#sp-research-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_research_list_common_challenges_applicants_face = document.getElementById('sp-research-list-common-challenges-applicants-face');
  if (sp_research_list_common_challenges_applicants_face) {
    gsap.from('#sp-research-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_research_list_how_we_solve_these_challenges = document.getElementById('sp-research-list-how-we-solve-these-challenges');
  if (sp_research_list_how_we_solve_these_challenges) {
    gsap.from('#sp-research-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_research_section_visa_overview = document.getElementById('sp-research-section-visa-overview');
  if (sp_research_section_visa_overview) {
    gsap.fromTo('#sp-research-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_research_form_who_is_this_visa_for = document.getElementById('sp-research-form-who-is-this-visa-for');
  if (sp_research_form_who_is_this_visa_for) {
    gsap.from('#sp-research-form-who-is-this-visa-for input, #sp-research-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_research_list_required_documents = document.getElementById('sp-research-list-required-documents');
  if (sp_research_list_required_documents) {
    gsap.from('#sp-research-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_research_list_application_process = document.getElementById('sp-research-list-application-process');
  if (sp_research_list_application_process) {
    gsap.from('#sp-research-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_research_section_timelines_deadlines = document.getElementById('sp-research-section-timelines-deadlines');
  if (sp_research_section_timelines_deadlines) {
    gsap.fromTo('#sp-research-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_research_section_fees_costs = document.getElementById('sp-research-section-fees-costs');
  if (sp_research_section_fees_costs) {
    gsap.fromTo('#sp-research-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_research_list_risks_common_mistakes = document.getElementById('sp-research-list-risks-common-mistakes');
  if (sp_research_list_risks_common_mistakes) {
    gsap.from('#sp-research-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_research_section_diy_vs_professional_assistance = document.getElementById('sp-research-section-diy-vs-professional-assistance');
  if (sp_research_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sp-research-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_research_section_so_paulo_specific_context = document.getElementById('sp-research-section-so-paulo-specific-context');
  if (sp_research_section_so_paulo_specific_context) {
    gsap.fromTo('#sp-research-section-so-paulo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_research_section_what_our_clients_say = document.getElementById('sp-research-section-what-our-clients-say');
  if (sp_research_section_what_our_clients_say) {
    gsap.fromTo('#sp-research-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_research_section_frequently_asked_questions = document.getElementById('sp-research-section-frequently-asked-questions');
  if (sp_research_section_frequently_asked_questions) {
    gsap.fromTo('#sp-research-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_research_section_international_support = document.getElementById('sp-research-section-international-support');
  if (sp_research_section_international_support) {
    gsap.fromTo('#sp-research-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_research_list_our_credentials = document.getElementById('sp-research-list-our-credentials');
  if (sp_research_list_our_credentials) {
    gsap.from('#sp-research-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_research_list_related_services = document.getElementById('sp-research-list-related-services');
  if (sp_research_list_related_services) {
    gsap.from('#sp-research-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_research_section_youre_in_good_hands = document.getElementById('sp-research-section-youre-in-good-hands');
  if (sp_research_section_youre_in_good_hands) {
    gsap.fromTo('#sp-research-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_research_section_21 = document.getElementById('sp-research-section-21');
  if (sp_research_section_21) {
    gsap.fromTo('#sp-research-section-21', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_diplomatic_form_official_diplomatic_visa_for_brazil_missions = document.getElementById('sp-diplomatic-form-official-diplomatic-visa-for-brazil-missions');
  if (sp_diplomatic_form_official_diplomatic_visa_for_brazil_missions) {
    gsap.from('#sp-diplomatic-form-official-diplomatic-visa-for-brazil-missions input, #sp-diplomatic-form-official-diplomatic-visa-for-brazil-missions textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_diplomatic_list_quick_facts = document.getElementById('sp-diplomatic-list-quick-facts');
  if (sp_diplomatic_list_quick_facts) {
    gsap.from('#sp-diplomatic-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_diplomatic_list_common_challenges_applicants_face = document.getElementById('sp-diplomatic-list-common-challenges-applicants-face');
  if (sp_diplomatic_list_common_challenges_applicants_face) {
    gsap.from('#sp-diplomatic-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_diplomatic_list_how_we_solve_these_challenges = document.getElementById('sp-diplomatic-list-how-we-solve-these-challenges');
  if (sp_diplomatic_list_how_we_solve_these_challenges) {
    gsap.from('#sp-diplomatic-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_diplomatic_section_visa_overview = document.getElementById('sp-diplomatic-section-visa-overview');
  if (sp_diplomatic_section_visa_overview) {
    gsap.fromTo('#sp-diplomatic-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_diplomatic_form_who_is_this_visa_for = document.getElementById('sp-diplomatic-form-who-is-this-visa-for');
  if (sp_diplomatic_form_who_is_this_visa_for) {
    gsap.from('#sp-diplomatic-form-who-is-this-visa-for input, #sp-diplomatic-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_diplomatic_list_required_documents = document.getElementById('sp-diplomatic-list-required-documents');
  if (sp_diplomatic_list_required_documents) {
    gsap.from('#sp-diplomatic-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_diplomatic_list_application_process = document.getElementById('sp-diplomatic-list-application-process');
  if (sp_diplomatic_list_application_process) {
    gsap.from('#sp-diplomatic-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_diplomatic_section_timelines_deadlines = document.getElementById('sp-diplomatic-section-timelines-deadlines');
  if (sp_diplomatic_section_timelines_deadlines) {
    gsap.fromTo('#sp-diplomatic-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_diplomatic_section_fees_costs = document.getElementById('sp-diplomatic-section-fees-costs');
  if (sp_diplomatic_section_fees_costs) {
    gsap.fromTo('#sp-diplomatic-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_diplomatic_list_risks_common_mistakes = document.getElementById('sp-diplomatic-list-risks-common-mistakes');
  if (sp_diplomatic_list_risks_common_mistakes) {
    gsap.from('#sp-diplomatic-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_diplomatic_section_diy_vs_professional_assistance = document.getElementById('sp-diplomatic-section-diy-vs-professional-assistance');
  if (sp_diplomatic_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sp-diplomatic-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_diplomatic_section_so_paulo_specific_context = document.getElementById('sp-diplomatic-section-so-paulo-specific-context');
  if (sp_diplomatic_section_so_paulo_specific_context) {
    gsap.fromTo('#sp-diplomatic-section-so-paulo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_diplomatic_section_what_our_clients_say = document.getElementById('sp-diplomatic-section-what-our-clients-say');
  if (sp_diplomatic_section_what_our_clients_say) {
    gsap.fromTo('#sp-diplomatic-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_diplomatic_section_frequently_asked_questions = document.getElementById('sp-diplomatic-section-frequently-asked-questions');
  if (sp_diplomatic_section_frequently_asked_questions) {
    gsap.fromTo('#sp-diplomatic-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_diplomatic_section_international_support = document.getElementById('sp-diplomatic-section-international-support');
  if (sp_diplomatic_section_international_support) {
    gsap.fromTo('#sp-diplomatic-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_diplomatic_list_our_credentials = document.getElementById('sp-diplomatic-list-our-credentials');
  if (sp_diplomatic_list_our_credentials) {
    gsap.from('#sp-diplomatic-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_diplomatic_list_related_services = document.getElementById('sp-diplomatic-list-related-services');
  if (sp_diplomatic_list_related_services) {
    gsap.from('#sp-diplomatic-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_diplomatic_section_youre_in_good_hands = document.getElementById('sp-diplomatic-section-youre-in-good-hands');
  if (sp_diplomatic_section_youre_in_good_hands) {
    gsap.fromTo('#sp-diplomatic-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_diplomatic_section_21 = document.getElementById('sp-diplomatic-section-21');
  if (sp_diplomatic_section_21) {
    gsap.fromTo('#sp-diplomatic-section-21', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_journalist_form_cover_news_in_brazil_with_the_journalist_visa = document.getElementById('sp-journalist-form-cover-news-in-brazil-with-the-journalist-visa');
  if (sp_journalist_form_cover_news_in_brazil_with_the_journalist_visa) {
    gsap.from('#sp-journalist-form-cover-news-in-brazil-with-the-journalist-visa input, #sp-journalist-form-cover-news-in-brazil-with-the-journalist-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_journalist_list_quick_facts = document.getElementById('sp-journalist-list-quick-facts');
  if (sp_journalist_list_quick_facts) {
    gsap.from('#sp-journalist-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_journalist_list_common_challenges_applicants_face = document.getElementById('sp-journalist-list-common-challenges-applicants-face');
  if (sp_journalist_list_common_challenges_applicants_face) {
    gsap.from('#sp-journalist-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_journalist_list_how_we_solve_these_challenges = document.getElementById('sp-journalist-list-how-we-solve-these-challenges');
  if (sp_journalist_list_how_we_solve_these_challenges) {
    gsap.from('#sp-journalist-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_journalist_section_visa_overview = document.getElementById('sp-journalist-section-visa-overview');
  if (sp_journalist_section_visa_overview) {
    gsap.fromTo('#sp-journalist-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_journalist_form_who_is_this_visa_for = document.getElementById('sp-journalist-form-who-is-this-visa-for');
  if (sp_journalist_form_who_is_this_visa_for) {
    gsap.from('#sp-journalist-form-who-is-this-visa-for input, #sp-journalist-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_journalist_list_required_documents = document.getElementById('sp-journalist-list-required-documents');
  if (sp_journalist_list_required_documents) {
    gsap.from('#sp-journalist-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_journalist_list_application_process = document.getElementById('sp-journalist-list-application-process');
  if (sp_journalist_list_application_process) {
    gsap.from('#sp-journalist-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_journalist_section_timelines_deadlines = document.getElementById('sp-journalist-section-timelines-deadlines');
  if (sp_journalist_section_timelines_deadlines) {
    gsap.fromTo('#sp-journalist-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_journalist_section_fees_costs = document.getElementById('sp-journalist-section-fees-costs');
  if (sp_journalist_section_fees_costs) {
    gsap.fromTo('#sp-journalist-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_journalist_list_risks_common_mistakes = document.getElementById('sp-journalist-list-risks-common-mistakes');
  if (sp_journalist_list_risks_common_mistakes) {
    gsap.from('#sp-journalist-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_journalist_section_diy_vs_professional_assistance = document.getElementById('sp-journalist-section-diy-vs-professional-assistance');
  if (sp_journalist_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sp-journalist-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_journalist_section_so_paulo_specific_context = document.getElementById('sp-journalist-section-so-paulo-specific-context');
  if (sp_journalist_section_so_paulo_specific_context) {
    gsap.fromTo('#sp-journalist-section-so-paulo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_journalist_section_what_our_clients_say = document.getElementById('sp-journalist-section-what-our-clients-say');
  if (sp_journalist_section_what_our_clients_say) {
    gsap.fromTo('#sp-journalist-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_journalist_section_frequently_asked_questions = document.getElementById('sp-journalist-section-frequently-asked-questions');
  if (sp_journalist_section_frequently_asked_questions) {
    gsap.fromTo('#sp-journalist-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_journalist_section_international_support = document.getElementById('sp-journalist-section-international-support');
  if (sp_journalist_section_international_support) {
    gsap.fromTo('#sp-journalist-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_journalist_list_our_credentials = document.getElementById('sp-journalist-list-our-credentials');
  if (sp_journalist_list_our_credentials) {
    gsap.from('#sp-journalist-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_journalist_list_related_services = document.getElementById('sp-journalist-list-related-services');
  if (sp_journalist_list_related_services) {
    gsap.from('#sp-journalist-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_journalist_section_youre_in_good_hands = document.getElementById('sp-journalist-section-youre-in-good-hands');
  if (sp_journalist_section_youre_in_good_hands) {
    gsap.fromTo('#sp-journalist-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_journalist_section_21 = document.getElementById('sp-journalist-section-21');
  if (sp_journalist_section_21) {
    gsap.fromTo('#sp-journalist-section-21', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_fines_form_resolve_immigration_fines_in_brazil = document.getElementById('sp-fines-form-resolve-immigration-fines-in-brazil');
  if (sp_fines_form_resolve_immigration_fines_in_brazil) {
    gsap.from('#sp-fines-form-resolve-immigration-fines-in-brazil input, #sp-fines-form-resolve-immigration-fines-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_fines_list_quick_facts = document.getElementById('sp-fines-list-quick-facts');
  if (sp_fines_list_quick_facts) {
    gsap.from('#sp-fines-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_fines_list_common_challenges_applicants_face = document.getElementById('sp-fines-list-common-challenges-applicants-face');
  if (sp_fines_list_common_challenges_applicants_face) {
    gsap.from('#sp-fines-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_fines_list_how_we_solve_these_challenges = document.getElementById('sp-fines-list-how-we-solve-these-challenges');
  if (sp_fines_list_how_we_solve_these_challenges) {
    gsap.from('#sp-fines-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_fines_section_service_overview = document.getElementById('sp-fines-section-service-overview');
  if (sp_fines_section_service_overview) {
    gsap.fromTo('#sp-fines-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_fines_form_who_is_this_service_for = document.getElementById('sp-fines-form-who-is-this-service-for');
  if (sp_fines_form_who_is_this_service_for) {
    gsap.from('#sp-fines-form-who-is-this-service-for input, #sp-fines-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_fines_list_required_documents = document.getElementById('sp-fines-list-required-documents');
  if (sp_fines_list_required_documents) {
    gsap.from('#sp-fines-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_fines_list_process = document.getElementById('sp-fines-list-process');
  if (sp_fines_list_process) {
    gsap.from('#sp-fines-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_fines_section_timelines_deadlines = document.getElementById('sp-fines-section-timelines-deadlines');
  if (sp_fines_section_timelines_deadlines) {
    gsap.fromTo('#sp-fines-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_fines_section_fees_costs = document.getElementById('sp-fines-section-fees-costs');
  if (sp_fines_section_fees_costs) {
    gsap.fromTo('#sp-fines-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_fines_list_risks_common_mistakes = document.getElementById('sp-fines-list-risks-common-mistakes');
  if (sp_fines_list_risks_common_mistakes) {
    gsap.from('#sp-fines-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_fines_section_diy_vs_professional_assistance = document.getElementById('sp-fines-section-diy-vs-professional-assistance');
  if (sp_fines_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sp-fines-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_fines_section_so_paulo_specific_context = document.getElementById('sp-fines-section-so-paulo-specific-context');
  if (sp_fines_section_so_paulo_specific_context) {
    gsap.fromTo('#sp-fines-section-so-paulo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_fines_section_what_our_clients_say = document.getElementById('sp-fines-section-what-our-clients-say');
  if (sp_fines_section_what_our_clients_say) {
    gsap.fromTo('#sp-fines-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_fines_section_frequently_asked_questions = document.getElementById('sp-fines-section-frequently-asked-questions');
  if (sp_fines_section_frequently_asked_questions) {
    gsap.fromTo('#sp-fines-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_fines_section_international_support = document.getElementById('sp-fines-section-international-support');
  if (sp_fines_section_international_support) {
    gsap.fromTo('#sp-fines-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_fines_list_our_credentials = document.getElementById('sp-fines-list-our-credentials');
  if (sp_fines_list_our_credentials) {
    gsap.from('#sp-fines-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_fines_list_related_services = document.getElementById('sp-fines-list-related-services');
  if (sp_fines_list_related_services) {
    gsap.from('#sp-fines-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_fines_section_youre_in_good_hands = document.getElementById('sp-fines-section-youre-in-good-hands');
  if (sp_fines_section_youre_in_good_hands) {
    gsap.fromTo('#sp-fines-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_fines_section_21 = document.getElementById('sp-fines-section-21');
  if (sp_fines_section_21) {
    gsap.fromTo('#sp-fines-section-21', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_deportation_form_deportation_assistance_in_brazil = document.getElementById('sp-deportation-form-deportation-assistance-in-brazil');
  if (sp_deportation_form_deportation_assistance_in_brazil) {
    gsap.from('#sp-deportation-form-deportation-assistance-in-brazil input, #sp-deportation-form-deportation-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_deportation_list_quick_facts = document.getElementById('sp-deportation-list-quick-facts');
  if (sp_deportation_list_quick_facts) {
    gsap.from('#sp-deportation-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_deportation_list_common_challenges_applicants_face = document.getElementById('sp-deportation-list-common-challenges-applicants-face');
  if (sp_deportation_list_common_challenges_applicants_face) {
    gsap.from('#sp-deportation-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_deportation_list_how_we_solve_these_challenges = document.getElementById('sp-deportation-list-how-we-solve-these-challenges');
  if (sp_deportation_list_how_we_solve_these_challenges) {
    gsap.from('#sp-deportation-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_deportation_section_service_overview = document.getElementById('sp-deportation-section-service-overview');
  if (sp_deportation_section_service_overview) {
    gsap.fromTo('#sp-deportation-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_deportation_form_who_is_this_service_for = document.getElementById('sp-deportation-form-who-is-this-service-for');
  if (sp_deportation_form_who_is_this_service_for) {
    gsap.from('#sp-deportation-form-who-is-this-service-for input, #sp-deportation-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_deportation_list_required_documents = document.getElementById('sp-deportation-list-required-documents');
  if (sp_deportation_list_required_documents) {
    gsap.from('#sp-deportation-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_deportation_list_process = document.getElementById('sp-deportation-list-process');
  if (sp_deportation_list_process) {
    gsap.from('#sp-deportation-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_deportation_section_timelines_deadlines = document.getElementById('sp-deportation-section-timelines-deadlines');
  if (sp_deportation_section_timelines_deadlines) {
    gsap.fromTo('#sp-deportation-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_deportation_section_fees_costs = document.getElementById('sp-deportation-section-fees-costs');
  if (sp_deportation_section_fees_costs) {
    gsap.fromTo('#sp-deportation-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_deportation_list_risks_common_mistakes = document.getElementById('sp-deportation-list-risks-common-mistakes');
  if (sp_deportation_list_risks_common_mistakes) {
    gsap.from('#sp-deportation-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_deportation_section_diy_vs_professional_assistance = document.getElementById('sp-deportation-section-diy-vs-professional-assistance');
  if (sp_deportation_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sp-deportation-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_deportation_section_so_paulo_specific_context = document.getElementById('sp-deportation-section-so-paulo-specific-context');
  if (sp_deportation_section_so_paulo_specific_context) {
    gsap.fromTo('#sp-deportation-section-so-paulo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_deportation_section_what_our_clients_say = document.getElementById('sp-deportation-section-what-our-clients-say');
  if (sp_deportation_section_what_our_clients_say) {
    gsap.fromTo('#sp-deportation-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_deportation_section_frequently_asked_questions = document.getElementById('sp-deportation-section-frequently-asked-questions');
  if (sp_deportation_section_frequently_asked_questions) {
    gsap.fromTo('#sp-deportation-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_deportation_section_international_support = document.getElementById('sp-deportation-section-international-support');
  if (sp_deportation_section_international_support) {
    gsap.fromTo('#sp-deportation-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_deportation_list_our_credentials = document.getElementById('sp-deportation-list-our-credentials');
  if (sp_deportation_list_our_credentials) {
    gsap.from('#sp-deportation-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_deportation_list_related_services = document.getElementById('sp-deportation-list-related-services');
  if (sp_deportation_list_related_services) {
    gsap.from('#sp-deportation-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_deportation_section_youre_in_good_hands = document.getElementById('sp-deportation-section-youre-in-good-hands');
  if (sp_deportation_section_youre_in_good_hands) {
    gsap.fromTo('#sp-deportation-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_deportation_section_21 = document.getElementById('sp-deportation-section-21');
  if (sp_deportation_section_21) {
    gsap.fromTo('#sp-deportation-section-21', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_translation_form_sworn_document_translation_services_in_brazil = document.getElementById('sp-translation-form-sworn-document-translation-services-in-brazil');
  if (sp_translation_form_sworn_document_translation_services_in_brazil) {
    gsap.from('#sp-translation-form-sworn-document-translation-services-in-brazil input, #sp-translation-form-sworn-document-translation-services-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_translation_list_quick_facts = document.getElementById('sp-translation-list-quick-facts');
  if (sp_translation_list_quick_facts) {
    gsap.from('#sp-translation-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_translation_list_common_challenges_applicants_face = document.getElementById('sp-translation-list-common-challenges-applicants-face');
  if (sp_translation_list_common_challenges_applicants_face) {
    gsap.from('#sp-translation-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_translation_list_how_we_solve_these_challenges = document.getElementById('sp-translation-list-how-we-solve-these-challenges');
  if (sp_translation_list_how_we_solve_these_challenges) {
    gsap.from('#sp-translation-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_translation_section_service_overview = document.getElementById('sp-translation-section-service-overview');
  if (sp_translation_section_service_overview) {
    gsap.fromTo('#sp-translation-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_translation_form_who_is_this_service_for = document.getElementById('sp-translation-form-who-is-this-service-for');
  if (sp_translation_form_who_is_this_service_for) {
    gsap.from('#sp-translation-form-who-is-this-service-for input, #sp-translation-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_translation_list_required_documents = document.getElementById('sp-translation-list-required-documents');
  if (sp_translation_list_required_documents) {
    gsap.from('#sp-translation-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_translation_list_process = document.getElementById('sp-translation-list-process');
  if (sp_translation_list_process) {
    gsap.from('#sp-translation-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_translation_section_timelines_deadlines = document.getElementById('sp-translation-section-timelines-deadlines');
  if (sp_translation_section_timelines_deadlines) {
    gsap.fromTo('#sp-translation-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_translation_section_fees_costs = document.getElementById('sp-translation-section-fees-costs');
  if (sp_translation_section_fees_costs) {
    gsap.fromTo('#sp-translation-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_translation_list_risks_common_mistakes = document.getElementById('sp-translation-list-risks-common-mistakes');
  if (sp_translation_list_risks_common_mistakes) {
    gsap.from('#sp-translation-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_translation_section_diy_vs_professional_assistance = document.getElementById('sp-translation-section-diy-vs-professional-assistance');
  if (sp_translation_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sp-translation-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_translation_section_so_paulo_specific_context = document.getElementById('sp-translation-section-so-paulo-specific-context');
  if (sp_translation_section_so_paulo_specific_context) {
    gsap.fromTo('#sp-translation-section-so-paulo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_translation_section_what_our_clients_say = document.getElementById('sp-translation-section-what-our-clients-say');
  if (sp_translation_section_what_our_clients_say) {
    gsap.fromTo('#sp-translation-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_translation_section_frequently_asked_questions = document.getElementById('sp-translation-section-frequently-asked-questions');
  if (sp_translation_section_frequently_asked_questions) {
    gsap.fromTo('#sp-translation-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_translation_section_international_support = document.getElementById('sp-translation-section-international-support');
  if (sp_translation_section_international_support) {
    gsap.fromTo('#sp-translation-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_translation_list_our_credentials = document.getElementById('sp-translation-list-our-credentials');
  if (sp_translation_list_our_credentials) {
    gsap.from('#sp-translation-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_translation_list_related_services = document.getElementById('sp-translation-list-related-services');
  if (sp_translation_list_related_services) {
    gsap.from('#sp-translation-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_translation_section_youre_in_good_hands = document.getElementById('sp-translation-section-youre-in-good-hands');
  if (sp_translation_section_youre_in_good_hands) {
    gsap.fromTo('#sp-translation-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_translation_section_21 = document.getElementById('sp-translation-section-21');
  if (sp_translation_section_21) {
    gsap.fromTo('#sp-translation-section-21', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_expulsion_form_expulsion_assistance_in_brazil = document.getElementById('sp-expulsion-form-expulsion-assistance-in-brazil');
  if (sp_expulsion_form_expulsion_assistance_in_brazil) {
    gsap.from('#sp-expulsion-form-expulsion-assistance-in-brazil input, #sp-expulsion-form-expulsion-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_expulsion_list_quick_facts = document.getElementById('sp-expulsion-list-quick-facts');
  if (sp_expulsion_list_quick_facts) {
    gsap.from('#sp-expulsion-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_expulsion_list_common_challenges_applicants_face = document.getElementById('sp-expulsion-list-common-challenges-applicants-face');
  if (sp_expulsion_list_common_challenges_applicants_face) {
    gsap.from('#sp-expulsion-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_expulsion_list_how_we_solve_these_challenges = document.getElementById('sp-expulsion-list-how-we-solve-these-challenges');
  if (sp_expulsion_list_how_we_solve_these_challenges) {
    gsap.from('#sp-expulsion-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_expulsion_section_service_overview = document.getElementById('sp-expulsion-section-service-overview');
  if (sp_expulsion_section_service_overview) {
    gsap.fromTo('#sp-expulsion-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_expulsion_form_who_is_this_service_for = document.getElementById('sp-expulsion-form-who-is-this-service-for');
  if (sp_expulsion_form_who_is_this_service_for) {
    gsap.from('#sp-expulsion-form-who-is-this-service-for input, #sp-expulsion-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_expulsion_list_required_documents = document.getElementById('sp-expulsion-list-required-documents');
  if (sp_expulsion_list_required_documents) {
    gsap.from('#sp-expulsion-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_expulsion_list_process = document.getElementById('sp-expulsion-list-process');
  if (sp_expulsion_list_process) {
    gsap.from('#sp-expulsion-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_expulsion_section_timelines_deadlines = document.getElementById('sp-expulsion-section-timelines-deadlines');
  if (sp_expulsion_section_timelines_deadlines) {
    gsap.fromTo('#sp-expulsion-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_expulsion_section_fees_costs = document.getElementById('sp-expulsion-section-fees-costs');
  if (sp_expulsion_section_fees_costs) {
    gsap.fromTo('#sp-expulsion-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_expulsion_list_risks_common_mistakes = document.getElementById('sp-expulsion-list-risks-common-mistakes');
  if (sp_expulsion_list_risks_common_mistakes) {
    gsap.from('#sp-expulsion-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_expulsion_section_diy_vs_professional_assistance = document.getElementById('sp-expulsion-section-diy-vs-professional-assistance');
  if (sp_expulsion_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sp-expulsion-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_expulsion_section_so_paulo_specific_context = document.getElementById('sp-expulsion-section-so-paulo-specific-context');
  if (sp_expulsion_section_so_paulo_specific_context) {
    gsap.fromTo('#sp-expulsion-section-so-paulo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_expulsion_section_what_our_clients_say = document.getElementById('sp-expulsion-section-what-our-clients-say');
  if (sp_expulsion_section_what_our_clients_say) {
    gsap.fromTo('#sp-expulsion-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_expulsion_section_frequently_asked_questions = document.getElementById('sp-expulsion-section-frequently-asked-questions');
  if (sp_expulsion_section_frequently_asked_questions) {
    gsap.fromTo('#sp-expulsion-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_expulsion_section_international_support = document.getElementById('sp-expulsion-section-international-support');
  if (sp_expulsion_section_international_support) {
    gsap.fromTo('#sp-expulsion-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_expulsion_list_our_credentials = document.getElementById('sp-expulsion-list-our-credentials');
  if (sp_expulsion_list_our_credentials) {
    gsap.from('#sp-expulsion-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_expulsion_list_related_services = document.getElementById('sp-expulsion-list-related-services');
  if (sp_expulsion_list_related_services) {
    gsap.from('#sp-expulsion-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_expulsion_section_youre_in_good_hands = document.getElementById('sp-expulsion-section-youre-in-good-hands');
  if (sp_expulsion_section_youre_in_good_hands) {
    gsap.fromTo('#sp-expulsion-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_expulsion_section_21 = document.getElementById('sp-expulsion-section-21');
  if (sp_expulsion_section_21) {
    gsap.fromTo('#sp-expulsion-section-21', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_appeals_form_appeal_immigration_denials_in_brazil = document.getElementById('sp-appeals-form-appeal-immigration-denials-in-brazil');
  if (sp_appeals_form_appeal_immigration_denials_in_brazil) {
    gsap.from('#sp-appeals-form-appeal-immigration-denials-in-brazil input, #sp-appeals-form-appeal-immigration-denials-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_appeals_list_quick_facts = document.getElementById('sp-appeals-list-quick-facts');
  if (sp_appeals_list_quick_facts) {
    gsap.from('#sp-appeals-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_appeals_list_common_challenges_applicants_face = document.getElementById('sp-appeals-list-common-challenges-applicants-face');
  if (sp_appeals_list_common_challenges_applicants_face) {
    gsap.from('#sp-appeals-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_appeals_list_how_we_solve_these_challenges = document.getElementById('sp-appeals-list-how-we-solve-these-challenges');
  if (sp_appeals_list_how_we_solve_these_challenges) {
    gsap.from('#sp-appeals-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_appeals_section_service_overview = document.getElementById('sp-appeals-section-service-overview');
  if (sp_appeals_section_service_overview) {
    gsap.fromTo('#sp-appeals-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_appeals_form_who_is_this_service_for = document.getElementById('sp-appeals-form-who-is-this-service-for');
  if (sp_appeals_form_who_is_this_service_for) {
    gsap.from('#sp-appeals-form-who-is-this-service-for input, #sp-appeals-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_appeals_list_required_documents = document.getElementById('sp-appeals-list-required-documents');
  if (sp_appeals_list_required_documents) {
    gsap.from('#sp-appeals-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_appeals_list_appeal_process = document.getElementById('sp-appeals-list-appeal-process');
  if (sp_appeals_list_appeal_process) {
    gsap.from('#sp-appeals-list-appeal-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_appeals_section_timelines_deadlines = document.getElementById('sp-appeals-section-timelines-deadlines');
  if (sp_appeals_section_timelines_deadlines) {
    gsap.fromTo('#sp-appeals-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_appeals_section_fees_costs = document.getElementById('sp-appeals-section-fees-costs');
  if (sp_appeals_section_fees_costs) {
    gsap.fromTo('#sp-appeals-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_appeals_list_risks_common_mistakes = document.getElementById('sp-appeals-list-risks-common-mistakes');
  if (sp_appeals_list_risks_common_mistakes) {
    gsap.from('#sp-appeals-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_appeals_section_diy_vs_professional_assistance = document.getElementById('sp-appeals-section-diy-vs-professional-assistance');
  if (sp_appeals_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sp-appeals-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_appeals_section_so_paulo_specific_context = document.getElementById('sp-appeals-section-so-paulo-specific-context');
  if (sp_appeals_section_so_paulo_specific_context) {
    gsap.fromTo('#sp-appeals-section-so-paulo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_appeals_section_what_our_clients_say = document.getElementById('sp-appeals-section-what-our-clients-say');
  if (sp_appeals_section_what_our_clients_say) {
    gsap.fromTo('#sp-appeals-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_appeals_section_frequently_asked_questions = document.getElementById('sp-appeals-section-frequently-asked-questions');
  if (sp_appeals_section_frequently_asked_questions) {
    gsap.fromTo('#sp-appeals-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_appeals_section_international_support = document.getElementById('sp-appeals-section-international-support');
  if (sp_appeals_section_international_support) {
    gsap.fromTo('#sp-appeals-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_appeals_list_our_credentials = document.getElementById('sp-appeals-list-our-credentials');
  if (sp_appeals_list_our_credentials) {
    gsap.from('#sp-appeals-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_appeals_list_related_services = document.getElementById('sp-appeals-list-related-services');
  if (sp_appeals_list_related_services) {
    gsap.from('#sp-appeals-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_appeals_section_youre_in_good_hands = document.getElementById('sp-appeals-section-youre-in-good-hands');
  if (sp_appeals_section_youre_in_good_hands) {
    gsap.fromTo('#sp-appeals-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_appeals_section_21 = document.getElementById('sp-appeals-section-21');
  if (sp_appeals_section_21) {
    gsap.fromTo('#sp-appeals-section-21', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_consular_form_consular_services_in_brazil_for_citizens = document.getElementById('sp-consular-form-consular-services-in-brazil-for-citizens');
  if (sp_consular_form_consular_services_in_brazil_for_citizens) {
    gsap.from('#sp-consular-form-consular-services-in-brazil-for-citizens input, #sp-consular-form-consular-services-in-brazil-for-citizens textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_consular_list_quick_facts = document.getElementById('sp-consular-list-quick-facts');
  if (sp_consular_list_quick_facts) {
    gsap.from('#sp-consular-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_consular_list_common_challenges_applicants_face = document.getElementById('sp-consular-list-common-challenges-applicants-face');
  if (sp_consular_list_common_challenges_applicants_face) {
    gsap.from('#sp-consular-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_consular_list_how_we_solve_these_challenges = document.getElementById('sp-consular-list-how-we-solve-these-challenges');
  if (sp_consular_list_how_we_solve_these_challenges) {
    gsap.from('#sp-consular-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_consular_section_service_overview = document.getElementById('sp-consular-section-service-overview');
  if (sp_consular_section_service_overview) {
    gsap.fromTo('#sp-consular-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_consular_form_who_is_this_service_for = document.getElementById('sp-consular-form-who-is-this-service-for');
  if (sp_consular_form_who_is_this_service_for) {
    gsap.from('#sp-consular-form-who-is-this-service-for input, #sp-consular-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_consular_list_required_documents = document.getElementById('sp-consular-list-required-documents');
  if (sp_consular_list_required_documents) {
    gsap.from('#sp-consular-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_consular_list_process = document.getElementById('sp-consular-list-process');
  if (sp_consular_list_process) {
    gsap.from('#sp-consular-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_consular_section_timelines_deadlines = document.getElementById('sp-consular-section-timelines-deadlines');
  if (sp_consular_section_timelines_deadlines) {
    gsap.fromTo('#sp-consular-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_consular_section_fees_costs = document.getElementById('sp-consular-section-fees-costs');
  if (sp_consular_section_fees_costs) {
    gsap.fromTo('#sp-consular-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_consular_list_risks_common_mistakes = document.getElementById('sp-consular-list-risks-common-mistakes');
  if (sp_consular_list_risks_common_mistakes) {
    gsap.from('#sp-consular-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_consular_section_diy_vs_professional_assistance = document.getElementById('sp-consular-section-diy-vs-professional-assistance');
  if (sp_consular_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sp-consular-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_consular_section_so_paulo_specific_context = document.getElementById('sp-consular-section-so-paulo-specific-context');
  if (sp_consular_section_so_paulo_specific_context) {
    gsap.fromTo('#sp-consular-section-so-paulo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_consular_section_what_our_clients_say = document.getElementById('sp-consular-section-what-our-clients-say');
  if (sp_consular_section_what_our_clients_say) {
    gsap.fromTo('#sp-consular-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_consular_section_frequently_asked_questions = document.getElementById('sp-consular-section-frequently-asked-questions');
  if (sp_consular_section_frequently_asked_questions) {
    gsap.fromTo('#sp-consular-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_consular_section_international_support = document.getElementById('sp-consular-section-international-support');
  if (sp_consular_section_international_support) {
    gsap.fromTo('#sp-consular-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_consular_list_our_credentials = document.getElementById('sp-consular-list-our-credentials');
  if (sp_consular_list_our_credentials) {
    gsap.from('#sp-consular-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_consular_list_related_services = document.getElementById('sp-consular-list-related-services');
  if (sp_consular_list_related_services) {
    gsap.from('#sp-consular-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_consular_section_youre_in_good_hands = document.getElementById('sp-consular-section-youre-in-good-hands');
  if (sp_consular_section_youre_in_good_hands) {
    gsap.fromTo('#sp-consular-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_consular_section_21 = document.getElementById('sp-consular-section-21');
  if (sp_consular_section_21) {
    gsap.fromTo('#sp-consular-section-21', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const criminal_records.html = document.getElementById('criminal-records.html');
  if (criminal_records.html) {
    gsap.fromTo('#criminal-records.html', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_criminalrecords_form_obtain_criminal_records_certificate_in_brazil = document.getElementById('sp-criminalrecords-form-obtain-criminal-records-certificate-in-brazil');
  if (sp_criminalrecords_form_obtain_criminal_records_certificate_in_brazil) {
    gsap.from('#sp-criminalrecords-form-obtain-criminal-records-certificate-in-brazil input, #sp-criminalrecords-form-obtain-criminal-records-certificate-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_criminalrecords_list_quick_facts = document.getElementById('sp-criminalrecords-list-quick-facts');
  if (sp_criminalrecords_list_quick_facts) {
    gsap.from('#sp-criminalrecords-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_criminalrecords_list_common_challenges_applicants_face = document.getElementById('sp-criminalrecords-list-common-challenges-applicants-face');
  if (sp_criminalrecords_list_common_challenges_applicants_face) {
    gsap.from('#sp-criminalrecords-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_criminalrecords_list_how_we_solve_these_challenges = document.getElementById('sp-criminalrecords-list-how-we-solve-these-challenges');
  if (sp_criminalrecords_list_how_we_solve_these_challenges) {
    gsap.from('#sp-criminalrecords-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_criminalrecords_section_service_overview = document.getElementById('sp-criminalrecords-section-service-overview');
  if (sp_criminalrecords_section_service_overview) {
    gsap.fromTo('#sp-criminalrecords-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_criminalrecords_form_who_is_this_service_for = document.getElementById('sp-criminalrecords-form-who-is-this-service-for');
  if (sp_criminalrecords_form_who_is_this_service_for) {
    gsap.from('#sp-criminalrecords-form-who-is-this-service-for input, #sp-criminalrecords-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_criminalrecords_list_required_documents = document.getElementById('sp-criminalrecords-list-required-documents');
  if (sp_criminalrecords_list_required_documents) {
    gsap.from('#sp-criminalrecords-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_criminalrecords_list_process = document.getElementById('sp-criminalrecords-list-process');
  if (sp_criminalrecords_list_process) {
    gsap.from('#sp-criminalrecords-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_criminalrecords_section_timelines_deadlines = document.getElementById('sp-criminalrecords-section-timelines-deadlines');
  if (sp_criminalrecords_section_timelines_deadlines) {
    gsap.fromTo('#sp-criminalrecords-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_criminalrecords_section_fees_costs = document.getElementById('sp-criminalrecords-section-fees-costs');
  if (sp_criminalrecords_section_fees_costs) {
    gsap.fromTo('#sp-criminalrecords-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_criminalrecords_list_risks_common_mistakes = document.getElementById('sp-criminalrecords-list-risks-common-mistakes');
  if (sp_criminalrecords_list_risks_common_mistakes) {
    gsap.from('#sp-criminalrecords-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_criminalrecords_section_diy_vs_professional_assistance = document.getElementById('sp-criminalrecords-section-diy-vs-professional-assistance');
  if (sp_criminalrecords_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sp-criminalrecords-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_criminalrecords_section_so_paulo_specific_context = document.getElementById('sp-criminalrecords-section-so-paulo-specific-context');
  if (sp_criminalrecords_section_so_paulo_specific_context) {
    gsap.fromTo('#sp-criminalrecords-section-so-paulo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_criminalrecords_section_what_our_clients_say = document.getElementById('sp-criminalrecords-section-what-our-clients-say');
  if (sp_criminalrecords_section_what_our_clients_say) {
    gsap.fromTo('#sp-criminalrecords-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_criminalrecords_section_frequently_asked_questions = document.getElementById('sp-criminalrecords-section-frequently-asked-questions');
  if (sp_criminalrecords_section_frequently_asked_questions) {
    gsap.fromTo('#sp-criminalrecords-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_criminalrecords_section_international_support = document.getElementById('sp-criminalrecords-section-international-support');
  if (sp_criminalrecords_section_international_support) {
    gsap.fromTo('#sp-criminalrecords-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_criminalrecords_list_our_credentials = document.getElementById('sp-criminalrecords-list-our-credentials');
  if (sp_criminalrecords_list_our_credentials) {
    gsap.from('#sp-criminalrecords-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_criminalrecords_list_related_services = document.getElementById('sp-criminalrecords-list-related-services');
  if (sp_criminalrecords_list_related_services) {
    gsap.from('#sp-criminalrecords-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_criminalrecords_section_youre_in_good_hands = document.getElementById('sp-criminalrecords-section-youre-in-good-hands');
  if (sp_criminalrecords_section_youre_in_good_hands) {
    gsap.fromTo('#sp-criminalrecords-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_criminalrecords_section_21 = document.getElementById('sp-criminalrecords-section-21');
  if (sp_criminalrecords_section_21) {
    gsap.fromTo('#sp-criminalrecords-section-21', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_extradition_form_extradition_assistance_in_brazil = document.getElementById('sp-extradition-form-extradition-assistance-in-brazil');
  if (sp_extradition_form_extradition_assistance_in_brazil) {
    gsap.from('#sp-extradition-form-extradition-assistance-in-brazil input, #sp-extradition-form-extradition-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_extradition_list_quick_facts = document.getElementById('sp-extradition-list-quick-facts');
  if (sp_extradition_list_quick_facts) {
    gsap.from('#sp-extradition-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_extradition_list_common_challenges_applicants_face = document.getElementById('sp-extradition-list-common-challenges-applicants-face');
  if (sp_extradition_list_common_challenges_applicants_face) {
    gsap.from('#sp-extradition-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_extradition_list_how_we_solve_these_challenges = document.getElementById('sp-extradition-list-how-we-solve-these-challenges');
  if (sp_extradition_list_how_we_solve_these_challenges) {
    gsap.from('#sp-extradition-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_extradition_section_service_overview = document.getElementById('sp-extradition-section-service-overview');
  if (sp_extradition_section_service_overview) {
    gsap.fromTo('#sp-extradition-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_extradition_form_who_is_this_service_for = document.getElementById('sp-extradition-form-who-is-this-service-for');
  if (sp_extradition_form_who_is_this_service_for) {
    gsap.from('#sp-extradition-form-who-is-this-service-for input, #sp-extradition-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_extradition_list_required_documents = document.getElementById('sp-extradition-list-required-documents');
  if (sp_extradition_list_required_documents) {
    gsap.from('#sp-extradition-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_extradition_list_process = document.getElementById('sp-extradition-list-process');
  if (sp_extradition_list_process) {
    gsap.from('#sp-extradition-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_extradition_section_timelines_deadlines = document.getElementById('sp-extradition-section-timelines-deadlines');
  if (sp_extradition_section_timelines_deadlines) {
    gsap.fromTo('#sp-extradition-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_extradition_section_fees_costs = document.getElementById('sp-extradition-section-fees-costs');
  if (sp_extradition_section_fees_costs) {
    gsap.fromTo('#sp-extradition-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_extradition_list_risks_common_mistakes = document.getElementById('sp-extradition-list-risks-common-mistakes');
  if (sp_extradition_list_risks_common_mistakes) {
    gsap.from('#sp-extradition-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_extradition_section_diy_vs_professional_assistance = document.getElementById('sp-extradition-section-diy-vs-professional-assistance');
  if (sp_extradition_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sp-extradition-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_extradition_section_so_paulo_specific_context = document.getElementById('sp-extradition-section-so-paulo-specific-context');
  if (sp_extradition_section_so_paulo_specific_context) {
    gsap.fromTo('#sp-extradition-section-so-paulo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_extradition_section_what_our_clients_say = document.getElementById('sp-extradition-section-what-our-clients-say');
  if (sp_extradition_section_what_our_clients_say) {
    gsap.fromTo('#sp-extradition-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_extradition_section_frequently_asked_questions = document.getElementById('sp-extradition-section-frequently-asked-questions');
  if (sp_extradition_section_frequently_asked_questions) {
    gsap.fromTo('#sp-extradition-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_extradition_section_international_support = document.getElementById('sp-extradition-section-international-support');
  if (sp_extradition_section_international_support) {
    gsap.fromTo('#sp-extradition-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_extradition_list_our_credentials = document.getElementById('sp-extradition-list-our-credentials');
  if (sp_extradition_list_our_credentials) {
    gsap.from('#sp-extradition-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_extradition_list_related_services = document.getElementById('sp-extradition-list-related-services');
  if (sp_extradition_list_related_services) {
    gsap.from('#sp-extradition-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_extradition_section_youre_in_good_hands = document.getElementById('sp-extradition-section-youre-in-good-hands');
  if (sp_extradition_section_youre_in_good_hands) {
    gsap.fromTo('#sp-extradition-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_extradition_section_21 = document.getElementById('sp-extradition-section-21');
  if (sp_extradition_section_21) {
    gsap.fromTo('#sp-extradition-section-21', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_north_form_discover_the_north_amazon_and_beyond = document.getElementById('sp-north-form-discover-the-north-amazon-and-beyond');
  if (sp_north_form_discover_the_north_amazon_and_beyond) {
    gsap.from('#sp-north-form-discover-the-north-amazon-and-beyond input, #sp-north-form-discover-the-north-amazon-and-beyond textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_north_list_quick_facts = document.getElementById('sp-north-list-quick-facts');
  if (sp_north_list_quick_facts) {
    gsap.from('#sp-north-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_north_list_common_challenges_applicants_face = document.getElementById('sp-north-list-common-challenges-applicants-face');
  if (sp_north_list_common_challenges_applicants_face) {
    gsap.from('#sp-north-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_north_list_how_we_solve_these_challenges = document.getElementById('sp-north-list-how-we-solve-these-challenges');
  if (sp_north_list_how_we_solve_these_challenges) {
    gsap.from('#sp-north-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_north_section_trip_overview = document.getElementById('sp-north-section-trip-overview');
  if (sp_north_section_trip_overview) {
    gsap.fromTo('#sp-north-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_north_form_who_is_this_trip_for = document.getElementById('sp-north-form-who-is-this-trip-for');
  if (sp_north_form_who_is_this_trip_for) {
    gsap.from('#sp-north-form-who-is-this-trip-for input, #sp-north-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_north_list_required_documents = document.getElementById('sp-north-list-required-documents');
  if (sp_north_list_required_documents) {
    gsap.from('#sp-north-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_north_list_booking_process = document.getElementById('sp-north-list-booking-process');
  if (sp_north_list_booking_process) {
    gsap.from('#sp-north-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_north_section_timelines_deadlines = document.getElementById('sp-north-section-timelines-deadlines');
  if (sp_north_section_timelines_deadlines) {
    gsap.fromTo('#sp-north-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_north_section_fees_costs = document.getElementById('sp-north-section-fees-costs');
  if (sp_north_section_fees_costs) {
    gsap.fromTo('#sp-north-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_north_list_risks_common_mistakes = document.getElementById('sp-north-list-risks-common-mistakes');
  if (sp_north_list_risks_common_mistakes) {
    gsap.from('#sp-north-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_north_section_diy_vs_professional_assistance = document.getElementById('sp-north-section-diy-vs-professional-assistance');
  if (sp_north_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sp-north-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_north_section_so_paulo_specific_context = document.getElementById('sp-north-section-so-paulo-specific-context');
  if (sp_north_section_so_paulo_specific_context) {
    gsap.fromTo('#sp-north-section-so-paulo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_north_section_what_our_clients_say = document.getElementById('sp-north-section-what-our-clients-say');
  if (sp_north_section_what_our_clients_say) {
    gsap.fromTo('#sp-north-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_north_section_frequently_asked_questions = document.getElementById('sp-north-section-frequently-asked-questions');
  if (sp_north_section_frequently_asked_questions) {
    gsap.fromTo('#sp-north-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_north_section_international_support = document.getElementById('sp-north-section-international-support');
  if (sp_north_section_international_support) {
    gsap.fromTo('#sp-north-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_north_list_our_credentials = document.getElementById('sp-north-list-our-credentials');
  if (sp_north_list_our_credentials) {
    gsap.from('#sp-north-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_north_list_related_services = document.getElementById('sp-north-list-related-services');
  if (sp_north_list_related_services) {
    gsap.from('#sp-north-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_north_section_youre_in_good_hands = document.getElementById('sp-north-section-youre-in-good-hands');
  if (sp_north_section_youre_in_good_hands) {
    gsap.fromTo('#sp-north-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_north_section_21 = document.getElementById('sp-north-section-21');
  if (sp_north_section_21) {
    gsap.fromTo('#sp-north-section-21', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const central_west.html = document.getElementById('central-west.html');
  if (central_west.html) {
    gsap.fromTo('#central-west.html', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_centralwest_form_wild_centralwest_pantanal_and_cerrado = document.getElementById('sp-centralwest-form-wild-centralwest-pantanal-and-cerrado');
  if (sp_centralwest_form_wild_centralwest_pantanal_and_cerrado) {
    gsap.from('#sp-centralwest-form-wild-centralwest-pantanal-and-cerrado input, #sp-centralwest-form-wild-centralwest-pantanal-and-cerrado textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_centralwest_list_quick_facts = document.getElementById('sp-centralwest-list-quick-facts');
  if (sp_centralwest_list_quick_facts) {
    gsap.from('#sp-centralwest-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_centralwest_list_common_challenges_applicants_face = document.getElementById('sp-centralwest-list-common-challenges-applicants-face');
  if (sp_centralwest_list_common_challenges_applicants_face) {
    gsap.from('#sp-centralwest-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_centralwest_list_how_we_solve_these_challenges = document.getElementById('sp-centralwest-list-how-we-solve-these-challenges');
  if (sp_centralwest_list_how_we_solve_these_challenges) {
    gsap.from('#sp-centralwest-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_centralwest_section_trip_overview = document.getElementById('sp-centralwest-section-trip-overview');
  if (sp_centralwest_section_trip_overview) {
    gsap.fromTo('#sp-centralwest-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_centralwest_form_who_is_this_trip_for = document.getElementById('sp-centralwest-form-who-is-this-trip-for');
  if (sp_centralwest_form_who_is_this_trip_for) {
    gsap.from('#sp-centralwest-form-who-is-this-trip-for input, #sp-centralwest-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_centralwest_list_required_documents = document.getElementById('sp-centralwest-list-required-documents');
  if (sp_centralwest_list_required_documents) {
    gsap.from('#sp-centralwest-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_centralwest_list_booking_process = document.getElementById('sp-centralwest-list-booking-process');
  if (sp_centralwest_list_booking_process) {
    gsap.from('#sp-centralwest-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_centralwest_section_timelines_deadlines = document.getElementById('sp-centralwest-section-timelines-deadlines');
  if (sp_centralwest_section_timelines_deadlines) {
    gsap.fromTo('#sp-centralwest-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_centralwest_section_fees_costs = document.getElementById('sp-centralwest-section-fees-costs');
  if (sp_centralwest_section_fees_costs) {
    gsap.fromTo('#sp-centralwest-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_centralwest_list_risks_common_mistakes = document.getElementById('sp-centralwest-list-risks-common-mistakes');
  if (sp_centralwest_list_risks_common_mistakes) {
    gsap.from('#sp-centralwest-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_centralwest_section_diy_vs_professional_assistance = document.getElementById('sp-centralwest-section-diy-vs-professional-assistance');
  if (sp_centralwest_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sp-centralwest-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_centralwest_section_so_paulo_specific_context = document.getElementById('sp-centralwest-section-so-paulo-specific-context');
  if (sp_centralwest_section_so_paulo_specific_context) {
    gsap.fromTo('#sp-centralwest-section-so-paulo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_centralwest_section_what_our_clients_say = document.getElementById('sp-centralwest-section-what-our-clients-say');
  if (sp_centralwest_section_what_our_clients_say) {
    gsap.fromTo('#sp-centralwest-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_centralwest_section_frequently_asked_questions = document.getElementById('sp-centralwest-section-frequently-asked-questions');
  if (sp_centralwest_section_frequently_asked_questions) {
    gsap.fromTo('#sp-centralwest-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_centralwest_section_international_support = document.getElementById('sp-centralwest-section-international-support');
  if (sp_centralwest_section_international_support) {
    gsap.fromTo('#sp-centralwest-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_centralwest_list_our_credentials = document.getElementById('sp-centralwest-list-our-credentials');
  if (sp_centralwest_list_our_credentials) {
    gsap.from('#sp-centralwest-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_centralwest_list_related_services = document.getElementById('sp-centralwest-list-related-services');
  if (sp_centralwest_list_related_services) {
    gsap.from('#sp-centralwest-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_centralwest_section_youre_in_good_hands = document.getElementById('sp-centralwest-section-youre-in-good-hands');
  if (sp_centralwest_section_youre_in_good_hands) {
    gsap.fromTo('#sp-centralwest-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_centralwest_section_21 = document.getElementById('sp-centralwest-section-21');
  if (sp_centralwest_section_21) {
    gsap.fromTo('#sp-centralwest-section-21', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_southeast_form_dynamic_southeast_cities_and_history = document.getElementById('sp-southeast-form-dynamic-southeast-cities-and-history');
  if (sp_southeast_form_dynamic_southeast_cities_and_history) {
    gsap.from('#sp-southeast-form-dynamic-southeast-cities-and-history input, #sp-southeast-form-dynamic-southeast-cities-and-history textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_southeast_list_quick_facts = document.getElementById('sp-southeast-list-quick-facts');
  if (sp_southeast_list_quick_facts) {
    gsap.from('#sp-southeast-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_southeast_list_common_challenges_applicants_face = document.getElementById('sp-southeast-list-common-challenges-applicants-face');
  if (sp_southeast_list_common_challenges_applicants_face) {
    gsap.from('#sp-southeast-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_southeast_list_how_we_solve_these_challenges = document.getElementById('sp-southeast-list-how-we-solve-these-challenges');
  if (sp_southeast_list_how_we_solve_these_challenges) {
    gsap.from('#sp-southeast-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_southeast_section_trip_overview = document.getElementById('sp-southeast-section-trip-overview');
  if (sp_southeast_section_trip_overview) {
    gsap.fromTo('#sp-southeast-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_southeast_form_who_is_this_trip_for = document.getElementById('sp-southeast-form-who-is-this-trip-for');
  if (sp_southeast_form_who_is_this_trip_for) {
    gsap.from('#sp-southeast-form-who-is-this-trip-for input, #sp-southeast-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_southeast_list_required_documents = document.getElementById('sp-southeast-list-required-documents');
  if (sp_southeast_list_required_documents) {
    gsap.from('#sp-southeast-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_southeast_list_booking_process = document.getElementById('sp-southeast-list-booking-process');
  if (sp_southeast_list_booking_process) {
    gsap.from('#sp-southeast-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_southeast_section_timelines_deadlines = document.getElementById('sp-southeast-section-timelines-deadlines');
  if (sp_southeast_section_timelines_deadlines) {
    gsap.fromTo('#sp-southeast-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_southeast_section_fees_costs = document.getElementById('sp-southeast-section-fees-costs');
  if (sp_southeast_section_fees_costs) {
    gsap.fromTo('#sp-southeast-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_southeast_list_risks_common_mistakes = document.getElementById('sp-southeast-list-risks-common-mistakes');
  if (sp_southeast_list_risks_common_mistakes) {
    gsap.from('#sp-southeast-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_southeast_section_diy_vs_professional_assistance = document.getElementById('sp-southeast-section-diy-vs-professional-assistance');
  if (sp_southeast_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sp-southeast-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_southeast_section_so_paulo_specific_context = document.getElementById('sp-southeast-section-so-paulo-specific-context');
  if (sp_southeast_section_so_paulo_specific_context) {
    gsap.fromTo('#sp-southeast-section-so-paulo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_southeast_section_what_our_clients_say = document.getElementById('sp-southeast-section-what-our-clients-say');
  if (sp_southeast_section_what_our_clients_say) {
    gsap.fromTo('#sp-southeast-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_southeast_section_frequently_asked_questions = document.getElementById('sp-southeast-section-frequently-asked-questions');
  if (sp_southeast_section_frequently_asked_questions) {
    gsap.fromTo('#sp-southeast-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_southeast_section_international_support = document.getElementById('sp-southeast-section-international-support');
  if (sp_southeast_section_international_support) {
    gsap.fromTo('#sp-southeast-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_southeast_list_our_credentials = document.getElementById('sp-southeast-list-our-credentials');
  if (sp_southeast_list_our_credentials) {
    gsap.from('#sp-southeast-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_southeast_list_related_services = document.getElementById('sp-southeast-list-related-services');
  if (sp_southeast_list_related_services) {
    gsap.from('#sp-southeast-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_southeast_section_youre_in_good_hands = document.getElementById('sp-southeast-section-youre-in-good-hands');
  if (sp_southeast_section_youre_in_good_hands) {
    gsap.fromTo('#sp-southeast-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_southeast_section_21 = document.getElementById('sp-southeast-section-21');
  if (sp_southeast_section_21) {
    gsap.fromTo('#sp-southeast-section-21', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_northeast_form_vibrant_northeast_beaches_and_culture = document.getElementById('sp-northeast-form-vibrant-northeast-beaches-and-culture');
  if (sp_northeast_form_vibrant_northeast_beaches_and_culture) {
    gsap.from('#sp-northeast-form-vibrant-northeast-beaches-and-culture input, #sp-northeast-form-vibrant-northeast-beaches-and-culture textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_northeast_list_quick_facts = document.getElementById('sp-northeast-list-quick-facts');
  if (sp_northeast_list_quick_facts) {
    gsap.from('#sp-northeast-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_northeast_list_common_challenges_applicants_face = document.getElementById('sp-northeast-list-common-challenges-applicants-face');
  if (sp_northeast_list_common_challenges_applicants_face) {
    gsap.from('#sp-northeast-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_northeast_list_how_we_solve_these_challenges = document.getElementById('sp-northeast-list-how-we-solve-these-challenges');
  if (sp_northeast_list_how_we_solve_these_challenges) {
    gsap.from('#sp-northeast-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_northeast_section_trip_overview = document.getElementById('sp-northeast-section-trip-overview');
  if (sp_northeast_section_trip_overview) {
    gsap.fromTo('#sp-northeast-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_northeast_form_who_is_this_trip_for = document.getElementById('sp-northeast-form-who-is-this-trip-for');
  if (sp_northeast_form_who_is_this_trip_for) {
    gsap.from('#sp-northeast-form-who-is-this-trip-for input, #sp-northeast-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_northeast_list_required_documents = document.getElementById('sp-northeast-list-required-documents');
  if (sp_northeast_list_required_documents) {
    gsap.from('#sp-northeast-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_northeast_list_booking_process = document.getElementById('sp-northeast-list-booking-process');
  if (sp_northeast_list_booking_process) {
    gsap.from('#sp-northeast-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_northeast_section_timelines_deadlines = document.getElementById('sp-northeast-section-timelines-deadlines');
  if (sp_northeast_section_timelines_deadlines) {
    gsap.fromTo('#sp-northeast-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_northeast_section_fees_costs = document.getElementById('sp-northeast-section-fees-costs');
  if (sp_northeast_section_fees_costs) {
    gsap.fromTo('#sp-northeast-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_northeast_list_risks_common_mistakes = document.getElementById('sp-northeast-list-risks-common-mistakes');
  if (sp_northeast_list_risks_common_mistakes) {
    gsap.from('#sp-northeast-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_northeast_section_diy_vs_professional_assistance = document.getElementById('sp-northeast-section-diy-vs-professional-assistance');
  if (sp_northeast_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sp-northeast-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_northeast_section_so_paulo_specific_context = document.getElementById('sp-northeast-section-so-paulo-specific-context');
  if (sp_northeast_section_so_paulo_specific_context) {
    gsap.fromTo('#sp-northeast-section-so-paulo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_northeast_section_what_our_clients_say = document.getElementById('sp-northeast-section-what-our-clients-say');
  if (sp_northeast_section_what_our_clients_say) {
    gsap.fromTo('#sp-northeast-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_northeast_section_frequently_asked_questions = document.getElementById('sp-northeast-section-frequently-asked-questions');
  if (sp_northeast_section_frequently_asked_questions) {
    gsap.fromTo('#sp-northeast-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_northeast_section_international_support = document.getElementById('sp-northeast-section-international-support');
  if (sp_northeast_section_international_support) {
    gsap.fromTo('#sp-northeast-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_northeast_list_our_credentials = document.getElementById('sp-northeast-list-our-credentials');
  if (sp_northeast_list_our_credentials) {
    gsap.from('#sp-northeast-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_northeast_list_related_services = document.getElementById('sp-northeast-list-related-services');
  if (sp_northeast_list_related_services) {
    gsap.from('#sp-northeast-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_northeast_section_youre_in_good_hands = document.getElementById('sp-northeast-section-youre-in-good-hands');
  if (sp_northeast_section_youre_in_good_hands) {
    gsap.fromTo('#sp-northeast-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_northeast_section_21 = document.getElementById('sp-northeast-section-21');
  if (sp_northeast_section_21) {
    gsap.fromTo('#sp-northeast-section-21', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_south_form_charming_south_wine_and_gauchos = document.getElementById('sp-south-form-charming-south-wine-and-gauchos');
  if (sp_south_form_charming_south_wine_and_gauchos) {
    gsap.from('#sp-south-form-charming-south-wine-and-gauchos input, #sp-south-form-charming-south-wine-and-gauchos textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_south_list_quick_facts = document.getElementById('sp-south-list-quick-facts');
  if (sp_south_list_quick_facts) {
    gsap.from('#sp-south-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_south_list_common_challenges_applicants_face = document.getElementById('sp-south-list-common-challenges-applicants-face');
  if (sp_south_list_common_challenges_applicants_face) {
    gsap.from('#sp-south-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_south_list_how_we_solve_these_challenges = document.getElementById('sp-south-list-how-we-solve-these-challenges');
  if (sp_south_list_how_we_solve_these_challenges) {
    gsap.from('#sp-south-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_south_section_trip_overview = document.getElementById('sp-south-section-trip-overview');
  if (sp_south_section_trip_overview) {
    gsap.fromTo('#sp-south-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_south_form_who_is_this_trip_for = document.getElementById('sp-south-form-who-is-this-trip-for');
  if (sp_south_form_who_is_this_trip_for) {
    gsap.from('#sp-south-form-who-is-this-trip-for input, #sp-south-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_south_list_required_documents = document.getElementById('sp-south-list-required-documents');
  if (sp_south_list_required_documents) {
    gsap.from('#sp-south-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_south_list_booking_process = document.getElementById('sp-south-list-booking-process');
  if (sp_south_list_booking_process) {
    gsap.from('#sp-south-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_south_section_timelines_deadlines = document.getElementById('sp-south-section-timelines-deadlines');
  if (sp_south_section_timelines_deadlines) {
    gsap.fromTo('#sp-south-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_south_section_fees_costs = document.getElementById('sp-south-section-fees-costs');
  if (sp_south_section_fees_costs) {
    gsap.fromTo('#sp-south-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_south_list_risks_common_mistakes = document.getElementById('sp-south-list-risks-common-mistakes');
  if (sp_south_list_risks_common_mistakes) {
    gsap.from('#sp-south-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_south_section_diy_vs_professional_assistance = document.getElementById('sp-south-section-diy-vs-professional-assistance');
  if (sp_south_section_diy_vs_professional_assistance) {
    gsap.fromTo('#sp-south-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_south_section_so_paulo_specific_context = document.getElementById('sp-south-section-so-paulo-specific-context');
  if (sp_south_section_so_paulo_specific_context) {
    gsap.fromTo('#sp-south-section-so-paulo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_south_section_what_our_clients_say = document.getElementById('sp-south-section-what-our-clients-say');
  if (sp_south_section_what_our_clients_say) {
    gsap.fromTo('#sp-south-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_south_section_frequently_asked_questions = document.getElementById('sp-south-section-frequently-asked-questions');
  if (sp_south_section_frequently_asked_questions) {
    gsap.fromTo('#sp-south-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_south_section_international_support = document.getElementById('sp-south-section-international-support');
  if (sp_south_section_international_support) {
    gsap.fromTo('#sp-south-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_south_list_our_credentials = document.getElementById('sp-south-list-our-credentials');
  if (sp_south_list_our_credentials) {
    gsap.from('#sp-south-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_south_list_related_services = document.getElementById('sp-south-list-related-services');
  if (sp_south_list_related_services) {
    gsap.from('#sp-south-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_south_section_youre_in_good_hands = document.getElementById('sp-south-section-youre-in-good-hands');
  if (sp_south_section_youre_in_good_hands) {
    gsap.fromTo('#sp-south-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

  const sp_south_section_21 = document.getElementById('sp-south-section-21');
  if (sp_south_section_21) {
    gsap.fromTo('#sp-south-section-21', {opacity: 0}, {opacity: 1, duration: 0.16000000000000003, ease: 'linear'});
  }

    })
    .catch(error => console.error('Error loading js_data.json:', error));
});
