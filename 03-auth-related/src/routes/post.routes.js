const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/create", (req, res) => {
  const token = req.cookies.token;

  /* checking if token is present or not */
  if (!token) {
    return res.status(401).json({
      message: "unauthorized",
    });
  }

  /* checking if token is correct or not */
  try {
    jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return res.status(401).json({
      message: "Token is invalid",
      err,
    });
  }

  res.send("post created successfully");
});

module.exports = router;
