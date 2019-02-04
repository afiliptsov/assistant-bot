require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const axios = require("axios");
const cors = require("cors");
const massive = require("massive");

const { test } = require(`${__dirname}/controllers/testController`);
const { getWeather } = require(`${__dirname}/functions/weather`);

const port = process.env.PORT || 3001;

const app = express();

app.use(json());
app.use(cors());

// Just a testing weathe api. Needed to be deleted.
app.get("/weather/:city", (req, res) => {
  let city = req.params.city;
  let temperature;
  axios
    .get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${
        process.env.WEATHER_APPID
      }`
    )
    .then(response => {
      temperature = response.data.main.temp;
      res.status(200).json({ tmp: temperature });
    });
});
// Till here

massive(process.env.CONNECTION_STRING)
  .then(db => app.set("db", db))
  .catch(console.log);

app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
