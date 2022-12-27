const express = require("express");
const {
  GetAllOrderController,
  GetOrderIdController,
  AddOrderController,
  UpdateOrderController,
  DeleteOrderController,
} = require("../controllers/order.controller");

const router = express.Router();

router.get("/", GetAllOrderController);

router.post("/", AddOrderController);

router.put("/:orderid", UpdateOrderController);

router.delete("/:orderid", DeleteOrderController);

router.get("/:orderid", GetOrderIdController);

module.exports = router;
