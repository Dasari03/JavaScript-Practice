//rgb(255,255,255)

const randNumber = () => Math.trunc(Math.random() * 256);

// console.log(`rgb(${randNumberR},${randNumberG},${randNumberB})`);
// const randomRGB = () => {
//   return `rgb(${randNumberR},${randNumberG},${randNumberB})`;
// };

// const targetH2 = document.querySelector("h2");
// const targetSection = document.querySelector("section");

// document.querySelector("h2").addEventListener("click", (e) => {
//   targetH2.style.color = `rgb(${randNumber()},${randNumber()},${randNumber()})`;
//   console.log(e);
//   console.log(e.target);
//   console.log(e.currentTarget);
// });
// document.querySelector("section").addEventListener("click", (e) => {
//   targetSection.style.color = `rgb(${randNumber()},${randNumber()},${randNumber()})`;
//   console.log(e);
//   console.log(e.target);
//   console.log(e.currentTarget);
// });

//Smooth Transition by taking advantage of bubbling.
document.querySelector("#sectionBegin").addEventListener("click", (e) => {
  //   console.log("clicked");
  //   console.log(e.target);

  const id = e.target.getAttribute("href");
  console.log(id);
  if (e.target.classList.contains("smooth-scroll-from")) {
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
