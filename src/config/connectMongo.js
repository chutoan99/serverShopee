const mongoose = require("mongoose");
require("dotenv").config();

const connectMongodb = async () => {
  try {
    await mongoose.connect(
      process.env.MONGODB_CONECT,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => console.log(" Mongoose is connected")
    );
  } catch (e) {
    console.log("could not connect");
  }
};
module.exports = connectMongodb;
