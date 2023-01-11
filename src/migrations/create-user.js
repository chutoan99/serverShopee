"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      sex: { type: Sequelize.STRING(10000) },
      userid: { type: Sequelize.BIGINT },
      password: { type: Sequelize.STRING(10000) },
      email: { type: Sequelize.STRING(10000) },
      name: { type: Sequelize.STRING(10000) },
      address: { type: Sequelize.STRING(10000) },
      birthday: { type: Sequelize.STRING(10000) },
      phone: { type: Sequelize.INTEGER },
      avatar: { type: Sequelize.STRING(10000) },
      role: { type: Sequelize.STRING(10000) },
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
    await queryInterface.dropTable("Users");
  },
};
