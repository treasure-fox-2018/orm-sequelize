'use strict';

module.exports = (sequelize, DataTypes) => {
  var Tags = sequelize.define('Tags', {
    name: DataTypes.CHAR
  }, {});
  Tags.associate = function(models) {
    // associations can be defined here
  };
  return Tags;
};