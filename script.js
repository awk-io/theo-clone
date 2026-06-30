(function() {
  // ----- navigation active-state management -----
  const navLinks = document.querySelectorAll('nav a');
  let activeLink = document.querySelector('nav a.active');

  if (!activeLink && navLinks.length) {
    activeLink = navLinks[0];
    activeLink.classList.add('active');
  }

  navLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
      if (activeLink) {
        activeLink.classList.remove('active');
      }
      this.classList.add('active');
    });

    link.addEventListener('mouseleave', function() {
      this.classList.remove('active');
      if (activeLink) {
        activeLink.classList.add('active');
      }
    });

    link.addEventListener('click', function(e) {
      e.preventDefault();

      if (activeLink) {
        activeLink.classList.remove('active');
      }

      this.classList.add('active');
      activeLink = this;
    });
  });

  // ----- social links subtle lift -----
  const socialLinks = document.querySelectorAll('.social a');
  socialLinks.forEach(el => {
    el.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-2px)';
    });
    el.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
})();
