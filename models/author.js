'use strict';

module.exports = (sequelize, DataTypes) => {
  var Author = sequelize.define('Author', {
    first_name: DataTypes.CHAR,
    last_name: DataTypes.CHAR,
    religion: DataTypes.CHAR,
    gender: DataTypes.CHAR,
    age: DataTypes.INTEGER
  }, {});
  Author.associate = function(models) {
    // associations can be defined here
  };
  return Author;
};