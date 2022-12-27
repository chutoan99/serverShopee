const express = require("express");
const {
  insertShopController,
  getAllShopController,
  getShopIdController,
  updateShopController,
  addShopController,
  deleteShopController,
} = require("../controllers/shop.controller");

const router = express.Router();

// INSERT ALL shop
// router.post("/insert", insertShopController);

// GET ALL shop
router.get("/", getAllShopController);

// GET  shop ID
router.get("/:shopid", getShopIdController);

// UPDATE ALL shop
router.put("/:shopid", updateShopController);

// ADD  shop
router.post("/", addShopController);

// DELETE shop id
router.delete("/:shopid", deleteShopController);

module.exports = router;
