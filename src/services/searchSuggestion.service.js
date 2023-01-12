const db = require("../models");

const GetAllSearchSuggestionService = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.SearchSuggestion.findAll({});
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to get all SearchSuggestion.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

module.exports = {
  GetAllSearchSuggestionService,
};
