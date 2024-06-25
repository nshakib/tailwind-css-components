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

  // Dropdown
  // // JavaScript to toggle dropdown visibility
  // const dropdownToggle = document.getElementById('dropdown-toggle');
  //   const dropdownMenu = document.getElementById('dropdown-menu');

  //   dropdownToggle.addEventListener('click', function() {
  //     dropdownMenu.classList.toggle('hidden');
  //   });

  //   // Close dropdown when clicking outside
  //   document.addEventListener('click', function(event) {
  //     if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
  //       dropdownMenu.classList.add('hidden');
  //     }
  //   });