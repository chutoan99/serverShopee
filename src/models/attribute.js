const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const attributeSchema = new Schema(
  {
    attributeId: {
      type: String,
    },
    name: {
      type: Array,
    },
    value: {
      type: Array,
    },
  },
  { timestamps: true }
);

const attributeModel = mongoose.model("attribute", attributeSchema);
module.exports = attributeModel;
