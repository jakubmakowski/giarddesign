document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("myModal");
  const modalImage = document.getElementById("modalImage");
  const closeModalButton = document.getElementById("closeModal");
  const imageButtons = document.querySelectorAll(".open-modal");

  imageButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const imagePath = this.querySelector("img").getAttribute("src");
      modalImage.setAttribute("src", imagePath);
      modal.style.display = "block";
    });
  });

  closeModalButton.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
