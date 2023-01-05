"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Posts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      itemid: { type: Sequelize.BIGINT },
      shopid: { type: Sequelize.BIGINT },
      currency: { type: Sequelize.STRING },
      stock: { type: Sequelize.INTEGER },
      status: { type: Sequelize.INTEGER },
      sold: { type: Sequelize.INTEGER },
      liked_count: { type: Sequelize.INTEGER },
      catid: { type: Sequelize.INTEGER },
      cmt_count: { type: Sequelize.INTEGER },
      discount: { type: Sequelize.STRING },
      raw_discount: { type: Sequelize.INTEGER },
      size_chart: { type: Sequelize.STRING },
      shop_name: { type: Sequelize.STRING },
      transparent_background_image: { type: Sequelize.STRING },
      images: { type: Sequelize.STRING },
      view_count: { type: Sequelize.INTEGER },
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Posts");
  },
};
