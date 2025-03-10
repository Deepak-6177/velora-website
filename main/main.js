/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

/*===== Menu Show =====*/
/* Validate if `navToggle` exists */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

/*===== Menu Hide =====*/
/* Validate if `navClose` exists */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}



/*===== Hide Show =====*/
/* Validate if constant exists */

/*=============== IMAGE GALLERY ===============*/
function imgGallery() {
  const mainImg = document.querySelector('.details--img'); // Main image
  const smallImg = document.querySelectorAll('.details--small-img'); // Thumbnails

  smallImg.forEach((img) => {
    img.addEventListener('click', function () {
      mainImg.src = this.src;

      // Remove active class from all thumbnails
      smallImg.forEach((thumb) => thumb.classList.remove('active'));

      // Add active class to the clicked thumbnail
      this.classList.add('active');
    });
  });
}


/*=============== SWIPER CATEGORIES ===============*/
var swiperCategories = new Swiper(".categories--container", {
  spaceBetween: 24,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    350: {
    slidesPerView: 2,
    spaceBetween: 24,
  },
    768: {
    slidesPerView: 3,
    spaceBetween: 24,
  },
    992: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 24,
    },
    1400: {
      slidesPerView: 6,
      spaceBetween: 24,
    },
  },
});



/*=============== SWIPER PRODUCTS ===============*/
var swiperProducts = new Swiper(".new--container", {
  spaceBetween: 24,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});

/*=============== PRODUCTS TABS ===============*/
document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.accounts--tab'); // Dashboard tabs
  const tabContents = document.querySelectorAll('.tab--content'); // Content sections

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      // Remove active class from all tabs and contents
      tabs.forEach((t) => t.classList.remove('active-tab'));
      tabContents.forEach((content) => content.classList.remove('active-tab'));

      // Add active class to clicked tab and corresponding content
      const target = document.querySelector(tab.dataset.target); // Target content by data-target
      tab.classList.add('active-tab');
      if (target) {
        target.classList.add('active-tab');
      }
    });
  });
});







