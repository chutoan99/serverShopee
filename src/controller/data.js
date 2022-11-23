const datas = require("../../data/data");
const comments = require("../../data/comment");
const { v4 } = require("uuid");
const bcrypt = require("bcrypt");
const overviewModel = require("../models/overview");
const hashPassWord = (password) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(12)); // HASH PASSWORD

const dataController = {
  // Get AlL Data
  getAllData: async (req, res) => {
    var page = req.query.page;
    try {
      if (page) {
        if (page < 1) {
          page = 1;
        }
        page = parseInt(page);
        var skip = (page - 1) * process.env.POST_LIMIT;
        overviewModel
          .find({})
          .limit(process.env.POST_LIMIT)
          .skip(skip)
          .then((data) =>
            res.json({
              limit: process.env.POST_LIMIT,
              page: page,
              res: data,
            })
          )
          .catch((err) => res.jon(err));
      } else {
        overviewModel
          .find({})
          .then((data) => res.json(data))
          .catch((err) => res.jon(err));
      }
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
