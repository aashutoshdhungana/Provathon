'use strict';
import Sequelize from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  var Notification = sequelize.define('Notification', {
    notificationId: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
    },
    
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
  });

  Notification.associate = function(models) {
    Notification.belongsTo(models.Homestay, {foreignKey: 'homestayId'});
  };
  return Notification;
};