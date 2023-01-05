const {
  GetAllCategoriesTreeService,
} = require("../services/categoryTree.service");
const { internalServerError } = require("../middleWares/handle_errors");

const GetAllCategoriesTreeController = async (req, res) => {
  try {
    const { level } = req.params;
    const response = await GetAllCategoriesTreeService(level);
    return res.status(200).json(response);
  } catch (error) {
    return internalServerError(res);
  }
};

module.exports = {
  GetAllCategoriesTreeController,
};
