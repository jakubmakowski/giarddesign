const image = document.querySelector(".parallax-background img");
new simpleParallax(image, {
  scale: 1.5,
  orientation: "down",
  delay: 0.6,
  overflow: true,
});
