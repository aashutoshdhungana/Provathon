'use strict';

// Should I convert or not
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      userId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false
      },

      lastName: {
        type: Sequelize.STRING,
        allowNull:false
      },

      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      phoneNum: {
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};