const { GetAllNotificationService } = require("../services/notify.service");
const { internalServerError } = require("../middleWares/handle_errors");

const GetAllNotificationController = async (req, res) => {
  try {
    const response = await GetAllNotificationService();
    return res.status(200).json(response);
  } catch (error) {
    return internalServerError(res);
  }
};

module.exports = {
  GetAllNotificationController,
};
