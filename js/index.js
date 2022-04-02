// The elements
const theMenu = document.querySelector("#mob-menu");
const theBarButton = document.querySelector("#bar-btn");

// Function and methods
function showAndHide() {
  theMenu.classList.toggle("show-menu");
}
function outerClick(event) {
  if (event.target !== theBarButton) {
    if (theMenu.classList.contains("show-menu")) {
      theMenu.classList.remove("show-menu");
    }
  }
}

// Envoking the functions and methods
theBarButton.addEventListener("click", showAndHide);
document.addEventListener("click", outerClick);
