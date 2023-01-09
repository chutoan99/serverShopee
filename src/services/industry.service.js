const db = require("../models");

// GET ALL Industry
const GetAllIndustryService = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Industry.findAll({
        attributes: { exclude: ["id", "createdAt", "updatedAt", "images"] },
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to get all Industry.",
        total: response.length,
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

// GET ALL WITH category_name
const GetAllIndustryWithCategoryService = ({ page, limit, category_name }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Industry.findAll({
        where: { display_name: category_name },
      });

      var catid = response[0]._previousDataValues.catid;
      const queries = {};
      page < 1 && page === 1;
      const offset = !page || +page <= 1 ? 0 : +page - 1;
      const fLimit = +limit || +process.env.LIMIT;
      // queries.offset = offset * fLimit;
      // queries.limit = fLimit;
      queries.catid = catid;
      const xx = { ...queries };
      console.log(catid);
      const response2 = await db.Overview.findAndCountAll({
        where: xx,
        // raw: true,
        // nest: true,
      });
      var total = Math.ceil(response2.count / limit);
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to get all Industry.",
        page: page ? +page : 0,
        limit: +limit ? +limit : +process.env.LIMIT,
        totalPage: total,
        response: response2,
      });
    } catch (error) {
      reject(error);
    }
  });

module.exports = {
  GetAllIndustryService,
  GetAllIndustryWithCategoryService,
};
