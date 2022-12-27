"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post.belongsTo(models.Description, {
        foreignKey: "itemid", //khoa1 phu5
        targetKey: "itemid",
        as: "Descriptions",
      });
      Post.belongsTo(models.Category, {
        foreignKey: "itemid",
        targetKey: "itemid",
        as: "Categories",
      });

      Post.belongsTo(models.Video, {
        foreignKey: "itemid",
        targetKey: "itemid",
        as: "Videos",
      });

      Post.belongsTo(models.TierVariation, {
        foreignKey: "itemid",
        targetKey: "itemid",
        as: "TierVariations",
      });

      Post.belongsTo(models.Attribute, {
        foreignKey: "itemid",
        targetKey: "itemid",
        as: "Attributes",
      });

      Post.belongsTo(models.Shop, {
        foreignKey: "shopid",
        targetKey: "shopid",
        as: "Shops",
      });
    }
  }
  Post.init(
    {
      itemid: DataTypes.STRING,
      shopid: DataTypes.STRING,
      currency: DataTypes.STRING,
      stock: DataTypes.INTEGER,
      status: DataTypes.INTEGER,
      sold: DataTypes.INTEGER,
      liked_count: DataTypes.INTEGER,
      catid: DataTypes.INTEGER,
      cmt_count: DataTypes.INTEGER,
      discount: DataTypes.STRING,
      raw_discount: DataTypes.INTEGER,
      size_chart: DataTypes.STRING,
      shop_name: DataTypes.STRING,
      transparent_background_image: DataTypes.STRING,
      images: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Post",
    }
  );
  return Post;
};
