const express = require("express");
const insertRouter = require("../controllers/insertData.controller");

const router = express.Router();
router.post("/", insertRouter);

module.exports = router;
