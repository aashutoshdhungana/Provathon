'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Bookmarks', {
      bookmarkId: {
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
    await queryInterface.dropTable('Bookmarks');
  }
};