const express = require("express");
const {
  InsertPostController,
  GetAllPostController,
  GetPostIdController,
  UpdatePostController,
  DeletePostController,
  AddPostController,
} = require("../controllers/post.controller");

const router = express.Router();

router.post("/insert", InsertPostController);

router.get("/", GetAllPostController);

router.post("/", AddPostController);

router.get("/:itemid", GetPostIdController);

router.put("/:itemid", UpdatePostController);

router.delete("/:itemid", DeletePostController);

module.exports = router;
