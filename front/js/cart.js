import { getProduct } from "./utilitaire.js";

/////// DOM ELEMENT
const cart_section_cart = document.getElementsByClassName(".cart");
const cart_section_cart__items = document.getElementById("cart__items");
const cart_cartAndFormContainer = document.getElementById(
  "cartAndFormContainer"
);
const cart_totalQuantity = document.getElementById("totalQuantity");
const cart_totalPrice = document.getElementById("totalPrice");
const cart_form_firstName = document.getElementById("firstName");
const cart_form_firstNameErrorMsg =
  document.getElementById("firstNameErrorMsg");
const cart_form_lastName = document.getElementById("lastName");
const cart_form_lastNameErrorMsg = document.getElementById("lastNameErrorMsg");
const cart_form_address = document.getElementById("address");
const cart_form_addressErrorMsg = document.getElementById("addressErrorMsg");
const cart_form_city = document.getElementById("city");
const cart_form_cityErrorMsg = document.getElementById("cityErrorMsg");
const cart_form_email = document.getElementById("email");
const cart_form_emailErrorMsg = document.getElementById("emailErrorMsg");
const cart_form_order = document.getElementById("order");

// TAKE LOCAL STORAGE
let cart = JSON.parse(localStorage.getItem("products"));

//CALL API AND DISPLAY
for (let product of cart) {
  getProduct(product.id).then((data) => displayProduct(data, product));
}

//DISPLAY FUNCTION
function displayProduct(data, product) {
  const cart_itemHtml = ` <article class="cart__item" data-id="${data.id}";data-color="${data.colors}">
      <div class="cart__item__img">
        <img src="${data.imageUrl}"alt="${data.altTxt}"/>
      </div>
      <div class="cart__item__content">
        <div class="cart__item__content__description">
          <h2>${data.name}</h2>
          <p>${product.colors}</p>
          <p>${data.price} €</p>
        </div>
        <div class="cart__item__content__settings">
        <div class="cart__item__content__settings__quantity">
          <p>Qté :</p>
          <input
            type="number"
            class="itemQuantity"
            name="itemQuantity"
            min="1"
            max="100"
            value="${product.quantity}"
          />
        </div>
        <div class="cart__item__content__settings__delete">
          <p class="deleteItem">Supprimer</p>
        </div>
      </div>
    </div>
   </article> `;
  cart_section_cart__items.insertAdjacentHTML("beforeend", cart_itemHtml);
}

// CALCUL DU PANIER
window.addEventListener("DOMContentLoaded", function (event) {
  console.log(document.querySelector('input[name="itemQuantity"]'));
  // const allinputs = document.querySelectorAll('input[name="itemQuantity"]');
  // const myLength = allinputs.length;

  // function calculate() {
  //   let input;
  //   for (let i = 0; i < myLength; ++i) {
  //     input = allinputs[i];
  //   }
  //   allinputs.style.color = "red";
  // }
  // calculate();
});

// const myLength = allinputs.length;
// let input;

// function calculate() {
//   for (let i = 0; i < myLength; ++i) {
//     input = allinputs[i];
//     if (input.value) {
//       console.log(input.value);
//     }
//   }
// }
// calculate();
// console.log(input.value);

// window.addEventListener("load", function (event) {
//   const allinputs = document.querySelectorAll('input[name="itemQuantity"]');
//   const myLength = allinputs.length;
//   let input;

//   function calculate() {
//     for (let i = 0; i < myLength; ++i) {
//       input = allinputs[i];
//       if (input.value) {
//         // console.log(input.value);
//       }
//     }
//   }
//   calculate();
//   console.log(input.value);
//   input[value].addEventListener("change", (event) => {
//     console.log("changement !! ");
//   });
// });

// //Array to total
// // quantity.push([element.quantity, element.price]);

// // CHECK QUANTITY
// // const quantity = [];
// // console.log(quantity);

// // // document.addEventListener("DOMContentLoaded", function (value) {
// // //   console.log(quantitySelector[0].value);
// // //   console.log(quantitySelector[1].value);
// // // });
// // function changeQuantity() {
// //   let quantitySelector = document.querySelectorAll(".itemQuantity");
// //   quantitySelector.forEach((item) =>
// //     item.addEventListener("change", () => {
// //       console.log("ça change =)");
// //     })
// //   );
// // }
// // changeQuantity()
