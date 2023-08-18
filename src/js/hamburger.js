const toggleButton = document.getElementById("toggleButton");
const toggleTarget = document.getElementById("toggleTarget");

let currentIndex = 0;
let isToggled = false;

toggleButton.addEventListener("click", () => {
  isToggled = !isToggled;
  toggleTarget.style.transition = "right 0.3s ease-in-out";
  toggleTarget.style.right = isToggled ? "0" : "-235px";
});

window.addEventListener("resize", () => {
  if (!isToggled && window.innerWidth >= 800) {
    toggleTarget.style.right = "0";
    toggleTarget.style.transition = "right 0s ease-in";
  } else if (!isToggled && window.innerWidth < 800) {
    toggleTarget.style.right = "-235px";
  }
});
