"use strict";
import { getProduct } from "./utilitaire.js";

/////// DOM ELEMENT
const index_items = document.getElementById("items");

// CHECK API AND DISPLAY

getProduct().then((data) => data.map((value) => displayProduct(value)));

// DISPLAY PRODUCT
const displayProduct = function (data) {
  const index_itemHtml = `<a href="./product.html?id=${data._id}">
  <article>
    <img
      src="${data.imageUrl}"
      alt="${data.altTxt}"
    />
    <h3 class="productName">${data.name}</h3>
    <p class="productDescription">${data.description}
    </p>
  </article>
  </a>`;

  index_items.insertAdjacentHTML("beforeend", index_itemHtml);
};
