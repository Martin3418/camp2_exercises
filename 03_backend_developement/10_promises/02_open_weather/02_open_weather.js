const fetch = require("node-fetch");
const keyAPI = process.env.KEY_API;

function weatherByCityName(cityName) {
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${keyAPI}`,
    {method: "GET"}
  )
    .then((response) => response.json())
    .then((result) => {
      console.log(`${result.main.temp}°C`);
    })
    .catch((error) => {
      console.warn(error);
    }
    );
}
weatherByCityName("Lille");

function weatherByLatitudeAndLongitude(latitude, longitude) {
  fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${keyAPI}`,
    {method: "GET"}
  )
    .then((response) => response.json())
    .then((result) => {
      console.log(`${result.main.temp}°C`);
    });
}
weatherByLatitudeAndLongitude(50.63, 3.07);
module.exports = weatherByCityName;
