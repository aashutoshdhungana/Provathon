'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Reviews', {
      reviewId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },

      description: {
        type: Sequelize.STRING,
        allowNull: false
      },

      stars: { 
        type: Sequelize.DECIMAL,
        allowNull: false,
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
    await queryInterface.dropTable('Reviews');
  }
};