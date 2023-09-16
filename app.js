const express = require("express");
const dotenv = require("dotenv").config();
const Person = require("./models/user"); // Assuming the correct model is "user"
const bodyParser = require("body-parser");
const route = require("./Routes/routes");
let { PORT, DB_URL } = process.env;
const connectDB = require("./utils/connectDB");
const app = express();

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(route);

//Start server
connectDB(() => {
  app.listen(PORT || 4000, () => {
    console.log(`Listening to request on PORT ${PORT}`);
  });
});
