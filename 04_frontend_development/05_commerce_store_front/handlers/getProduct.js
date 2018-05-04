const fetch = require("node-fetch");

function getProduct(request, result) {
  return fetch(`https://decath-product-api.herokuapp.com/products/${request.params.id}`,
  {method: "GET"}
)
    .catch((error) => {
      console.warn(error);
    })
    .then((response) => response.json())
    .then((resp) => result.render("product", {card: resp}))
}

  module.exports = getProduct;
