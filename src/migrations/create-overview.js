"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Overviews", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      itemid: { type: Sequelize.BIGINT },
      shopid: { type: Sequelize.BIGINT },
      name: { type: Sequelize.STRING },
      image: { type: Sequelize.STRING },
      historical_sold: { type: Sequelize.INTEGER },
      price: { type: Sequelize.BIGINT },
      price_min: { type: Sequelize.BIGINT },
      stock: { type: Sequelize.INTEGER },
      price_max: { type: Sequelize.BIGINT },
      price_min_before_discount: { type: Sequelize.BIGINT },
      price_max_before_discount: { type: Sequelize.BIGINT },
      discount: { type: Sequelize.STRING },
      shop_rating: { type: Sequelize.INTEGER },
      filename: { type: Sequelize.STRING },
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
    await queryInterface.dropTable("Overviews");
  },
};
