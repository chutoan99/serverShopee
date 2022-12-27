const db = require("../models");

// GET ALL User
const GetAllUserService = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.User.findAll({
        attributes: {
          exclude: ["password"],
        },
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to get all User.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

// GET  User id
const GetUserIdService = (userId) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.User.findOne({
        where: {
          userid: userId,
        },
        attributes: {
          exclude: ["password"],
        },
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "User is not found.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

// Update User
const UpdateUserService = (userId, payload) =>
  new Promise(async (resolve, reject) => {
    console.log(payload);
    try {
      const response = await db.User.update(
        {
          name: payload?.name,
          email: payload?.email,
          sex: payload?.sex,
          address: payload?.address,
          phone: payload?.phone,
          birthday: payload?.birthday,
        },
        { where: { userid: userId } }
      );
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to Update User.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

// DELETE User
const DeleteUserService = (userId) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.User.destroy({ where: { userid: userId } });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to delete User.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

module.exports = {
  GetAllUserService,
  GetUserIdService,
  UpdateUserService,
  DeleteUserService,
};
