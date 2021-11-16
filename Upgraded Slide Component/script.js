"use strict";

const sliders = document.querySelector(".sliders");
const slider = document.querySelectorAll(".slider");
const btnRight = document.querySelector(".btn-right");
const btnLeft = document.querySelector(".btn-left");
const dotsContainer = document.querySelector(".dots-container");

const lengthOfSlider = slider.length - 1;
console.log(lengthOfSlider);
let currSlide = 0;
//simplified function
const goToSlide = (targetSlide) => {
  slider.forEach((sl, i) => {
    sl.style.transform = `translateX(${i - targetSlide * 100}%)`;
  });
};
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
  goToSlide(currSlide);
  dotActivate(currSlide);
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

  goToSlide(currSlide);
  dotActivate(currSlide);
});

// Slide Next Function with KeyBoard
document.addEventListener("keydown", (e) => {
  console.log(e);
  if (e.key === "ArrowRight") {
    if (currSlide === lengthOfSlider) {
      currSlide = 0;
      //0 100 200 300
    } else {
      currSlide++;
    }

    goToSlide(currSlide);
    dotActivate(currSlide);
  } else if (e.key === "ArrowLeft") {
    if (currSlide === 0) {
      currSlide = lengthOfSlider;
    } else {
      currSlide--;
    }
    goToSlide(currSlide);
    dotActivate(currSlide);
  }
});

const createDots = () => {
  slider.forEach((_, i) => {
    dotsContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dot activate" data-slide="${i}"></button>`
    );
  });
};

createDots();

dotsContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("dot")) {
    const destinationSlide = e.target.dataset.slide;
    console.log(destinationSlide);
    goToSlide(destinationSlide);
    dotActivate(destinationSlide);
  }
});

const dotActivate = (currSlide) => {
  document.querySelectorAll(".dot").forEach((dot) => {
    dot.classList.remove("activate");

    document
      .querySelector(`.dot[data-slide="${currSlide}"]`)
      .classList.add("activate");
  });
};
dotActivate(currSlide);
