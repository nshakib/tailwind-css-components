document.addEventListener('DOMContentLoaded', function () {
      const headers = document.querySelectorAll('.accordion-header');
      headers.forEach(header => {
        header.addEventListener('click', function () {
          const content = this.nextElementSibling;
          content.classList.toggle('active');
        });
      });
    });

// Alert
document.addEventListener('DOMContentLoaded', function () {
    const closeButtons = document.querySelectorAll('[role="button"]');
    closeButtons.forEach(button => {
      button.addEventListener('click', function () {
        this.parentElement.parentElement.style.display = 'none';
      });
    });
  });