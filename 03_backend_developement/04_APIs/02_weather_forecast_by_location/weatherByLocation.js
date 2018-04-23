const request = require("request");
const keyAPI = process.env.KEY_API;

function weatherByLatitudeAndLongitude(latitude, longitude) {
  request(
    {
      url: `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${keyAPI}`,
      method: "GET",
    },
    function(error, response, result) {
      const locationTemp = JSON.parse(result);
      // console.log(result);
      console.log(`${locationTemp.main.temp}°C`);
    }
  );
}

function weatherByZipcode(zipCode, countryCode) {
  request(
    {
      url: `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},${countryCode}&units=metric&appid=${keyAPI}`,
      method: "GET",
    },
    function(error, response, result) {
      const cityTemp = JSON.parse(result);
      // console.log(result);
      console.log(`${cityTemp.main.temp}°C`);
    }
  );
}

// weatherByLatitudeAndLongitude(32.661343, 51.680374);
weatherByZipcode("59000", "fr");

module.exports = {
  weatherByLatitudeAndLongitude: weatherByLatitudeAndLongitude,
  weatherByZipcode: weatherByZipcode
};
