const stickyBegins = document.querySelector(".sticky-begins");
const navigation = document.querySelector("nav");

// const targetCoords = stickyBegins.getBoundingClientRect();

// console.log(targetCoords);

// window.addEventListener("scroll", () => {
//   console.log(window.scrollY);
//   if (window.scrollY >= targetCoords.top) {
//     navigation.classList.add("sticky");
//   } else navigation.classList.remove("sticky");
// });

//Sticky navigation using Intersection Observer API

// const obsCallback = (entries, observer) => {
//   entries.forEach((entry) => {
//     console.log(entry);
//   });
// };

// const obsOptions = {
//   root: null,
//   threshold: 0.1,
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(stickyBegins);

const stickyCallBack = (entries) => {
  //   const entry1 = entries[0];

  entries.forEach((entry) => {
    if (entry.isIntersecting === true) {
      navigation.classList.add("sticky");
    } else {
      navigation.classList.remove("sticky");
    }
  });
};

const stickyObserver = new IntersectionObserver(stickyCallBack, {
  root: null,
  threshold: 0,
  rootMargin: "-30px",
});

stickyObserver.observe(stickyBegins);
