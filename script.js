document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.getElementById('nav-toggle');
  const siteNav = document.getElementById('site-nav');

  // Toggle navigation menu
  navToggle.addEventListener('click', () => {
    siteNav.classList.toggle('show');
  });

  // Close menu when clicking a link (on mobile)
  siteNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('show');
    });
  });

  // Contact form handling
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('This is a demo form. To send messages you need a backend.\n这是示范表单，发送需要后端支持。');
    form.reset();
  });
});
