const PG = require("pg");
const client = new PG.Client();

function getProductsOfOneCategory (request, result) {
  client.connect();

  client.query(
    "SELECT * FROM products INNER JOIN categories ON (categories.decathlon_id = products.decathlon_id) WHERE categories.id = $1::uuid",
    [request.params.id],
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

module.exports = getProductsOfOneCategory;
