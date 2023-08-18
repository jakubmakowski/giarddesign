const showProjects = document.getElementById("showProjects");
const hiddenOurProjects = document.getElementById("hiddenOurProjects");
const gradient = document.getElementById("gradient");

let isActive = false;
let gradientToggle = false;

showProjects.addEventListener("click", () => {

  if (isActive) {
    hiddenOurProjects.classList.remove("projects-wrapperOne");
    hiddenOurProjects.classList.add("projects-wrapperTwo");
  } else {
    hiddenOurProjects.classList.remove("projects-wrapperTwo");
    hiddenOurProjects.classList.add("projects-wrapperOne");
  }

  if (gradientToggle) {
    gradient.classList.remove("gradient-transition");
    gradient.classList.add("gradient-transitionTwo");
  } else {
    gradient.classList.remove("gradient-transitionTwo");
    gradient.classList.add("gradient-transition");
  }

  gradientToggle = !gradientToggle;
  isActive = !isActive;
});