
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const menuClose = document.getElementById("menu-close");
  const allLinks = document.querySelectorAll(".nav-link");

  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.add("open");
  });

  menuClose.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
  });

  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".custom-navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  });

  // Close menu when a link is clicked
  document.querySelectorAll(".mobile-menu .nav-link").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
    });
  });

  // Update Active State on Click
  allLinks.forEach((link) => {
    link.addEventListener("click", function () {
      allLinks.forEach((l) => l.classList.remove("active"));
      document
        .querySelectorAll(`a[href='${this.getAttribute("href")}']`)
        .forEach((item) => item.classList.add("active"));
      mobileMenu.classList.remove("open"); // close menu on click (mobile)
    });
  });


window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".custom-navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  