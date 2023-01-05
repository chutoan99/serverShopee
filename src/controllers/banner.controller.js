const { GetAllBannerService } = require("../services/banner.service");
const { internalServerError } = require("../middleWares/handle_errors");

const GetAllBannerController = async (req, res) => {
  try {
    const response = await GetAllBannerService();
    return res.status(200).json(response);
  } catch (error) {
    return internalServerError(res);
  }
};

module.exports = {
  GetAllBannerController,
};
