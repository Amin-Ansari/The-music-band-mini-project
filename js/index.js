// The elements
const theMenu = document.querySelector("#mob-menu");
const theBarButton = document.querySelector("#bar-btn");
const remainTicket = document.querySelector("#re-ticket");
const buyButton = document.getElementsByTagName("button");
let theNewNum = Number(remainTicket.innerHTML);

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
function newvalue() {
  remainTicket.innerHTML = theNewNum;
}
function buyTicket() {
  if (theNewNum > 0) {
    theNewNum--;
    newvalue();
    window.alert("بلیط شما رزوشد");
  } else if (theNewNum <= 0) {
    window.alert("به دلیل اتمام بلیط، امکان رزرو بلیط برای شما وجود ندارد.");
  }
}

// Envoking the functions and methods
theBarButton.addEventListener("click", showAndHide);
document.addEventListener("click", outerClick);
buyButton[0].addEventListener("click", buyTicket);
buyButton[1].addEventListener("click", buyTicket);
buyButton[2].addEventListener("click", buyTicket);
