const slider = document.getElementById('testimonialSlider');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const container = document.getElementById('sliderContainer');

  let index = 0;
  let autoplay;

  const cards = Array.from(slider.children);
  const totalCards = cards.length;
  const cardWidth = () => cards[0].offsetWidth + 20;

  // Clone cards for infinite loop
  cards.forEach(card => {
    const clone = card.cloneNode(true);
    slider.appendChild(clone);
  });

  function moveSlider() {
    slider.style.transition = 'transform 0.6s ease-in-out';
    slider.style.transform = `translateX(-${index * cardWidth()}px)`;
  }

  function scrollNext() {
    index++;
    moveSlider();
    if (index === totalCards) {
      setTimeout(() => {
        slider.style.transition = 'none';
        index = 0;
        slider.style.transform = 'translateX(0)';
      }, 700);
    }
  }

  function scrollPrev() {
    if (index === 0) {
      index = totalCards;
      slider.style.transition = 'none';
      slider.style.transform = `translateX(-${index * cardWidth()}px)`;
    }
    setTimeout(() => {
      index--;
      slider.style.transition = 'transform 0.6s ease-in-out';
      moveSlider();
    }, 10);
  }

  nextBtn.addEventListener('click', () => {
    scrollNext();
    resetAutoplay();
  });

  prevBtn.addEventListener('click', () => {
    scrollPrev();
    resetAutoplay();
  });

  function startAutoplay() {
    autoplay = setInterval(scrollNext, 3000);
  }

  function stopAutoplay() {
    clearInterval(autoplay);
  }

  function resetAutoplay() {
    stopAutoplay();
    startAutoplay();
  }

  container.addEventListener('mouseenter', stopAutoplay);
  container.addEventListener('mouseleave', startAutoplay);

  startAutoplay();