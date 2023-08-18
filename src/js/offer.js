const toggleOffer = document.getElementById("toggleOffer");
const dropdownList = document.getElementById("dropdownList");
const sections = [
  { trigger: "textProjects", content: "hiddenProjects" },
  { trigger: "textVisualizations", content: "hiddenVisualizations" },
  { trigger: "textRealizations", content: "hiddenRealizations" },
];

let isDropdownVisible = false;

toggleOffer.addEventListener("click", () => {
  dropdownList.classList.toggle("hidden");
  isDropdownVisible = !isDropdownVisible;
});

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!dropdownList.contains(target) && target !== toggleOffer) {
    dropdownList.classList.add("hidden");
    isDropdownVisible = false;
  }
});

sections.forEach((section) => {
  const triggerElement = document.getElementById(section.trigger);
  const contentElement = document.getElementById(section.content);

  triggerElement.addEventListener("click", () => {
    contentElement.classList.toggle("max-h-0");
    contentElement.classList.toggle("max-h-96");
  });
});
