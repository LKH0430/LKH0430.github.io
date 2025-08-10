document.addEventListener('DOMContentLoaded', function () {
  // 导航菜单切换代码
  const navToggle = document.getElementById('nav-toggle');
  const siteNav = document.getElementById('site-nav');

  navToggle.addEventListener('click', () => {
    siteNav.classList.toggle('show');
  });

  siteNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('show');
    });
  });

  // 滚动隐藏/显示头部
  let lastScrollY = window.pageYOffset;
  const header = document.querySelector('.site-header');

  window.addEventListener('scroll', () => {
    const currentScrollY = window.pageYOffset;
    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      header.classList.add('hidden');
    } else {
      header.classList.remove('hidden');
    }
    lastScrollY = currentScrollY;
  });

  // 图片弹出层
  const images = document.querySelectorAll(".gallery-img");
  const lightbox = document.getElementById("lightbox-overlay");
  const lightboxImg = lightbox.querySelector("img");

  images.forEach(img => {
    img.addEventListener("click", function () {
      lightbox.style.display = "flex";
      lightboxImg.src = this.src;
      lightboxImg.alt = this.alt;
    });
  });

  lightbox.addEventListener("click", function () {
    lightbox.style.display = "none";
  });
});
