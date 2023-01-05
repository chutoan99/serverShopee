const express = require("express");
const {
  getAllShopController,
  getShopIdController,
  updateShopController,
  addShopController,
  deleteShopController,
} = require("../controllers/shop.controller");

const router = express.Router();

// INSERT ALL shop

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
