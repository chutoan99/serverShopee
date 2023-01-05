const express = require("express");
const {
  GetAllCategoriesTreeController,
} = require("../controllers/categoryTree.controller");

const router = express.Router();

router.get("/:level", GetAllCategoriesTreeController);

module.exports = router;
