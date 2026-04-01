const express = require("express");
const authController = require("../controllers/auth.controller");

const router = express.Router();

/* /api/auth/register */
router.post("/register", authController.registerUser);

/* /api/auth/login */
router.post("/login", authController.loginUser);

/* /api/auth/logout */
router.post("/logout", authController.logoutUser);

module.exports = router;
