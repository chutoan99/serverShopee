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
  const { userid } = req.user;
  try {
    const response = await GetUserIdService(userid);
    return res.status(200).json(response);
  } catch (error) {
    internalServerError(res);
  }
};

const UpdateUserController = async (req, res) => {
  const payload = req.body;
  const { userid } = req.user;
  try {
    const response = await UpdateUserService(userid, payload);
    return res.status(200).json(response);
  } catch (error) {
    internalServerError(res);
  }
};

const DeleteUserController = async (req, res) => {
  const { userid } = req.user;
  try {
    const response = await DeleteUserService(userid);
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
