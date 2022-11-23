const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const videoSchema = new Schema(
  {
    videoId: {
      type: String,
    },

    video_id: {
      type: String,
    },
    thumb_url: {
      type: String,
    },
    duration: { type: Number },
    version: { type: Number },
    defn: { type: String },
    profile: { type: String },
    url: { type: String },
    width: { type: Number },
    height: { type: Number },
  },
  { timestamps: true }
);

const videoModel = mongoose.model("video", videoSchema);
module.exports = videoModel;
