'use strict';
import { Model, Sequelize } from 'sequelize';
import db from './index';
let Room = db.Room;
let Service = db.Service;
let Food = db.Food;
let Attraction = db.Attraction; 
export default (sequelize, DataTypes) => {
  var Homestay = sequelize.define('Homestay',{
    homestayId: {
      allowNull: false,
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },

    password: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        notEmpty: true,
      }
    },

    phoneNum: {
      type: DataTypes.STRING,
    },

    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
  },  {
    sequelize,
    modelName: Homestay
  })

  Homestay.hasMany(Room, {foreignKey: 'homestayId'});
  Homestay.hasMany(Service, {foreignKey: 'homestayId'});
  Homestay.hasMany(Attraction, {foreignKey: 'homestayId'});
  Homestay.hasMany(Food, {foreignKey: 'homestayId'});
  
  return Homestay;
};