let menu = document.querySelector('#menu-bars');
let menuBar = document.querySelector('.menu');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    menuBar.classList.toggle('active');
};



var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });