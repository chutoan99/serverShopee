const db = require("../models");

// GET ALL cart
const GetAllBannerService = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Banner.findAll({});
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to get all banner.",
        total: response.length,
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

module.exports = {
  GetAllBannerService,
};
