const popup = document.querySelector(".popup");
const popupCancelButton = document.querySelector(".popup__cancel-btn");
const addShopButton = document.getElementById("addShop");

const burgerMenuButton = document.querySelector(".burger-menu");
const menu = document.querySelector('.menu');
const header = document.querySelector('.header');
const main = document.querySelector('.main');
const menuCancelIcon = document.querySelector(".menu__cancel-icon");
const popupCreateBtn = document.getElementById('#popup__create-btn');
const popupResetBtn = document.getElementById('#popup__reset-btn');

function setActive(selector) {
  selector.classList.add('active');
}
function removeActive(selector) {
  selector.classList.remove('active');
}




addShopButton.addEventListener("click", function () {
  setActive(popup);
});

popupCancelButton.addEventListener("click", function () {
  removeActive(popup);
});

burgerMenuButton.addEventListener("click", function () {
  setActive(menu);
  removeActive(header);
  removeActive(main);
});
menuCancelIcon.addEventListener("click", function () {
 removeActive(menu);
 setActive(header);
 setActive(main);
});

popupResetBtn.addEventListener('click', function () {
  removeActive(popup);
});

//
//
// const table = document.querySelector('.shop-list__table tbody');
//
//
// function AddRow() {
//
//   let innerTr = `
//   <td>12345</td>
//   <td>Дипломная работа</td>
//   <td>http://www.work5.ru/services</td>
//   <td>
//     <button type="button" class="btn btn--bg-color-green btn--text-color-white">
//       <span class="btn__icon">
//         <svg class="pencil-icon">
//           <use xlink:href="#pencil-icon"></use>
//         </svg>
//       </span>
//       Редактировать
//     </button>
//     <button type="button" class="btn btn--bg-color-gray btn--text-color-white">
//       <span class="btn__icon">
//         <svg class="cancel-icon">
//           <use xlink:href="#cancel-icon"></use>
//         </svg>
//       </span>
//       Удалить
//     </button>
//   </td>`;
//
//   const tr = document.createElement('tr');
//   table.appendChild(tr);
//   tr.innerHTML = innerTr;
//
//
// }





//popupCreateBtn.addEventListener('click', AddRow);



