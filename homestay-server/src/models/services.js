'use strict';
import {Sequelize} from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  var Service = sequelize.define('Service', {
    serviceId: {
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
  })

  Service.associate = function(models) {
    Service.belongsTo(models.Homestay, {foreignKey: 'homestayId'});
  };
  return Service;
};