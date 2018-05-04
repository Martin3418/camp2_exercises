const request = require("request");
const { Pool } = require("pg");
const pool = new Pool();

function getData() {
  request(
    {
      url: "https://decath-product-api.herokuapp.com/categories/",
      method: "GET",
    },
    function(error, response, result) {
      if (error) {
        console.warn(error);
      } else {
        const resultParsed = JSON.parse(result);
        resultParsed.forEach(element => fetchProducts(element.id));
        // resultParsed.forEach(element => console.log(element.id));
      }
    }
  );
}

function fetchProducts(category_id) {
  request(
    {
      url: `https://decath-product-api.herokuapp.com/categories/${category_id}/products`,
      method: "GET",
    },
    function(error, response, result) {
      if (error) {
        console.warn(error);
      } else {
        const resultParsed = JSON.parse(result);
        // console.log(resultParsed[0], id);
        resultParsed.forEach(element => loadData(element, category_id));
      }
    }
  );
}

function loadData(element, categoryId) {
  pool.query(
    "INSERT INTO category_products (category_id, product_id) VALUES ($1, $2)",
    [categoryId, element.id],
    function(error, result) {
      if (error) {
        console.warn(error);
      }
    }
  );
}

getData();
// fetchProducts("98bbd88d-6e8c-4be6-8a2c-ef8e6ceca3af");
