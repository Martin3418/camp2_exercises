const PG = require("pg");
const client = new PG.Client();

function getProducts(request, result) {
  client.connect();

  client.query(
    "SELECT * FROM products",
    [],
    function(error, resultQuery) {
      if (error) {
        console.warn(error);
      } else {
        result.json(resultQuery.rows);
      }
      client.end();
    }
  );
}

module.exports = getProducts;
