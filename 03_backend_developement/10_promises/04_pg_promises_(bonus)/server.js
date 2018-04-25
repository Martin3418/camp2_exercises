const express = require("express");
const app = express();

const getCategories = require("./getCategories");
const getOneCategory = require("./getOneCategory");
// const getBrands = require("./getBrands");
// const getOneBrand = require("./getOneBrand");
// const getProducts = require("./getProducts");
// const getOneProduct = require("./getOneProduct");
// const getProductsOfOneCategory = require("./getProductsOfOneCategory");


const port = process.env.PORT || 3000;

app.get("/", function(request, result) {
  result.send("Hello World!");
});

app.get("/categories/:id", getOneCategory);
//
app.get("/categories", getCategories);
//
// app.get("/brands", getBrands);
//
// app.get("/brands/:id", getOneBrand);
//
// app.get("/products", getProducts);
//
// app.get("/products/:id", getOneProduct);
//
// app.get("/categories/:id/products", getProductsOfOneCategory);

app.listen(port, function () {
  console.log("Server listening on port:" + port);
});
