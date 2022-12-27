const insertService = require("../services/insertData.service");
const { internalServerError } = require("../middleWares/handle_errors");

const insertController = async (req, res) => {
  try {
    const response = insertService();
    return res.status(200).json(response);
  } catch (error) {
    internalServerError(res);
  }
};

module.exports = insertController;
