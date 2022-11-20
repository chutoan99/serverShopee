const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const descriptionSchema = new Schema(
  {
    descriptionId: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

const descriptionModel = mongoose.model("description", descriptionSchema);
module.exports = descriptionModel;
