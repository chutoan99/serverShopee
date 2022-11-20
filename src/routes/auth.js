const express = require("express");
const router = express.Router();
const authController = require("../controller/auth");

// GET ALL USERS
router.get("/users", authController.getAllUser);
// GET USER ID
router.get("/user/:id", authController.getUserId);
//REGISTER
router.post("/register", authController.register);
// LOGIN
router.post("/login", authController.login);
// UPDATE USER
router.post("/updateUser/:id", authController.updateUser);
// DELETE USER
router.delete("/deleteUser/:id", authController.deleteUser);

module.exports = router;
