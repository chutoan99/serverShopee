const {
  GetAllCategoriesTreeService,
  GetAllCategoriesParentService,
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
const GetAllCategoriesParentController = async (req, res) => {
  try {
    const { catid } = req.params;
    console.log(req);
    const response = await GetAllCategoriesParentService(catid);
    return res.status(200).json(response);
  } catch (error) {
    return internalServerError(res);
  }
};
module.exports = {
  GetAllCategoriesTreeController,
  GetAllCategoriesParentController,
};
