const {
  insertService,
  insertCommentService,
  InsertPostService,
  insertShopService,
} = require("../services/insertData.service");
const { internalServerError } = require("../middleWares/handle_errors");

const insertController = async (req, res) => {
  try {
    const response = insertService();
    return res.status(200).json(response);
  } catch (error) {
    internalServerError(res);
  }
};
// INSERT comment
const insertCommentController = async (req, res) => {
  try {
    for (let index = 0; index < 100; index++) {
      const ratings = require(`../../../data/ratings/rating_${index}.json`).data
        ?.ratings;
      await ratings.forEach(async (item, i) => {
        await insertCommentService(item, index, i);
      });
    }
  } catch (error) {
    return internalServerError(res);
  }
};

const InsertPostController = async (req, res) => {
  try {
    for (let index = 0; index < 100; index++) {
      const hotItems = require(`../../../data/post/hot_items_${index}.json`)
        .data.items;
      await hotItems.forEach(async (item, i) => {
        await InsertPostService(item, index, i);
      });
    }
  } catch (error) {
    internalServerError(res);
  }
};
// INSERT ALL shop
const insertShopController = async (req, res) => {
  try {
    for (let index = 0; index < 1000; index++) {
      const item = require(`../../../data/shopDetail/shopDetail_${index}.json`);
      insertShopService(item, index);
    }
  } catch (error) {
    internalServerError(res);
  }
};
module.exports = {
  insertController,
  insertCommentController,
  InsertPostController,
  insertShopController,
};
