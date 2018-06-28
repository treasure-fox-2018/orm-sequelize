'use strict';
module.exports = (sequelize, DataTypes) => {
  var Author = sequelize.define('Author', {
    first_name: DataTypes.TEXT,
    last_name: DataTypes.TEXT,
    religion: DataTypes.TEXT,
    gender: DataTypes.TEXT,
    age: DataTypes.INTEGER,
    createdAt: Date.now(),
    updatedAt: Date.now()
  }, {});
  Author.associate = function(models) {
    // associations can be defined here
  };
  return Author;
};