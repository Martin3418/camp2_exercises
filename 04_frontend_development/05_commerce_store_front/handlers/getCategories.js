const fetch = require("node-fetch");

function getCategories(request, result) {
  return fetch("https://decath-product-api.herokuapp.com/categories",
  {method: "GET"}
)
    .catch((error) => {
      console.warn(error);
    })
    .then((response) => response.json())
    .then((resp) => result.render("home", {categories: resp}))
  }

  module.exports = getCategories;
