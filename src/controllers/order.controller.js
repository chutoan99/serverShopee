const {
  GetAllOrderService,
  GetOrderIdService,
  AddOrderService,
  UpdateOrderService,
  DeleteOrderService,
} = require("../services/order.service");
const { internalServerError } = require("../middleWares/handle_errors");

// GET ALL order
const GetAllOrderController = async (req, res) => {
  try {
    const response = await GetAllOrderService();
    return res.status(200).json(response);
  } catch (error) {
    internalServerError(res);
  }
};

const GetOrderIdController = async (req, res) => {
  const { orderid } = req.params;
  try {
    const response = await GetOrderIdService(orderid);
    return res.status(200).json(response);
  } catch (error) {
    internalServerError(res);
  }
};

// ADD  order
const AddOrderController = async (req, res) => {
  const payload = req.body;
  try {
    const response = await AddOrderService(payload);
    return res.status(200).json(response);
  } catch (error) {
    internalServerError(res);
  }
};

// Update order
const UpdateOrderController = async (req, res) => {
  const payload = req.body;
  const { orderid } = req.params;
  try {
    const response = await UpdateOrderService(orderid, payload);
    return res.status(200).json(response);
  } catch (error) {
    internalServerError(res);
  }
};

// DELETE order
const DeleteOrderController = async (req, res) => {
  const { orderid } = req.params;
  try {
    const response = await DeleteOrderService(orderid);
    return res.status(200).json(response);
  } catch (error) {
    internalServerError(res);
  }
};

module.exports = {
  GetAllOrderController,
  GetOrderIdController,
  AddOrderController,
  UpdateOrderController,
  DeleteOrderController,
};
