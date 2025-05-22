document.addEventListener("DOMContentLoaded", function () {
    const scrollTopBtn = document.querySelector(".scroll-top");
    const scrollTopIcon = document.querySelector(".scroll-top-icon");
    const header = document.querySelector("header");
  
    // Scroll to top smoothly
    scrollTopIcon.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  
    // Show/hide scroll button depending on header visibility
    window.addEventListener("scroll", function () {
      const headerBottom = header.getBoundingClientRect().bottom;
  
      // If header bottom is above viewport top, show the button
      if (headerBottom <= 0) {
        scrollTopBtn.classList.add("show");
      } else {
        scrollTopBtn.classList.remove("show");
      }
    });
  });