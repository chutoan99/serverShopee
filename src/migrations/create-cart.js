"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Carts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      cartid: { type: Sequelize.STRING },
      userid: { type: Sequelize.STRING },
      itemid: { type: Sequelize.STRING },
      shopid: { type: Sequelize.STRING },
      name: { type: Sequelize.STRING },
      image: { type: Sequelize.STRING },
      historical_sold: { type: Sequelize.INTEGER },
      price: { type: Sequelize.INTEGER },
      price_min: { type: Sequelize.INTEGER },
      stock: { type: Sequelize.INTEGER },
      price_max: { type: Sequelize.INTEGER },
      price_min_before_discount: { type: Sequelize.INTEGER },
      price_max_before_discount: { type: Sequelize.INTEGER },
      discount: { type: Sequelize.STRING },
      raw_discount: { type: Sequelize.INTEGER },

      shop_rating: { type: Sequelize.INTEGER },
      amount: { type: Sequelize.INTEGER },
      option: { type: Sequelize.STRING },
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
    await queryInterface.dropTable("Carts");
  },
};
