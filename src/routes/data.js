const express = require("express");
const router = express.Router();
const dataController = require("../controller/data");

// lấy tất cả data
router.get("/datas", dataController.getAllData);
// lấy comment theo sản phẩm
router.get("/data/comment/:itemid", dataController.getCommentId);
// lấy data theo id
router.get("/item/:itemid", dataController.getDataId);

module.exports = router;
