"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Shop extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Shop.hasOne(models.Shop, {
        foreignKey: "shopid",
        as: "Shops",
      });
    }
  }
  Shop.init(
    {
      shopid: DataTypes.STRING,
      userid: DataTypes.STRING,
      is_official_shop: DataTypes.BOOLEAN,
      item_count: DataTypes.INTEGER,
      rating_star: DataTypes.INTEGER,
      name: DataTypes.STRING,
      follower_count: DataTypes.INTEGER,
      rating_bad: DataTypes.INTEGER,
      rating_good: DataTypes.INTEGER,
      rating_normal: DataTypes.INTEGER,
      status: DataTypes.INTEGER,
      shop_location: DataTypes.STRING,
      username: DataTypes.STRING,
      portrait: DataTypes.STRING,
      place: DataTypes.STRING,
      response_time: DataTypes.INTEGER,
      follower_count: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Shop",
    }
  );
  return Shop;
};
