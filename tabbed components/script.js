const btns = document.querySelector(".option_buttons");
const btn = document.querySelectorAll(".options");
const option1 = document.querySelector(".option_1");
const option2 = document.querySelector(".option_2");
const option3 = document.querySelector(".option_3");
const description1 = document.querySelector(".description_1");
const description2 = document.querySelector(".description_2");
const description3 = document.querySelector(".description_3");
const descriptionContationer = document.querySelector(".description_container");

// option2.addEventListener("click", () => {
//   description2.classList.toggle("display_active");
// });

//Toggle all the buttons. max show 3
// btns.addEventListener("click", (e) => {
//   if (e.target === option2) {
//     option1.classList.toggle("display_active");
//     option3.classList.toggle("display_active");
//     description2.classList.toggle("display_active");
//   } else if (e.target === option3) {
//     option1.classList.toggle("display_active");
//     option2.classList.toggle("display_active");
//     description3.classList.toggle("display_active");
//   } else if (e.target === option1) {
//     option2.classList.toggle("display_active");
//     option3.classList.toggle("display_active");
//     description1.classList.toggle("display_active");
//   }
// });

//Toggle button max show 1
btns.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target === option2) {
    description1.classList.remove("display_active");
    description3.classList.remove("display_active");
    description2.classList.add("display_active");
  } else if (e.target === option3) {
    description1.classList.remove("display_active");
    description2.classList.remove("display_active");
    description3.classList.add("display_active");
  } else if (e.target === option1) {
    description2.classList.remove("display_active");
    description3.classList.remove("display_active");
    description1.classList.add("display_active");
  }
});
