const express = require("express");
const {
  GetAllIndustryController,
  GetAllIndustryWithCategoryController,
} = require("../controllers/industry.controller");

const router = express.Router();

router.get("/", GetAllIndustryController);
router.get("/category", GetAllIndustryWithCategoryController);

module.exports = router;
