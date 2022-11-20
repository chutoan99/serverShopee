const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    userId: {
      type: String,
    },
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    gender: {
      type: String,
    },
    address: {
      type: String,
    },
    phone: {
      type: Number,
    },
    birthday: {
      type: String,
    },
  },
  { timestamps: true }
);

const UserModel = mongoose.model("user", UserSchema);
module.exports = UserModel;
