const express = require("express");
const {
  signin_user,
  signup_user,
  update_user,
  delete_user,
} = require("../controllers/usercontroller");

const route = express.Router();

route.post("/api", signup_user);

route.get("/api/:id", signin_user);

route.patch("/api/:id", update_user);

route.delete("/api/:id", delete_user);

module.exports = route;
