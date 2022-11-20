const datas = require("../../data/data");
const comments = require("../../data/comment");
const descriptionModel = require("../models/description");
const postModel = require("../models/post");
const userModel = require("../models/user");
const overviewModel = require("../models/overview");
const categoryModel = require("../models/category");
const { v4 } = require("uuid");
const bcrypt = require("bcrypt");

const hashPassWord = (password) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(12)); // HASH PASSWORD

const insertController = {
  // insert data
  insertData: async (req, res) => {
    try {
      datas.items.map(async (item) => {
        await descriptionModel.create({
          descriptionId: item?.itemid,
          description: item?.description,
        });
        await postModel.create({
          overviewId: item?.itemid,
          descriptionId: item?.itemid,
          categoryId: item?.itemid,
          userId: item?.shopid,
          itemid: item?.itemid,
          shopid: item?.shopid,
          currency: item?.currency,
          status: item?.status,
          stock: item?.stock,
          images: JSON.stringify(item?.images),
          sold: item?.sold,
          liked_count: item?.liked_count,
          catid: item?.catid,
          cmt_count: item?.cmt_count,
          raw_discount: item?.raw_discount,
          size_chart: item?.size_chart || null,
          shop_name: item?.shop_name,
          transparent_background_image: item?.transparent_background_image,
        });
        await userModel.create({
          userId: item?.shopid,
          name: "",
          email: "",
          gender: "",
          address: "",
          phone: "",
          birthday: "",
          password: hashPassWord("12345"),
        });
        await overviewModel.create({
          overviewId: item?.itemid,
          itemid: item?.itemid,
          shopid: item?.shopid,
          name: item?.name,
          image: item?.image,
          historical_sold: item?.historical_sold,
          price: item?.price,
          price_min: item?.price_min,
          price_max: item?.price_max,
          price_min_before_discount: item?.price_min_before_discount,
          price_max_before_discount: item?.price_max_before_discount,
          discount: item?.discount,
          shop_rating: item?.shop_rating,
        });
        await categoryModel.create({
          categoryId: item?.itemid,
          display_name: item?.categories?.map((item) => item?.display_name),
          catid: item?.categories?.map((item) => item?.catid),
        });
      });
    } catch (err) {
      res.json("lỗi server");
    }
  },
  getData: async (req, res) => {
    try {
      await categoryModel
        .find({})
        .then((data) => {
          res.json(data);
        })
        .catch((err) => {
          res.json(err);
        });
    } catch (err) {
      res.json("lỗi server");
    }
  },
};

module.exports = insertController;
