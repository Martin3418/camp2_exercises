const PG = require("pg");
const client = new PG.Client();

function getOneProduct (request, result) {
  client.connect();

  client.query(
    "SELECT * FROM products WHERE id = $1::uuid",
    [request.params.id],
    function(error, resultQuery) {
      if (error) {
        console.warn(error);
      } else {
        return result.json(resultQuery.rows);
      }
      client.end();
    }
  );
}

module.exports = getOneProduct;
