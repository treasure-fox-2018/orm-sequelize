'use strict';
module.exports = (sequelize, DataTypes) => {
  var Authors = sequelize.define('Author', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    religion: DataTypes.STRING,
    gender: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {});
  Authors.associate = function(models) {
    // associations can be defined here
  };
  return Authors;
};
