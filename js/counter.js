document.addEventListener("DOMContentLoaded", function () {
    // Function to animate counter for each item
    function startCounter(counterElement, target, speed) {
      var counter = 0;
  
      function updateCounter() {
        if (counter < target) {
          counter++;
          counterElement.textContent = counter;
          setTimeout(updateCounter, speed); // Speed of counter increase (in ms)
        }
      }
  
      // Start counter animation
      updateCounter();
    }
  
    // Get all counter elements
    var counters = document.querySelectorAll('.counter');
  
    // Trigger counters for each section with their specific targets
    counters.forEach(function (counter) {
      var target = parseInt(counter.getAttribute('data-target')); // Get target from data-target
      var speed = 10; // Set the speed for all counters (you can adjust this individually if needed)
  
      // Start the counter animation
      startCounter(counter, target, speed);
    });
  });
  