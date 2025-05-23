 // Function to animate counters
 function animateCounter(element, endValue, duration = 2000) {
  let startValue = 0;
  let increment = endValue / (duration / 16); // ~60fps
  let current = startValue;

  const counter = setInterval(() => {
    current += increment;
    if (current >= endValue) {
      element.textContent = formatValue(endValue);
      clearInterval(counter);
    } else {
      element.textContent = formatValue(Math.floor(current));
    }
  }, 16); // ~60 times per second
}

// Format function to handle values like 10k+, 80%+
function formatValue(value) {
  if (value >= 1000) return Math.floor(value / 1000) + "k+";
  if (value >= 80 && value < 100) return value + "%";
  return value + "+";
}

// Start animation when DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".single-counter-item h2");

  const values = [10000, 50, 40, 80]; // corresponding to 10k+, 50+, 40+, 80%+

  counters.forEach((counter, index) => {
    animateCounter(counter, values[index]);
  });
});