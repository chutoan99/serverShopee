const express = require("express");
const {
  RegisterController,
  LoginController,
} = require("../controllers/auth.controller");

const router = express.Router();

router.post("/register", RegisterController);

router.post("/login", LoginController);

module.exports = router;
