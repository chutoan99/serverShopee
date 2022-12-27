const {
  GetAllUserService,
  GetUserIdService,
  UpdateUserService,
  DeleteUserService,
} = require("../services/user.service");
const { internalServerError } = require("../middleWares/handle_errors");

const GetAllUserController = async (req, res) => {
  try {
    const response = await GetAllUserService();
    return res.status(200).json(response);
  } catch (error) {
    internalServerError(res);
  }
};

const GetUserIdController = async (req, res) => {
  const { userId } = req.user;
  console.log("xx", req.user);
  try {
    const response = await GetUserIdService(userId);
    return res.status(200).json(response);
  } catch (error) {
    internalServerError(res);
  }
};

const UpdateUserController = async (req, res) => {
  const payload = req.body;
  const { userId } = req.user;
  try {
    const response = await UpdateUserService(userId, payload);
    return res.status(200).json(response);
  } catch (error) {
    internalServerError(res);
  }
};

const DeleteUserController = async (req, res) => {
  const { userId } = req.user;
  try {
    const response = await DeleteUserService(userId);
    return res.status(200).json(response);
  } catch (error) {
    internalServerError(res);
  }
};

module.exports = {
  GetAllUserController,
  GetUserIdController,
  UpdateUserController,
  DeleteUserController,
};
