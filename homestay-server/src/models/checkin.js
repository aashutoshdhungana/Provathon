'use strict';
import {Sequelize} from 'sequelize';
module.exports = (sequelize, DataTypes) => {
  var CheckIn = sequelize.define('CheckIn', {
    checkInId: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
    },

    isValid: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    
  }, {
    sequelize,
    modelName: 'Sequelize'
  });

  CheckIn.associate = function(models) {
    CheckIn.belongsTo(models.Homestay, {foreignKey: 'homestayId'});
    CheckIn.belongsTo(models.User, {foreignKey: 'userId'})
  };
  return CheckIn;
};