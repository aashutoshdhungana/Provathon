"use strict";
import { Model, Sequelize } from "sequelize";

module.exports = (sequelize, DataTypes) => {
  var Room = sequelize.define("Room", {
    roomId: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
    },

    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    price: {
      type: DataTypes.DECIMAL,
    },
  });
  Room.associate = function (models) {
    Room.belongsTo(models.Homestay, { foreignKey: "homestayId" });
  };
  return Room;
};
