const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    descriptionId: {
      type: String,
    },
    overviewId: {
      type: String,
    },
    categoryId: {
      type: String,
    },
    userId: {
      type: String,
    },
    itemid: {
      type: Number,
    },
    shopid: {
      type: Number,
    },
    currency: {
      type: String,
    },
    stock: {
      type: Number,
    },
    status: {
      type: Number,
    },
    sold: {
      type: Number,
    },
    liked_count: {
      type: Number,
    },
    catid: {
      type: Number,
    },
    cmt_count: {
      type: Number,
    },

    discount: {
      type: String,
    },
    raw_discount: {
      type: Number,
    },
    size_chart: {
      type: String,
    },
    shop_name: {
      type: String,
    },
    transparent_background_image: {
      type: String,
    },
    images: {
      type: String,
    },
  },
  { timestamps: true }
);

const postModel = mongoose.model("post", postSchema);
module.exports = postModel;
