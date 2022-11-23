const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tierVariationSchema = new Schema(
  {
    tierVariationId: {
      type: String,
    },
    name: {
      type: Array,
    },
    option: {
      type: Array,
    },
    img: {
      type: Array,
    },
  },
  { timestamps: true }
);

const tierVariationModel = mongoose.model("tierVariation", tierVariationSchema);
module.exports = tierVariationModel;
