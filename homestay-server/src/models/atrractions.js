'use strict';
import { userInfo } from 'os';
import Sequelize from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  var Attraction = sequelize.define('Attraction', {
    attractionId: {
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
    modelName: 'Attraction'
  })
  
  Attraction.associate = function(models) {
    Attraction.belongsTo(models.Homestay, {foreignKey: 'homestayId'});
  };
  return Attraction;
};