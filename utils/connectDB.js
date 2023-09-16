const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
let { DB_URL } = process.env;

const connectDB = async (cb) => {
  try {
    const connection = await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    if (connection.connection.readyState === 1) {
      console.log("Connection to Db was successful.");
      cb();
    }
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = connectDB;
