const express = require("express");
const {
  insertController,
  insertCommentController,
  InsertPostController,
  insertShopController,
} = require("../controllers/insertData.controller");

const router = express.Router();
router.post("/", insertController);
router.post("/comment", insertCommentController);
router.post("/post", InsertPostController);
router.post("/shop", insertShopController);

module.exports = router;
