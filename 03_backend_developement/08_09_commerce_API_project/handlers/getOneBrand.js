const PG = require("pg");
const client = new PG.Client();

function getOneBrand(request, result) {
  client.connect();

  client.query(
    "SELECT * FROM brands WHERE id = $1::uuid",
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

module.exports = getOneBrand;
