const {
  GetAllCartService,
  GetCartIdService,
  AddCartService,
  UpdateCartService,
  DeleteCartService,
} = require("../services/cart.service");
const { internalServerError } = require("../middleWares/handle_errors");

const GetAllCartController = async (req, res) => {
  try {
    const response = await GetAllCartService();
    return res.status(200).json(response);
  } catch (error) {
    return internalServerError(res);
  }
};

const GetCartIdController = async (req, res) => {
  const { cartid } = req.params;
  try {
    const response = await GetCartIdService(cartid);
    return res.status(200).json(response);
  } catch (error) {
    return internalServerError(res);
  }
};

const AddCartController = async (req, res) => {
  const payload = req.body;
  try {
    const response = await AddCartService(payload);
    return res.status(200).json(response);
  } catch (error) {
    return internalServerError(res);
  }
};

const UpdateCartController = async (req, res) => {
  const payload = req.body;
  const { cartid } = req.params;
  try {
    const response = await UpdateCartService(cartid, payload);
    return res.status(200).json(response);
  } catch (error) {
    return internalServerError(res);
  }
};

const DeleteCartController = async (req, res) => {
  const { cartid } = req.params;
  try {
    const response = await DeleteCartService(cartid);
    return res.status(200).json(response);
  } catch (error) {
    return internalServerError(res);
  }
};

module.exports = {
  GetAllCartController,
  GetCartIdController,
  AddCartController,
  UpdateCartController,
  DeleteCartController,
};
