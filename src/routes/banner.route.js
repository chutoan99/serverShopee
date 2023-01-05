const express = require("express");
const { GetAllBannerController } = require("../controllers/banner.controller");

const router = express.Router();

router.get("/", GetAllBannerController);

module.exports = router;
