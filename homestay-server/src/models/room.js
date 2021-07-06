'use strict';
import { Model, Sequelize } from 'sequelize';
import db from './index';

let Homestay = db.Homestay;

module.exports = (sequelize, DataTypes) => {
  var Room = sequelize.define('Room', {
    roomId: {
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

    price: {
      type: DataTypes.DECIMAL(10,2)
    },    
  })
  Room.belongsTo(Homestay)
  return Room;
};