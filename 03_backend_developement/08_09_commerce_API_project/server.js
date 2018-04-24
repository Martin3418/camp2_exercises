const express = require("express");
const app = express();

const getCategories = require("./handlers/getCategories");
const getCategory = require("./handlers/getCategory");
const getBrands = require("./handlers/getBrands");
const getOneBrand = require("./handlers/getOneBrand");
const getProducts = require("./handlers/getProducts");
const getOneProduct = require("./handlers/getOneProduct");
const getProductsOfOneCategory = require("./handlers/getProductsOfOneCategory");


const port = process.env.PORT || 3000;

app.get("/", function(request, result) {
  result.send("Hello World!");
});

app.get("/categories/:id", getCategory);

app.get("/categories", getCategories);

app.get("/brands", getBrands);

app.get("/brands/:id", getOneBrand);

app.get("/products", getProducts);

app.get("/products/:id", getOneProduct);

app.get("/categories/:id/products", getProductsOfOneCategory);

app.listen(port, function () {
  console.log("Server listening on port:" + port);
});
