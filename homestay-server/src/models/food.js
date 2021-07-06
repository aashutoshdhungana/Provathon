'use strict';
import Sequelize from 'sequelize';
import db from './index';

const Homestay = db.Homestay;

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
  })

  Food.belongsTo(Homestay)
  return Food;
};