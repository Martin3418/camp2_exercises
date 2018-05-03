const fetch = require("node-fetch");
const keyAPI = process.env.KEY_API;

function weatherByCityName(request, response) {
  // console.log(request);
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${request.params.city}&units=metric&appid=${keyAPI}`,
    {method: "GET"}
  )
    .then((responseWeather) => responseWeather.json())
    .then((resultWeather) => response.send(`
<h1>The temperature is ${resultWeather.main.temp}°C</h1>
`))

    .catch((error) => {
      console.warn(error);
    }
    );
}


module.exports = weatherByCityName;
