const bcrypt = require("bcrypt");
require("dotenv").config();
const UserModel = require("../models/user");
const { v4 } = require("uuid");

const authController = {
  //REGISTER
  register: async (req, res) => {
    try {
      let userCode = v4();
      const { name, email, password, gender, address, phone, birthday } =
        await req.body;
      // const hashedPassword = await bcrypt.hash(password, 10);
      await UserModel.create({
        userId: userCode,
        name,
        email,
        gender,
        address,
        phone,
        birthday,
        password,
      })
        .then((data) => {
          res.json({ mess: "Tạo tài khoản thành công", res: data });
        })
        .catch((err) => {
          res.json({ mess: "tạo tài khoản thất bại", res: err });
        });
    } catch (err) {
      res.json(err);
    }
  },
  // LOGIN
  login: async (req, res) => {
    const { email, password } = req.body;
    try {
      UserModel.findOne({
        email,
        password,
      })
        .then((data) => {
          res.json({
            mess: "Đăng nhập thành công",
            res: data,
          });
        })
        .catch((err) => {
          res.json({
            mess: "Đăng nhập thất bại",
            res: err,
          });
        });
    } catch (err) {
      res.json("lỗi server");
    }
  },
  // GET ALL USERS
  getAllUser: async (req, res) => {
    try {
      await UserModel.find({})
        .then((data) => {
          res.json({
            mess: "success",
            res: data,
          });
        })
        .catch((err) => {
          res.json({
            mess: "false",
            res: err,
          });
        });
    } catch (err) {
      res.json("lỗi server");
    }
  },
  // GET USER ID
  getUserId: async (req, res) => {
    try {
      const idUser = req.params.id;
      UserModel.findOne({
        _id: idUser,
      })
        .then((data) => {
          res.json({
            mess: "success",
            res: data,
          });
        })
        .catch((err) => {
          res.json({
            mess: "false",
            res: err,
          });
        });
    } catch (err) {
      res.json("lỗi server");
    }
  },
  // UPDATE USER
  updateUser: async (req, res) => {
    try {
      const idUser = req.params.id;
      const newName = req.body.name;
      const newPassword = req.body.password;
      const newEmail = req.body.email;
      const newGender = req.body.gender;
      const newAddress = req.body.address;
      const newPhone = req.body.phone;
      const newBirthday = req.body.birthday;
      const newUpdateUser = await UserModel.findByIdAndUpdate(idUser, {
        name: newName,
        passWord: newPassword,
        email: newEmail,
        gender: newGender,
        address: newAddress,
        phone: newPhone,
        birthday: newBirthday,
      })
        .then((newUpdateUser) => {
          res.json({
            mess: "cập nhật tài khoản thành công",
            res: newUpdateUser,
          });
        })
        .catch((err) => {
          res.json({ mess: "cập nhật thất bại", res: err });
        });
    } catch (err) {
      res.json("lỗi server");
    }
  },
  // DELETE USER
  deleteUser: async (req, res) => {
    try {
      const idUser = req.params.id;
      UserModel.deleteOne({
        _id: idUser,
      })
        .then((data) => {
          res.json({ mess: "bạn đã xóa tài khoản thàng công", res: data });
        })
        .catch((err) => {
          res.json(err);
        });
    } catch (err) {
      res.json("lỗi server");
    }
  },
};

module.exports = authController;
