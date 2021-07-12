'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('CheckIns', {
      checkInId: {
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

      userId: {
        type: Sequelize.UUID,
        references: {
          model: 'Users',
          key: 'userId'
        }
      },

      isValid: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
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
    await queryInterface.dropTable('CheckIns');
  }
};