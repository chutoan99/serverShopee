const express = require("express");
const {
  GetAllCartController,
  GetCartIdController,
  AddCartController,
  UpdateCartController,
  DeleteCartController,
} = require("../controllers/cart.controller");

const router = express.Router();

router.get("/", GetAllCartController);

router.post("/", AddCartController);

router.put("/:cartid", UpdateCartController);

router.delete("/:cartid", DeleteCartController);

router.get("/:cartid", GetCartIdController);

module.exports = router;
