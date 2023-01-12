const express = require("express");
const {
  GetAllNotificationController,
} = require("../controllers/notify.controller");

const router = express.Router();

router.get("/", GetAllNotificationController);

module.exports = router;
