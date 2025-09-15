document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelector(".nav-links");
  const hamburger = document.querySelector(".hamburger");
  const links = document.querySelectorAll(".nav-links li a");

  // Toggle mobile navigation
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("nav-active");
    hamburger.classList.toggle("toggle");
  });

  // Smooth scrolling for navigation links
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const href = this.getAttribute("href");
      const offsetTop = document.querySelector(href).offsetTop;

      scroll({
        top: offsetTop - 70, // Adjust for fixed header height
        behavior: "smooth",
      });

      // Close mobile nav after click
      if (navLinks.classList.contains("nav-active")) {
        navLinks.classList.remove("nav-active");
        hamburger.classList.remove("toggle");
      }
    });
  });
});
