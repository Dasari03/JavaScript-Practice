const targetEl = document.querySelector("h2");

const alertFunc = () => {
  alert(`you have entered the target element....`);
};

targetEl.addEventListener("mouseenter", alertFunc);

setTimeout(() => {
  targetEl.removeEventListener("mouseenter", alertFunc);
}, 3000);
