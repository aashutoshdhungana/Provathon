'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Notifications', {
      notificationId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      homestayId: {
        type: Sequelize.UUID,
        references: {
          model: 'Homestays',
          key: 'homestayId'
        }
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Notifications');
  }
};