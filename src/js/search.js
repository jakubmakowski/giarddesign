const toggleLeft = document.getElementById("toggleLeft");
const list = document.getElementById("list");
let isFirstClass = false;

toggleLeft.addEventListener("click", () => {
  if (isFirstClass) {
    list.classList.remove("list-wrapperOne");
    list.classList.add("list-wrapperTwo");
  } else {
    list.classList.remove("list-wrapperTwo");
    list.classList.add("list-wrapperOne");
  }

  isFirstClass = !isFirstClass;
});
