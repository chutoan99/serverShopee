const {
  getAllShopService,
  getShopIDService,
  updateShopService,
  addShopService,
  deleteShopService,
} = require("../services/shop.service");
const { internalServerError } = require("../middleWares/handle_errors");

// GET ALL shop
const getAllShopController = async (req, res) => {
  const query = req.query;
  try {
    const response = await getAllShopService(query);
    return res.status(200).json(response);
  } catch (error) {
    internalServerError(res);
  }
};

// GET  shop ID
const getShopIdController = async (req, res) => {
  const { shopid } = req.params;
  try {
    const response = await getShopIDService(shopid);
    return res.status(200).json(response);
  } catch (error) {
    internalServerError(res);
  }
};

// UPDATE ALL shop
const updateShopController = async (req, res) => {
  const { shopid } = req.params;
  const payload = req.body;
  try {
    const response = await updateShopService(shopid, payload);
    return res.status(200).json(response);
  } catch (error) {
    internalServerError(res);
  }
};

// ADD  shop
const addShopController = async (req, res) => {
  const payload = req.body;
  try {
    const response = await addShopService(payload);
    return res.status(200).json(response);
  } catch (error) {
    internalServerError(res);
  }
};

// DELETE shop id
const deleteShopController = async (req, res) => {
  const { shopid } = req.params;
  try {
    const response = await deleteShopService(shopid);
    return res.status(200).json(response);
  } catch (error) {
    internalServerError(res);
  }
};

module.exports = {
  getAllShopController,
  getShopIdController,
  updateShopController,
  addShopController,
  deleteShopController,
};
