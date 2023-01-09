const express = require("express");
const {
  GetAllCategoriesTreeController,
  GetAllCategoriesParentController,
} = require("../controllers/categoryTree.controller");

const router = express.Router();

router.get("/:level", GetAllCategoriesTreeController);
router.get("/parent/:catid", GetAllCategoriesParentController);

module.exports = router;
