const showProjects = document.getElementById("showProjects");
const hiddenOurProjects = document.getElementById("hiddenOurProjects");
const gradient = document.getElementById("gradient");

let isActive = false;
let gradientToggle = false;

showProjects.addEventListener("click", () => {
  if (isActive) {
    hiddenOurProjects.classList.remove("projects-wrapperOne");
    hiddenOurProjects.classList.add("projects-wrapperTwo");
    showProjects.textContent = "Rozwiń";

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", "ml-2");
    svg.setAttribute("width", "16");
    svg.setAttribute("height", "17");
    svg.setAttribute("viewBox", "0 0 16 17");
    svg.setAttribute("fill", "none");

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute(
      "d",
      "M16 8.49529L15.1043 7.59959L8.63642 14.0769L8.63642 0.5L7.36358 0.5L7.36358 14.0675L0.895699 7.59959L9.54553e-08 8.49529L8.00471 16.5L16 8.49529Z"
    );
    path.setAttribute("fill", "#111111");

    svg.appendChild(path);
    showProjects.appendChild(svg);
  } else {
    hiddenOurProjects.classList.remove("projects-wrapperTwo");
    hiddenOurProjects.classList.add("projects-wrapperOne");
    showProjects.textContent = "Zwiń";

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", "ml-2");
    svg.setAttribute("width", "16");
    svg.setAttribute("height", "17");
    svg.setAttribute("viewBox", "0 0 16 17");
    svg.setAttribute("fill", "none");
    svg.setAttribute("style", "transform: rotate(180deg)");

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute(
      "d",
      "M16 8.49529L15.1043 7.59959L8.63642 14.0769L8.63642 0.5L7.36358 0.5L7.36358 14.0675L0.895699 7.59959L9.54553e-08 8.49529L8.00471 16.5L16 8.49529Z"
    );
    path.setAttribute("fill", "#111111");

    svg.appendChild(path);
    showProjects.appendChild(svg);
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
