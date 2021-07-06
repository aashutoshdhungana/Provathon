'use strict';
import { Model, Sequelize } from 'sequelize';
export default (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    userId: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false

    },
    fistName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    lastName: {
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
        len: [6, 20]
      }
    },
    phoneNum: {
      type: DataTypes.STRING,
    }
  }, {
    sequelize,
    modelName: 'User'
  })
  return User;
};