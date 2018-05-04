const fetch = require("node-fetch");

function getProductsByCategory(request, result) {
  return fetch(`https://decath-product-api.herokuapp.com/categories/${request.params.id}/products`,
  {method: "GET"}
)
    .catch((error) => {
      console.warn(error);
    })
    .then((response) => response.json())
    .then((resp) => result.render("category", {products: resp}))
}

  module.exports = getProductsByCategory;
