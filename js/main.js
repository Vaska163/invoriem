$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    dots: false,
    loop: true,
    items: 3,
    responsive: {
      0: {
        items: 1,
        margin: 32,
      },

      601: {
        items: 1,
      },

      1001: {
        items: 3,
        margin: 48,
      },
    },
  });
});

/* VIDEO*/

const videoBtn = document.querySelector("#video-btn");
const videoPicture = document.querySelector(".video__picture");
const videoWrapper = document.querySelector(".video");
const video = document.querySelector("#video-file");

videoWrapper.addEventListener("click", function () {
  if (video.paused) {
    videoPicture.classList.add("hidden");
    videoWrapper.classList.remove("video-overlay");
    videoBtn.classList.add("none");
    video.play();
  } else {
    // videoPicture.classList.remove("none");
    videoWrapper.classList.add("video-overlay");
    videoBtn.classList.remove("none");
    video.pause();
  }
});

/* MOBILE NAV */

const openNavbtn = document.querySelector("#openMobileNav");
const mobileNav = document.querySelector("#mobileNav");
const closeMobileNav = document.querySelector("#closeMobileNav");

openNavbtn.onclick = function () {
  mobileNav.classList.remove("none");
};

closeMobileNav.onclick = function () {
  mobileNav.classList.add("none");
};
