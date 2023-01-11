"use strict";

const { INTEGER } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Videos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      itemid: { type: Sequelize.BIGINT },
      video_id: { type: Sequelize.STRING(10000) },
      thumb_url: { type: Sequelize.STRING(10000) },
      duration: { type: Sequelize.INTEGER },
      version: { type: Sequelize.INTEGER },
      width: { type: Sequelize.INTEGER },
      height: { type: Sequelize.INTEGER },
      defn: { type: Sequelize.STRING(10000) },
      profile: { type: Sequelize.STRING(10000) },
      url: { type: Sequelize.STRING(10000) },
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Videos");
  },
};
