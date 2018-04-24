const PG = require("pg");

function getCategory(request, result) {

  const client = new PG.Client();
  client.connect();

  client.query(
    "SELECT * FROM categories where id=$1::uuid",
    [request.params.id],
    function(error, resultquery) {
      if (error) {
        console.warn(error);
      } else {
        result.json(resultquery.rows);
        client.end();
      }
    }
  );
}

module.exports = getCategory;
