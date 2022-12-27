const express = require("express");
const fileUploader = require("../middleWares/cloudinary");
const {
  GetAllOverviewController,
  GetOverviewIdController,
  UpdateOverviewController,
  DeleteOverviewController,
  AddOverviewController,
  GetAllController,
} = require("../controllers/overview.controller");

const router = express.Router();

// insert overview

// GET ALL overview
router.get("/", GetAllOverviewController);
// router.get("/", GetAllController);

// ADD ALL overview
router.post("/", fileUploader.single("image"), AddOverviewController);

// GET Overview Id
router.get("/:itemid", GetOverviewIdController);

// UPDATE ALL overview
router.put("/:itemid", fileUploader.single("image"), UpdateOverviewController);

// DELETE ALL overview
router.delete("/:itemid", DeleteOverviewController);

module.exports = router;
