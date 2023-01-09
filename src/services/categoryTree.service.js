const db = require("../models");

// GET ALL Categories tree
const GetAllCategoriesTreeService = (level) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.HomeCategory.findAll({
        where: {
          level: level,
        },
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to get all  Categories tree",
        total: response.length,
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

// GET ALL Categories tree
const GetAllCategoriesParentService = (catid) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.HomeCategory.findAll({
        where: {
          parent_catid: catid,
        },
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to get all  Categories tree",
        total: response.length,
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

module.exports = {
  GetAllCategoriesTreeService,
  GetAllCategoriesParentService,
};
