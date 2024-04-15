document.addEventListener('DOMContentLoaded', () => {
    "use strict";
  
    // Hero Header carousel
    $(".header-carousel").owlCarousel({
        animateOut: 'slideOutDown',
        items: 1,
        autoplay: true,
        smartSpeed: 1000,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });
  
  });

  document.addEventListener('DOMContentLoaded', () => {
    "use strict";
  
    window.onpageshow = function(event) {
      if (event.persisted) {
        location.reload(); // Reload the page when navigated back to
      }
    };
  
  });