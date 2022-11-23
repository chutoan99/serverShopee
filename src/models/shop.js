const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shopSchema = new Schema(
  {
    shopId: {
      type: String,
    },
    shopid: { type: Number },
    userid: { type: Number },
    place: { type: String },
    portrait: { type: String },
    username: { type: String },
    is_official_shop: { type: Boolean },
    shop_location: { type: String },
    item_count: { type: Number },
    rating_star: { type: Number },
    name: { type: String },
    follower_count: { type: Number },
    rating_bad: { type: Number },
    rating_good: { type: Number },
    rating_normal: { type: Number },
    status: { type: Number },
  },
  { timestamps: true }
);

const shopModel = mongoose.model("shop", shopSchema);
module.exports = shopModel;
