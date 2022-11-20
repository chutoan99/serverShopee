const datas = require("../../data/data");
const comments = require("../../data/comment");
const descriptionModel = require("../models/description");
const postModel = require("../models/post");
const userModel = require("../models/user");
const overviewModel = require("../models/overview");
const { v4 } = require("uuid");
const bcrypt = require("bcrypt");

const hashPassWord = (password) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(12)); // HASH PASSWORD

const dataController = {
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
      });
    } catch (err) {
      res.json("lỗi server");
    }
  },

  // Get AlL Data
  getAllData: async (req, res) => {
    try {
      res.json(datas);
    } catch (err) {
      res.json("lỗi server");
    }
  },
  // Get Data With ID
  getDataId: async (req, res) => {
    try {
      const { itemid } = req.params;
      const item = datas.items.filter((value) => value.itemid == itemid);
      res.json(item);
    } catch (err) {
      res.json("lỗi server");
    }
  },
  // Get Comment WITH ID
  getCommentId: async (req, res) => {
    try {
      const { itemid } = req.params;
      const result = [];
      const len = comments.length;
      for (let i = 0; i < len; i++) {
        let item = comments[i];
        if (item.data.ratings) {
          result.push(
            ...item.data.ratings.filter((rat) => rat.itemid == itemid)
          );
        }
      }
      res.json(result);
    } catch (err) {
      res.json("lỗi server na");
    }
  },
};

module.exports = dataController;
