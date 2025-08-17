document.addEventListener('DOMContentLoaded', function () {
  
  
  // 页面载入时淡入
  document.body.classList.add('fade-in');

  // 点击链接时淡出
  document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (href && !href.startsWith("#")) { // 确保不是锚点链接
        e.preventDefault();
        document.body.classList.remove("fade-in");
        document.body.classList.add("fade-out");
        setTimeout(() => {
          window.location.href = href;
        }, 200); // 1 秒后跳转
      }
    });
  });


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


//Contact us form 

const contactForm = document.getElementById('contact-form');
if(contactForm){
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const res = await fetch(contactForm.action, {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    });
    if(res.ok){
      alert("Message sent!");
      contactForm.reset();
    } else {
      alert("Failed to send.");
    }
  });
}



});
