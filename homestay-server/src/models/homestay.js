"use strict";
import { Model, Sequelize } from "sequelize";

module.exports = (sequelize, DataTypes) => {
  var Homestay = sequelize.define(
    "Homestay",
    {
      homestayId: {
        allowNull: false,
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },

      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },

      phoneNum: {
        type: DataTypes.STRING,
      },

      location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Homestay",
    }
  );

  Homestay.associate = function (models) {
    Homestay.hasMany(models.Room, { foreignKey: "homestayId" });
    Homestay.hasMany(models.Service, { foreignKey: "homestayId" });
    Homestay.hasMany(models.Attraction, { foreignKey: "homestayId" });
    Homestay.hasMany(models.Food, { foreignKey: "homestayId" });
    Homestay.belongsTo(models.Bookmark, { foreignKey: "homestayId" });
    Homestay.hasMany(models.Review, { foreignKey: "homestayId" });
    Homestay.hasMany(models.CheckIn, { foreignKey: "homestayId" });
    Homestay.hasMany(models.Notification, { foreignKey: "homestayId" });
  };

  return Homestay;
};
