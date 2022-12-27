"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Comments", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      orderid: { type: Sequelize.STRING },
      itemid: { type: Sequelize.STRING },
      cmtid: { type: Sequelize.STRING },
      rating: { type: Sequelize.INTEGER },
      userid: { type: Sequelize.STRING },
      shopid: { type: Sequelize.STRING },
      comment: { type: Sequelize.STRING },
      rating_star: { type: Sequelize.INTEGER },
      status: { type: Sequelize.INTEGER },
      author_username: { type: Sequelize.STRING },
      images: { type: Sequelize.TEXT },
      videos: { type: Sequelize.TEXT },
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
    await queryInterface.dropTable("Comments");
  },
};
