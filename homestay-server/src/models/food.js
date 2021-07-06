'use strict';
import Sequelize from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  var Food = sequelize.define('Food', {
    foodId: {
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
  }, {
    sequelize,
    modelName: 'Food'
  })

  Food.associate = function(models) {
    Food.belongsTo(models.Homestay, {foreignKey: 'homestayId'});
  };
  return Food;
};