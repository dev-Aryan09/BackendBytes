const express = require("express");
const userController = require("../controllers/user.controller");
const validationRules = require("../middlewares/validation.middleware");

const route = express.Router();

route.post(
  "/register-user",
  validationRules.registerUserValidationRules,
  userController.registerUser,
);

module.exports = route;
