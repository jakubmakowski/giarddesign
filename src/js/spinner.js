function hideSpinner() {
  const spinner = document.getElementById("spinner");
  spinner.style.display = "none";
}

window.addEventListener("load", () => {
  setTimeout(hideSpinner, 1000);
});
