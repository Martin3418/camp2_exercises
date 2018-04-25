const PG = require("pg");
function getOneCategory(request, result) {
  const client = new PG.Client();
  client.connect();

  client.query("SELECT * FROM categories WHERE id=$1::uuid", [request.params.id])
    // .then((result) => result.json())
    .then((resultCategories) => {
      result.json(resultCategories.rows);
      client.end();
    })
    .catch(error => {
      console.warn(error);
      client.end();
    });
}

module.exports = getOneCategory;
