"use strict";
//html, JavaScript
document.addEventListener("DOMContentLoaded", (e) => {
  console.log("HTML and DOM tree is ready", e);
});

//including css category
window.addEventListener("load", (e) => {
  console.log("Page fully ready... CSS inclusive...", e);
});

window.addEventListener("beforeunload", (e) => {
  //   e.preventDefault();
  console.log(e);
  e.returnValue = "";
});
