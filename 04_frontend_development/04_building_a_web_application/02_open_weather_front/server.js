const express = require("express");
const app = express();
const path = require("path");
const getWeatherByCity = require("./getWeatherByCity");

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/getWeatherByCity/:city", getWeatherByCity);

app.listen(3000);

console.log("Running at Port 3000");
