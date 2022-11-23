const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    commentId: {
      type: String,
    },
    orderid: { type: Number },
    itemid: { type: Number },
    cmtid: { type: Number },
    rating: { type: Number },
    userid: { type: Number },
    shopid: { type: Number },
    comment: { type: String },
    rating_star: { type: Number },
    status: { type: Number },
    author_username: { type: String },
    images: { type: Array },
    videos: { type: Array },
  },
  { timestamps: true }
);

const commentModel = mongoose.model("comment", commentSchema);
module.exports = commentModel;
