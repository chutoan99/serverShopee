"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Orders", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      orderid: { type: Sequelize.STRING(10000) },
      userid: { type: Sequelize.BIGINT },
      itemid: { type: Sequelize.BIGINT },
      shopid: { type: Sequelize.BIGINT },
      name: { type: Sequelize.STRING(10000) },
      image: { type: Sequelize.STRING(10000) },
      historical_sold: { type: Sequelize.INTEGER },
      price: { type: Sequelize.INTEGER },
      price_min: { type: Sequelize.INTEGER },
      stock: { type: Sequelize.INTEGER },
      price_max: { type: Sequelize.INTEGER },
      price_min_before_discount: { type: Sequelize.INTEGER },
      price_max_before_discount: { type: Sequelize.INTEGER },
      discount: { type: Sequelize.STRING(10000) },
      shop_rating: { type: Sequelize.INTEGER },
      raw_discount: { type: Sequelize.INTEGER },
      amount: { type: Sequelize.INTEGER },
      option: { type: Sequelize.STRING(10000) },
      state: { type: Sequelize.STRING(10000) },
      note: { type: Sequelize.STRING(10000) },
      shiped: { type: Sequelize.BOOLEAN },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Orders");
  },
};
