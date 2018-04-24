const request = require("request");
const { Client } = require("pg");
const client = new Client();

function loadData(element) {
  client.connect();
  client.query(
    "INSERT INTO brands(id, title) VALUES($1, $2)",
    [element.id, element.title],
    function(error, result) {
      if (error) {
        console.warn(error);
      }
    }
  );
}

function getBrands() {

  request(
    {
      url: "https://decath-product-api.herokuapp.com/brands",
      method: "GET",
    },
    function(error, response, result) {
      const resultParsed = JSON.parse(result);
      for (let i = 0; i <resultParsed.length; i++) {
        resultParsed.map(element =>
          loadData(element)
        );
      }
      client.end();
    }
  );

}


getBrands();


module.exports = getBrands;
