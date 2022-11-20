const express = require("express");
const router = express.Router();
const categoryController = require("../controller/categories");
// lấy các sản phẩm theo tên danh mục
router.get("/:category_name", categoryController.getAllCategories);

module.exports = router;
