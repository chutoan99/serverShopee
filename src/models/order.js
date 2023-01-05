"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order.init(
    {
      orderid: DataTypes.BIGINT,
      userid: DataTypes.BIGINT,
      itemid: DataTypes.BIGINT,
      shopid: DataTypes.BIGINT,
      name: DataTypes.STRING,
      image: DataTypes.STRING,
      historical_sold: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      price_min: DataTypes.INTEGER,
      stock: DataTypes.INTEGER,
      price_max: DataTypes.INTEGER,
      price_min_before_discount: DataTypes.INTEGER,
      price_max_before_discount: DataTypes.INTEGER,
      discount: DataTypes.STRING,
      raw_discount: DataTypes.INTEGER,
      shop_rating: DataTypes.INTEGER,
      amount: DataTypes.INTEGER,
      option: DataTypes.STRING,
      state: DataTypes.STRING,
      note: DataTypes.STRING,
      shiped: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
