const express = require("express");
const {
  GetAllUserController,
  GetUserIdController,
  UpdateUserController,
  DeleteUserController,
} = require("../controllers/user.controller");
const verifyToken = require("../middleWares/verify_token");
const isShopAdmin = require("../middleWares/verify_role");
const router = express.Router();

router.get("/", verifyToken, GetAllUserController);

router.get("/:userid", verifyToken, GetUserIdController);

router.put("/:userid", verifyToken, UpdateUserController);

router.delete("/:userid", verifyToken, DeleteUserController);

module.exports = router;
