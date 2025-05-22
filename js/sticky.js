document.addEventListener("DOMContentLoaded", function () {
    const mainNavbar = document.getElementById("mainNavbar");
    const stickyNavbar = document.getElementById("stickyNavbar");
  
    function handleStickyNavbar() {
      const navbarBottom = mainNavbar.offsetTop + mainNavbar.offsetHeight;
  
      if (window.scrollY >= navbarBottom) {
        stickyNavbar.style.display = "block";
      } else {
        stickyNavbar.style.display = "none";
      }
    }
  
    // Scroll listener
    window.addEventListener("scroll", handleStickyNavbar);
  
    // Optional: Call on load in case page is reloaded while already scrolled
    handleStickyNavbar();
  });
  