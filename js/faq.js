function toggleFAQ(clickedItem) {
    const allItems = document.querySelectorAll('.faq-item');
  
    allItems.forEach(item => {
      const wrapper = item.querySelector('.faq-answer-wrapper');
      const answer = item.querySelector('.faq-answer');
      const title = item.querySelector('.faq-title');
      const icon = item.querySelector('.faq-icon');
  
      if (item !== clickedItem) {
        wrapper.style.height = '0px';
        answer.classList.remove('show');
        title.classList.remove('active-title');
        icon.classList.replace('fa-angle-down', 'fa-plus');
      }
    });
  
    const wrapper = clickedItem.querySelector('.faq-answer-wrapper');
    const answer = clickedItem.querySelector('.faq-answer');
    const title = clickedItem.querySelector('.faq-title');
    const icon = clickedItem.querySelector('.faq-icon');
  
    const isOpen = answer.classList.contains('show');
    const isTitleOpen = answer.classList.contains('show');
  
    if (isOpen && isTitleOpen) {
      wrapper.style.height = '0px';
      answer.classList.remove('show');
      title.classList.remove('active-title');
      icon.classList.replace('fa-angle-down', 'fa-plus');
    } else {
      const answerHeight = answer.scrollHeight;
      wrapper.style.height = answerHeight + 'px';
      answer.classList.add('show');
      title.classList.add('active-title');
      icon.classList.replace('fa-plus', 'fa-angle-down');
    }
  }
  
  // Auto open the first FAQ on page load
  document.addEventListener('DOMContentLoaded', () => {
    const firstFAQ = document.querySelector('.faq-item');
    if (firstFAQ) {
      const wrapper = firstFAQ.querySelector('.faq-answer-wrapper');
      const answer = firstFAQ.querySelector('.faq-answer');
      const title = firstFAQ.querySelector('.faq-title');
      const icon = firstFAQ.querySelector('.faq-icon');
  
      wrapper.style.height = answer.scrollHeight + 'px';
      answer.classList.add('show');
      title.classList.add('active-title');
      icon.classList.replace('fa-plus', 'fa-angle-down');
    }
  });
  