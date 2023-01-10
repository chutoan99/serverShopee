// const {
//   insertService,
//   insertCommentService,
//   InsertPostService,
//   insertShopService,
//   insertIndustries,
// } = require("../services/insertData.service");
// const { internalServerError } = require("../middleWares/handle_errors");

// // INSERT ALL shop
// const insertIndustriesController = async (req, res) => {
//   try {
//     for (let index = 1; index < 15; index++) {
//       const global_cats = require(`../../../data/cate/cate_${index}.json`).data
//         .global_cats;
//       await global_cats.forEach(async (item, i) => {
//         insertIndustries(item, index, i);
//       });
//     }
//   } catch (error) {
//     internalServerError(res);
//   }
// };

// const insertController = async (req, res) => {
//   try {
//     const response = insertService();
//     return res.status(200).json(response);
//   } catch (error) {
//     internalServerError(res);
//   }
// };
// // INSERT comment
// const insertCommentController = async (req, res) => {
//   try {
//     for (let index = 0; index < 500; index++) {
//       const ratings = require(`../../../data/ratings/rating_${index}.json`).data
//         ?.ratings;
//       await ratings.forEach(async (item, i) => {
//         await insertCommentService(item, index, i);
//       });
//     }
//   } catch (error) {
//     return internalServerError(res);
//   }
// };

// const InsertPostController = async (req, res) => {
//   try {
//     for (let index = 100; index < 250; index++) {
//       const hotItems = require(`../../../data/post/hot_items_${index}.json`)
//         .data.items;
//       await hotItems.forEach(async (item, i) => {
//         await InsertPostService(item, index, i);
//       });
//     }
//   } catch (error) {
//     internalServerError(res);
//   }
// };
// // INSERT ALL shop
// const insertShopController = async (req, res) => {
//   try {
//     for (let index = 0; index < 500; index++) {
//       const item = require(`../../../data/shopDetail/shopDetail_${index}.json`);
//       insertShopService(item, index);
//     }
//   } catch (error) {
//     internalServerError(res);
//   }
// };
// module.exports = {
//   insertController,
//   insertCommentController,
//   InsertPostController,
//   insertShopController,
//   insertIndustriesController,
// };
