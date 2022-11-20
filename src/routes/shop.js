const express = require("express");
const router = express.Router();
const shopController = require("../controller/shop");

// lấy thông tin shop
router.get("/info/:shopid", shopController.getInfoShop);

// lấy tất cả sản phẩm của shop
router.get("/:shopid", shopController.getAllItemShop);

module.exports = router;
