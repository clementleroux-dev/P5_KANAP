// CALL API
"use strict";

export const getProduct = function (url = "") {
  return fetch(`http://localhost:3000/api/products/${url}`) //envoie la promesse
    .then((response) => response.json()); //lecture de la promesse
};
