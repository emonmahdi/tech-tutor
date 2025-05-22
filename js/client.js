document.addEventListener("DOMContentLoaded", function () {
  const track = document.getElementById("sliderTrack");
  let items = document.querySelectorAll(".logo-item");
  let position = 0;
  let itemWidth = items[0].offsetWidth;
  const visibleItems = 6;

  // Clone the first few items for smooth infinite loop
  for (let i = 0; i < visibleItems; i++) {
    const clone = items[i].cloneNode(true);
    track.appendChild(clone);
  }

  // Update item width when screen resizes
  function updateItemWidth() {
    items = document.querySelectorAll(".logo-item"); // reselect in case of DOM updates
    itemWidth = items[0].offsetWidth;
    track.style.transition = 'none';
    track.style.transform = `translateX(-${position * itemWidth}px)`;
  }

  // Call initially and on resize
  updateItemWidth();
  window.addEventListener('resize', updateItemWidth);

  // Slide logic
  function slide(dir) {
    position += dir;
    track.style.transition = 'transform 0.5s ease';
    track.style.transform = `translateX(-${position * itemWidth}px)`;

    setTimeout(() => {
      if (position >= items.length) {
        track.style.transition = 'none';
        position = 0;
        track.style.transform = `translateX(-${position * itemWidth}px)`;
      }
      if (position < 0) {
        track.style.transition = 'none';
        position = items.length - 1;
        track.style.transform = `translateX(-${position * itemWidth}px)`;
      }
    }, 600);
  }

  // Auto-slide every 3s
  let interval = setInterval(() => slide(1), 3000);

  // Reset interval when manually sliding
  function resetInterval() {
    clearInterval(interval);
    interval = setInterval(() => slide(1), 3000);
  }

  // Manual navigation
  const leftBtn = document.querySelector(".client-slider-btn.left");
  const rightBtn = document.querySelector(".client-slider-btn.right");

  if (leftBtn && rightBtn) {
    leftBtn.addEventListener("click", () => {
      slide(-1);
      resetInterval();
    });

    rightBtn.addEventListener("click", () => {
      slide(1);
      resetInterval();
    });
  }
});
