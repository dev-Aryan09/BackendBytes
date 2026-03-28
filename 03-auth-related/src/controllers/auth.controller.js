const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

async function registerUser(req, res) {
  const { username, email, password } = req.body;

  const isUserAlreadyExists = await userModel.findOne({
    email,
  });

  if (isUserAlreadyExists) {
    return res.status(409).json({
      message: "user already exists",
    });
  }

  const user = await userModel.create({
    username,
    email,
    password,
  });

  /* generating and signing the token */
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  /* storing token inside cookies */
  res.cookie("token", token);

  res.status(201).json({
    message: "user created successfully",
    user,
  });
}

module.exports = { registerUser };
