const db = require("../models");

// GET ALL cart
const GetAllNotificationService = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Notification.findAll({});
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to get all Notification.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

module.exports = {
  GetAllNotificationService,
};
