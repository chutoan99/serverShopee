"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Comment.init(
    {
      orderid: DataTypes.STRING,
      itemid: DataTypes.STRING,
      cmtid: DataTypes.STRING,
      rating: DataTypes.INTEGER,
      userid: DataTypes.STRING,
      shopid: DataTypes.STRING,
      comment: DataTypes.STRING,
      rating_star: DataTypes.INTEGER,
      status: DataTypes.INTEGER,
      author_username: DataTypes.STRING,
      images: DataTypes.TEXT,
      videos: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Comment",
    }
  );
  return Comment;
};
