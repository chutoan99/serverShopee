"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TierVariation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      TierVariation.hasOne(models.Post, {
        foreignKey: "itemid",
        as: "TierVariations",
      });
    }
  }
  TierVariation.init(
    {
      itemid: DataTypes.STRING,
      name: DataTypes.TEXT,
      option: DataTypes.TEXT,
      img: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "TierVariation",
    }
  );
  return TierVariation;
};
