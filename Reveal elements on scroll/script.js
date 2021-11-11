// window.addEventListener("load", () => {
//   console.log("fully loaded...");
// });

const targetImg = document.querySelector(".image");

// targetImg.addEventListener("click", () => console.log("target clicked...."));

const callback = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  console.log("it is being intersecting...");
  targetImg.classList.remove("blur");
};

const imgObserver = new IntersectionObserver(callback, {
  root: null,
  threshold: 0.5,
  //   rootMargin: "200px",
});

imgObserver.observe(targetImg);
// imgObserver.unobserve(targetImg);
