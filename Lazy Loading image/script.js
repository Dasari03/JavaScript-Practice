// window.addEventListener("load", () => {
//   console.log("fully loaded...");
// });

const targetImg = document.querySelector("img[data-src]");

// targetImg.addEventListener("click", () => console.log("target clicked...."));

const callback = function (entries, observer) {
  const [anyDamnName] = entries;
  if (!anyDamnName.isIntersecting) return;
  //   console.log("it is being intersecting...");

  console.log(anyDamnName);
  anyDamnName.target.src = anyDamnName.target.dataset.src;
  anyDamnName.target.addEventListener("load", () => {
    targetImg.classList.remove("blur");
  });
  imgObserver.unobserve(anyDamnName.target);
};

const imgObserver = new IntersectionObserver(callback, {
  root: null,
  threshold: 0.5,
  rootMargin: "250px",
});

imgObserver.observe(targetImg);
