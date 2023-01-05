const express = require("express");
const {
  RegisterController,
  LoginController,
  forgotPasswordController,
} = require("../controllers/auth.controller");
const sendEmail = require("../middleWares/sendEmail");

const router = express.Router();

router.post("/register", RegisterController);

router.post("/login", LoginController);

router.post("/forgotPassword", sendEmail, forgotPasswordController);

module.exports = router;
