const axios = require("axios");

const getWeather = city => {
  let temperature;
  axios
    .get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${
        process.env.WEATHER_APPID
      }`
    )
    .then(response => {
      temperature = response.data.main.temp;
      console.log("Temperature received", temperature);
    });
  return temperature;
};

module.exports = {
  getWeather
};
