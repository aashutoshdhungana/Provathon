'use strict';
import Sequelize from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  var Review = sequelize.define('Review', {
    reviewId: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
    },
    
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },

    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
    stars: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
          max: 5,
          min: 0
      }
    }
  }, {
    sequelize,
    modelName: 'Review'
  })

  Review.associate = function(models) {
    Review.belongsTo(models.Homestay, {foreignKey: 'homestayId'});
    Review.belongsTo(models.User, {foreignKey: 'userId'});
  };
  return Review;
};