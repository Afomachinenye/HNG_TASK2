const mongoose = require("mongoose");

let userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      trim: true,
      required: [true, "Please provide your name"],
    },
  },
  { timestamps: true }
);

const Person = mongoose.model("Person", userSchema);

module.exports = Person;
