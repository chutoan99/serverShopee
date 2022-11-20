const express = require("express");
const router = express.Router();
const insertController = require("../controller/insert");

//insert data
router.post("/insert", insertController.insertData);
router.get("/getAll", insertController.getData);

module.exports = router;
