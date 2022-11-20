const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const overviewSchema = new Schema(
  {
    overviewId: {
      type: String,
    },
    itemid: {
      type: Number,
    },
    shopid: {
      type: Number,
    },
    name: {
      type: String,
    },
    image: {
      type: String,
    },
    historical_sold: {
      type: Number,
    },
    price: {
      type: Number,
    },
    price_min: {
      type: Number,
    },
    price_max: {
      type: Number,
    },
    price_min_before_discount: {
      type: Number,
    },
    price_max_before_discount: {
      type: Number,
    },
    discount: {
      type: String,
    },
    shop_rating: {
      type: Number,
    },
  },
  { timestamps: true }
);

const overviewModel = mongoose.model("overview", overviewSchema);
module.exports = overviewModel;
