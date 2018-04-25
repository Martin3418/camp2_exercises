const PG = require("pg");
function getCategories(request, result) {
  const client = new PG.Client();
  client.connect();

  client.query("SELECT * FROM categories", [])
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

module.exports = getCategories;
