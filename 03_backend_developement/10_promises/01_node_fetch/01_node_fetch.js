const fetch = require("node-fetch");

fetch(
  "https://decath-product-api.herokuapp.com/products/efe288cb-fb63-4b23-b8df-529f04b8b02b",
  {method: "GET"}
)
  .catch((error) => {
    console.warn(error);
  })
  .then((response) => response.json())
  .then((result) => fetch(
    `https://decath-product-api.herokuapp.com/brands/${result.brand_id}`,
    {method: "GET"}
  ))
  .then((response) => response.json())
  .then((result) => {
    console.log(`The brand name is ${result.title}`);
  });
