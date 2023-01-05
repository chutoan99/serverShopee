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
      userid: { type: Sequelize.BIGINT },
      orderid: { type: Sequelize.BIGINT },
      itemid: { type: Sequelize.BIGINT },
      cmtid: { type: Sequelize.BIGINT },
      rating: { type: Sequelize.INTEGER },
      shopid: { type: Sequelize.BIGINT },
      comment: { type: Sequelize.STRING },
      rating_star: { type: Sequelize.INTEGER },
      status: { type: Sequelize.INTEGER },
      author_username: { type: Sequelize.STRING },
      author_portrait: { type: Sequelize.STRING },
      images: { type: Sequelize.TEXT },
      videos: { type: Sequelize.TEXT },
      model_name: { type: Sequelize.STRING },
      options: { type: Sequelize.TEXT },
      like_count: { type: Sequelize.INTEGER },
      liked: { type: Sequelize.BOOLEAN },
      mtime: { type: Sequelize.DATE },
      ctime: { type: Sequelize.DATE },
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
