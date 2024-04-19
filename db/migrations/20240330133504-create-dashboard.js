'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('dashboards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      client: {
        type: Sequelize.STRING
      },
      scheduled: {
        type: Sequelize.STRING
      },
      completed: {
        type: Sequelize.STRING
      },
      cancel: {
        type: Sequelize.STRING
      },
      selection: {
        type: Sequelize.STRING
      },
      onboarding: {
        type: Sequelize.STRING
      },
      offer: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('dashboards');
  }
};