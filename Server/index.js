require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const axios = require("axios");
const cors = require("cors");
const massive = require("massive");

const { test } = require(`${__dirname}/controllers/testController`);

const port = process.env.PORT || 3001;

const app = express();

app.use(json());
app.use(cors());

app.get("/test", test);

massive(process.env.CONNECTION_STRING)
  .then(db => app.set("db", db))
  .catch(console.log);

app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
