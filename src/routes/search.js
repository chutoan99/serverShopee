const express = require("express");
const router = express.Router();
const searchController = require("../controller/search");

// tìm kiếm sản phẩm theo tên
router.get("/search", searchController.getSearch);

module.exports = router;
