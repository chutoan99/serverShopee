const express = require("express");
const router = express.Router();
const emailController = require("../controller/sendEmail");
// send email
router.post("/sendPass", emailController.sendEmail);

module.exports = router;
