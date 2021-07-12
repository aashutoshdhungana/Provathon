'use strict';
import Sequelize from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  var Bookmark = sequelize.define('Bookmark', {
    bookmarkId: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
    },   
  }, {
    sequelize,
    modelName: 'Bookmark'
  })

  Bookmark.associate = function(models) {
    Bookmark.hasOne(models.Homestay, {foreignKey: 'homestayId'});
    Bookmark.belongsTo(models.User, {foreignKey: 'userId'})
  };
  return Bookmark;
};