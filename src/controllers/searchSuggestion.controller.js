const {
  GetAllSearchSuggestionService,
} = require("../services/searchSuggestion.service");
const { internalServerError } = require("../middleWares/handle_errors");

const GetAllSearchSuggestionController = async (req, res) => {
  try {
    const response = await GetAllSearchSuggestionService();
    return res.status(200).json(response);
  } catch (error) {
    return internalServerError(res);
  }
};

module.exports = {
  GetAllSearchSuggestionController,
};
