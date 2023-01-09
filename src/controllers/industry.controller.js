const {
  GetAllIndustryService,
  GetAllIndustryWithCategoryService,
} = require("../services/industry.service");
const { internalServerError } = require("../middleWares/handle_errors");

const GetAllIndustryController = async (req, res) => {
  try {
    const response = await GetAllIndustryService();
    return res.status(200).json(response);
  } catch (error) {
    return internalServerError(res);
  }
};

const GetAllIndustryWithCategoryController = async (req, res) => {
  try {
    const query = req.query;
    const response = await GetAllIndustryWithCategoryService(query);
    return res.status(200).json(response);
  } catch (error) {
    return internalServerError(res);
  }
};
module.exports = {
  GetAllIndustryController,
  GetAllIndustryWithCategoryController,
};
