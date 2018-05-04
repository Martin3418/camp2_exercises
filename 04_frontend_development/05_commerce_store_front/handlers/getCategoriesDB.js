const PG = require("pg");


function getCategories(request, result) {
  const client = new PG.Client();
  client.connect();

  client.query(
    "SELECT * FROM categories",
    [])
    .catch((error) => {
      console.warn(error)
      client.end();
    })
    .then((rawsOnly) => rawsOnly.rows)
    .then((catOnly) => {
      result.render("home", {categories: catOnly})
      client.end();
    })
  }

  module.exports = getCategories;
