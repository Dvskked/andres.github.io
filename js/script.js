/* ================================================================
   PORTFOLIO — ANDRES FORERO
   JavaScript: Menu, Scroll Reveal, Skills, Counters, Form
   ================================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ----------------------------------------------------------
     1. MOBILE MENU
  ---------------------------------------------------------- */
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = navMenu.querySelectorAll('.header__link');

  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('open');
    navMenu.classList.toggle('open');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('open');
      navMenu.classList.remove('open');
    });
  });

  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
      menuToggle.classList.remove('open');
      navMenu.classList.remove('open');
    }
  });

  /* ----------------------------------------------------------
     2. HEADER SCROLL EFFECT + ACTIVE LINK
  ---------------------------------------------------------- */
  const header = document.getElementById('header');
  const sections = document.querySelectorAll('.section, .hero');

  function updateHeader() {
    header.classList.toggle('scrolled', window.scrollY > 40);
  }

  function updateActiveLink() {
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      if (window.scrollY >= top) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', () => {
    updateHeader();
    updateActiveLink();
  }, { passive: true });

  updateHeader();
  updateActiveLink();

  /* ----------------------------------------------------------
     3. SCROLL REVEAL (IntersectionObserver)
  ---------------------------------------------------------- */
  const revealElements = document.querySelectorAll('.anim-reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  /* ----------------------------------------------------------
     4. SKILL BARS ANIMATION
  ---------------------------------------------------------- */
  const skillFills = document.querySelectorAll('.skill__fill');

  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target;
        const target = fill.getAttribute('data-width');
        fill.style.width = target + '%';
        skillObserver.unobserve(fill);
      }
    });
  }, { threshold: 0.3 });

  skillFills.forEach(fill => skillObserver.observe(fill));

  /* ----------------------------------------------------------
     5. STAT COUNTER ANIMATION
  ---------------------------------------------------------- */
  const statNumbers = document.querySelectorAll('.about__stat-number');

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-count'));
        animateCounter(el, target);
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(num => counterObserver.observe(num));

  function animateCounter(el, target) {
    let current = 0;
    const step = Math.max(1, Math.floor(target / 30));
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      el.textContent = current + '+';
    }, 35);
  }

  /* ----------------------------------------------------------
     6. CV DOWNLOAD
  ---------------------------------------------------------- */
  const btnCV = document.getElementById('btn-cv');
  if (btnCV) {
    btnCV.addEventListener('click', () => {
      const link = document.createElement('a');
      link.href = 'cv/Andres_Forero_CV2026.pdf';
      link.download = 'Andres_Forero_CV2026.pdf';
      link.click();
    });
  }

  /* ----------------------------------------------------------
     7. CONTACT FORM (Simulated)
  ---------------------------------------------------------- */
  const contactForm = document.getElementById('portfolioContactForm');
  const formStatus = document.getElementById('formStatus');
  const btnEnviar = document.getElementById('btnEnviar');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      btnEnviar.disabled = true;
      btnEnviar.querySelector('span').textContent = 'Enviando...';

      setTimeout(() => {
        formStatus.textContent = 'Mensaje enviado correctamente. ¡Gracias por contactarme!';
        formStatus.classList.remove('hidden');
        formStatus.classList.add('success');

        contactForm.reset();
        btnEnviar.disabled = false;
        btnEnviar.querySelector('span').textContent = 'Enviar mensaje';

        setTimeout(() => {
          formStatus.classList.add('hidden');
          formStatus.classList.remove('success');
        }, 4000);
      }, 1500);
    });
  }

});
