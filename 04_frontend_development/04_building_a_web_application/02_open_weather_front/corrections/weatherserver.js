const express = require ('express');
const fs = require("fs");
const app = express();
const port = process.env.PORT || 3000;
const weather = require ("./weather.js")

app.get("/",function(request,res){
  weather.weather() //reçoit une promesse de la fonction weather de weather.js
  .then((weatherObject) => { //donc peut passer un .then
    res.send(`
      <h1>The temperature is ${weatherObject.main.temp} °c </h1>
      <img src="https://openweathermap.org/img/w/${weatherObject.weather[0].icon}.png"/>
    `);
  })
});

app.listen(port,function(){
  console.log("server listening on the port"+ port);
});
