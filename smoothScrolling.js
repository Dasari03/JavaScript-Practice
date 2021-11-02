const scrollFrom = document.querySelector(".smooth-scroll-from");

const scrollTo = document.querySelector(".smooth-scroll-to");

scrollFrom.addEventListener("click", (e) => {
  const buttonDomRect = scrollFrom.getBoundingClientRect();
  console.log(buttonDomRect);

  const targetButton = scrollTo.getBoundingClientRect();
  console.log(targetButton);

  console.log(window.pageXOffset, window.pageYOffset);

  console.log(document.documentElement.clientHeight);

  console.log(document.documentElement.clientWidth);

  //   console.log(`targetButton top: ${targetButton.top}`);

  //   window.scrollTo(x-coord, y-coord)
  //   window.scrollTo(
  //     targetButton.left + window.pageXOffset,
  //     targetButton.top + window.pageYOffset
  //   );
  //   console.log(`targetButton top: ${targetButton.top}`);

  //window.scrollTo(options)
  //   window.scrollTo({
  //     left: targetButton.left + window.pageXOffset,
  //     top: targetButton.top + window.pageYOffset,
  //     behavior: "smooth",
  //   });

  //modern way
  scrollTo.scrollIntoView({ behavior: "smooth" });
});
