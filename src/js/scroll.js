document.addEventListener("DOMContentLoaded", function () {
  var scrollButtons = document.querySelectorAll(".scroll-button");

  scrollButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var targetId = button.getAttribute("data-scroll-to");
      var targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
