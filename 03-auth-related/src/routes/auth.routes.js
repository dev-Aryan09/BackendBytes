const express = require("express");
const authController = require("../controllers/auth.controller");

const router = express.Router();

/* POST, /register */
router.post("/resgister", authController.registerUser);

router.get("/test", (req, res) => {
  console.log(req.cookies);

  res.json({
    message: "test route",
    token: req.cookies,
  });
});

module.exports = router;