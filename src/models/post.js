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
        as: "categories",
      });

      Post.belongsTo(models.Video, {
        foreignKey: "itemid",
        targetKey: "itemid",
        as: "video",
      });

      Post.belongsTo(models.Attribute, {
        foreignKey: "itemid",
        targetKey: "itemid",
        as: "attributes",
      });

      Post.belongsTo(models.Shop, {
        foreignKey: "shopid",
        targetKey: "shopid",
        as: "shop_info",
      });
      Post.belongsTo(models.DeepDiscountSkin, {
        foreignKey: "itemid",
        targetKey: "itemid",
        as: "deep_discount_skin",
      });
      Post.belongsTo(models.VoucherProduct, {
        foreignKey: "itemid",
        targetKey: "itemid",
        as: "voucher",
      });
    }
  }
  Post.init(
    {
      itemid: DataTypes.BIGINT,
      shopid: DataTypes.BIGINT,
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
      view_count: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Post",
    }
  );
  return Post;
};
