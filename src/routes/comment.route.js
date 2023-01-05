const express = require("express");
const {
  getAllCommentController,
  getCommentIdController,
  addCommentController,
  deleteCommentController,
  updateCommentController,
} = require("../controllers/comment.controller");

const router = express.Router();

router.get("/", getAllCommentController);

router.post("/", addCommentController);

router.get("/:cmtid", getCommentIdController);

router.put("/:cmtid", updateCommentController);

router.delete("/:cmtid", deleteCommentController);

module.exports = router;
