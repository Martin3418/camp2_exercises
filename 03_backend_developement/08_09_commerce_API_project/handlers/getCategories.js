const PG = require("pg");

function getCategories(request, result) {
  const client = new PG.Client();
  client.connect();

  client.query(
    "SELECT * FROM categories",
    [],
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

module.exports = getCategories;
