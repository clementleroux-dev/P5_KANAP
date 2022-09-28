"use strict";

import { getProduct } from "./utilitaire.js";

/////// DOM ELEMENT
const product_item__img = document.querySelector(".item__img");
const product_title = document.getElementById("title");
const product_price = document.getElementById("price");
const product_description = document.getElementById("description");
const product_colors = document.getElementById("colors");
const product_quantity = document.getElementById("quantity");
const product_addToCart = document.getElementById("addToCart");

// URL ID
const myKeysValues = window.location.search;
const urlParams = new URLSearchParams(myKeysValues);
const product = urlParams.get("id");

// DISPLAY PRODUCT
const displayProduct = function (data) {
  ////// img
  const product_item_imgHtml = `<img
    src="${data.imageUrl}"
    alt="${data.altTxt}"/>`;
  product_item__img.insertAdjacentHTML("beforeend", product_item_imgHtml);

  ////// body
  product_title.textContent = data.name;
  product_price.textContent = data.price;
  product_description.textContent = data.description;

  ////// colors
  data.colors.forEach((colors) => {
    const newNode = document.createElement("option");
    newNode.value = colors;
    const textNode = document.createTextNode(colors);
    newNode.appendChild(textNode);
    product_colors.insertBefore(newNode, product_colors.children[1]);
  });
};

//APPEL API + display product
getProduct(product).then((data) => displayProduct(data));

//ADD TO CART

product_addToCart.addEventListener("click", function (params) {
  let products = [];
  const productToAdd = {
    id: product,
    quantity: Number(product_quantity.value),
    colors: product_colors.value,
  };
  // CHECK ENTRIES
  if (
    product_colors.value === "" ||
    product_colors.value === "--SVP, choisissez une couleur --" ||
    product_quantity.value === "0"
  )
    alert("Couleur ou quantité à renseigner");

  // ADD PRODUCT by LOCAL STORAGE
  if (localStorage.getItem("products")) {
    products = JSON.parse(localStorage.getItem("products"));
    if (products.length === 0) {
      products.push(productToAdd);
    } else {
      for (let [i, e] of products.entries()) {
        const sameProduct =
          e.id === productToAdd.id && e.colors === productToAdd.colors;

        if (i === products.length - 1 && !sameProduct) {
          products.push(productToAdd);
          break;
        }
        if (sameProduct) {
          e.quantity = e.quantity + productToAdd.quantity;
          break;
        }
      }
    }
  } else {
    products.push(productToAdd);
  }

  localStorage.setItem("products", JSON.stringify(products));
});
