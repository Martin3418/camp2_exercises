const express = require("express");
const nunjucks = require("nunjucks");
const getCategories = require("./handlers/getCategories");
const getProductsByCategory = require("./handlers/getProductsByCategory");
const getProduct = require("./handlers/getProduct");

const app = express();
app.use(express.static("public"));

nunjucks.configure("views", {
  autoescape: true,
  express: app
});

app.set("views", __dirname + "/views");
app.set("view engine", "njk");

app.get("/", getCategories);

app.get("/category/:id", getProductsByCategory);

app.get("/product/:id", getProduct);

app.listen(3000);
