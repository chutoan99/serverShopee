const express = require("express");
const {
  GetAllSearchSuggestionController,
} = require("../controllers/searchSuggestion.controller");

const router = express.Router();

router.get("/", GetAllSearchSuggestionController);

module.exports = router;
