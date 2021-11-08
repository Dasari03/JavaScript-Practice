const stickyBegins = document.querySelector(".sticky-begins");
const navigation = document.querySelector("nav");

const targetCoords = stickyBegins.getBoundingClientRect();

console.log(targetCoords);

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY >= targetCoords.top) {
    navigation.classList.add("sticky");
  } else navigation.classList.remove("sticky");
});
