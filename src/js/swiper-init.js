const swiper = new Swiper(".swiper-container", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  loop: true,
  speed: 1500,
});

const prevButton = document.getElementById("prevButton");
prevButton.addEventListener("click", () => {
  swiper.slidePrev();
});

const nextButton = document.getElementById("nextButton");
nextButton.addEventListener("click", () => {
  swiper.slideNext();
});
