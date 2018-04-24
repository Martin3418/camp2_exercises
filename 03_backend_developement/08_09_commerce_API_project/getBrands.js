const request = require("request");
const { Pool } = require("pg");
const pool = new Pool();

function loadData(element) {
  pool.query(
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
      // console.log(resultParsed[0].id);
      resultParsed.map(element =>
        // console.log("id ==>",element.id,"titile==>", element.title);
        loadData(element)
      );

    }
  );

}

getBrands();


module.exports = getBrands;
