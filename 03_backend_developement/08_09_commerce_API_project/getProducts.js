const request = require("request");
const { Pool } = require("pg");
const pool = new Pool();

function getData() {
  request(
    {
      url: "https://decath-product-api.herokuapp.com/products",
      method: "GET",
    },
    function(error, response, result) {
      if (error) {
        console.warn(error);
      } else {
        const resultParsed = JSON.parse(result);
        resultParsed.map(element => loadData(element));
      }
    }
  );
}

function loadData(element) {
  pool.query(
    "INSERT INTO products (id, decathlon_id, title, description, brand_id, min_price, max_price, crossed_price, percent_reduction, image_path, rating) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)",
    [element.id, element.decathlon_id, element.title, element.description, element.brand_id, element.min_price, element.max_price, element.crossed_price, element.percent_reduction, element.image_path, element.rating],
    function(error, result) {
      if (error) {
        console.warn(error);
      } return result;
    }
  );
}

getData();
