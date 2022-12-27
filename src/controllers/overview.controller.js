const Joi = require("joi");
const cloudinary = require("cloudinary").v2;
const {
  GetOverviewIdService,
  GetAllOverviewService,
  UpdateOverviewService,
  DeleteOverviewService,
  AddOverviewService,
  GetAllid,
} = require("../services/overview.service");
const {
  internalServerError,
  badRequest,
} = require("../middleWares/handle_errors");
const { image, name, price } = require("../helpers/validate");

// logic

const GetAllOverviewController = async (req, res) => {
  const query = req.query;
  try {
    const response = await GetAllOverviewService(query);
    return res.status(200).json(response);
  } catch (error) {
    internalServerError(res);
  }
};

const AddOverviewController = async (req, res) => {
  const fileData = req.file;
  const payload = req.body;
  try {
    const { error } = Joi.object({ image, name, price }).validate({
      name: req.body.name,
      price: req.body.price,
      image: fileData.path,
    });
    if (error) {
      if (fileData) cloudinary.uploader.destroy(fileData.filename);
      return badRequest(error.details[0].message, res);
    }
    const response = await AddOverviewService(payload, fileData);
    return res.status(200).json(response);
  } catch (error) {
    internalServerError(res);
  }
};

const GetOverviewIdController = async (req, res) => {
  const { itemid } = req.params;
  try {
    const response = await GetOverviewIdService(itemid);
    return res.status(200).json(response);
  } catch (error) {
    internalServerError(res);
  }
};

const UpdateOverviewController = async (req, res) => {
  const { itemid } = req.params;
  const fileData = req.file;
  const payload = req.body;
  try {
    const response = await UpdateOverviewService(itemid, payload, fileData);
    return res.status(200).json(response);
  } catch (error) {
    internalServerError(res);
  }
};

const DeleteOverviewController = async (req, res) => {
  const { itemid } = req.params;
  const { fileName } = req.query;
  try {
    const response = await DeleteOverviewService(itemid, fileName);
    return res.status(200).json(response);
  } catch (error) {
    internalServerError(res);
  }
};
const GetAllController = async (req, res) => {
  try {
    const response = await GetAllid();
    return res.status(200).json(response);
  } catch (error) {
    internalServerError(res);
  }
};
module.exports = {
  GetAllOverviewController,
  GetOverviewIdController,
  UpdateOverviewController,
  DeleteOverviewController,
  AddOverviewController,
  GetAllController,
};
