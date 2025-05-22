// Mobile Navbar Responsive

document.addEventListener("DOMContentLoaded", function () {
  const mobileMenu = document.getElementById("mobileMenu");
  const togglers = document.querySelectorAll("[data-toggler]");
  const stickyNavbar = document.getElementById("stickyNavbar");
  const mainNavbar = document.getElementById("mainNavbar");

  // Handle toggle button click
  togglers.forEach((toggler) => {
    toggler.addEventListener("click", () => {
      // Toggle menu
      mobileMenu.classList.toggle("show");

      // Toggle active class on all togglers (top + sticky)
      togglers.forEach((btn) => btn.classList.toggle("active"));
    });
  });

  // Handle scroll to show sticky navbar after mainNavbar
  function handleStickyNavbar() {
    const navbarBottom = mainNavbar.offsetTop + mainNavbar.offsetHeight;
    if (window.scrollY >= navbarBottom) {
      stickyNavbar.style.display = "block";
    } else {
      stickyNavbar.style.display = "none";
    }
  }

  window.addEventListener("scroll", handleStickyNavbar);
  handleStickyNavbar(); // run once on load
});

// Sticky Navbar


// Dropdown toggle
const dropdownToggles = document.querySelectorAll(".nav-link.dropdown-toggle");

dropdownToggles.forEach((toggle) => {
  toggle.addEventListener("click", function (e) {
    e.preventDefault();
    const parent = this.closest(".dropdown");
    parent.classList.toggle("show");

    // Close others if needed
    document.querySelectorAll(".nav-item.dropdown").forEach((item) => {
      if (item !== parent) {
        item.classList.remove("show");
      }
    });
  });
});


// Animate Progress Bars on Scroll
const progressBars = document.querySelectorAll(".fill-bar");
const options = {
  threshold: 0.5,
};
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const target = entry.target;
      const width = target.getAttribute("data-width");
      target.style.width = width;
    }
  });
}, options);

progressBars.forEach((bar) => observer.observe(bar));


// Scroll To Top Js 

