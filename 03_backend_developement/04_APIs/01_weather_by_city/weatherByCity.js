const request = require("request");

const keyAPI = process.env.KEY_API;

function weatherByCityName(cityName) {
  request(
    {
      url: `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${keyAPI}`,
      method: "GET",
    },
    function(error, response, result) {
      const cityTemp = JSON.parse(result);
      // console.log(cityTemp.main.temp);
      console.log(`${cityTemp.main.temp}°C`);
    }
  );
}

weatherByCityName("Paris");

module.exports = weatherByCityName;
