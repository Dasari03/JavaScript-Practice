"use strict";

const sliders = document.querySelector(".sliders");
const slider = document.querySelectorAll(".slider");
const btnRight = document.querySelector(".btn-right");
const btnLeft = document.querySelector(".btn-left");

const lengthOfSlider = slider.length - 1;
console.log(lengthOfSlider);
let currSlide = 0;

slider.forEach((sl, i) => {
  sl.style.transform = `translateX(${i} * 100%)`;
});
//Next Right -> button logic
btnRight.addEventListener("click", () => {
  if (currSlide === lengthOfSlider) {
    currSlide = 0;
    //0 100 200 300
  } else {
    currSlide++;
  }
  slider.forEach((sl, i) => {
    //-100, 0, 100, 200
    sl.style.transform = `translateX(${i - currSlide * 100}%)`;
  });
});

//Next Left -> button logic
btnLeft.addEventListener("click", () => {
  if (currSlide === 0) {
    currSlide = lengthOfSlider;
    //0 100 200 300
    // -300, -200, -100, 0
  } else {
    currSlide--;
  }
  slider.forEach((sl, i) => {
    // 0, 100, 200, 300

    //-200 -100 0 100
    //-100 0 100 200
    sl.style.transform = `translateX(${i - currSlide * 100}%)`;
  });
});
