const request = require("request");
const { Pool } = require("pg");
const pool = new Pool();

function loadData(element) {
  pool.query(
    "INSERT INTO categories (id, decathlon_id, label) VALUES ($1, $2, $3)",
    [element.id, element.decathlon_id, element.label],
    function(error, result) {
      if (error) {
        console.warn(error);
      }
    }
  );
}

function getData() {
  request(
    {
      url: "https://decath-product-api.herokuapp.com/categories",
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

getData();
