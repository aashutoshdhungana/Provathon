'use strict';
import { Model, Sequelize } from 'sequelize';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    userId: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false

    },
    firstName: {
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
      }
    },
    phoneNum: {
      type: DataTypes.STRING,
    }
  }, {
    sequelize,
    modelName: 'User'
  });
  
  User.associate = function (models) {
    User.hasMany(models.Bookmark, {foreignKey: 'userId'});
    User.hasMany(models.Review, {foreignKey: 'userId'});
    User.hasMany(models.CheckIn, {foreignKey: 'userId'});
  };
  return User;
};