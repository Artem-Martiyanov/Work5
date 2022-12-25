const popup = document.querySelector(".popup");
const popupCancelButton = document.querySelector(".popup__cancel-btn");
const addShopButton = document.getElementById("addShop");

const burgerMenuButton = document.querySelector(".burger-menu");
const menu = document.querySelector(".menu");
const menuCancelIcon = document.querySelector(".menu__cancel-icon");

addShopButton.addEventListener("click", function () {
  popup.classList.add("active");
});

popupCancelButton.addEventListener("click", function () {
  popup.classList.remove("active");
});

burgerMenuButton.addEventListener("click", function () {
  menu.style.cssText = "display: block;";
});
menuCancelIcon.addEventListener("click", function () {
  menu.style.cssText = "display: none;";
});
