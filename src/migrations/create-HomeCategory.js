"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("HomeCategories", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      display_name: { type: Sequelize.STRING(10000) },
      catid: { type: Sequelize.BIGINT },
      parent_catid: { type: Sequelize.INTEGER },
      name: { type: Sequelize.STRING(10000) },
      image: { type: Sequelize.STRING(10000) },
      unselected_image: { type: Sequelize.STRING(10000) },
      selected_image: { type: Sequelize.STRING(10000) },
      level: { type: Sequelize.INTEGER },

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
    await queryInterface.dropTable("HomeCategories");
  },
};
