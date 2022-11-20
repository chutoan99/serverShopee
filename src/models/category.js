const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categoriesSchema = new Schema(
  {
    categoryId: {
      type: String,
    },
    display_name: {
      type: Array,
    },
    catid: {
      type: Array,
    },
  },
  { timestamps: true }
);

const categoryModel = mongoose.model("category", categoriesSchema);
module.exports = categoryModel;
