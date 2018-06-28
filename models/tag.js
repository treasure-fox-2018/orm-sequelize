'use strict';
module.exports = (sequelize, DataTypes) => {
  var Tag = sequelize.define('Tag', {
    name: DataTypes.TEXT
  }, {});
  Tag.associate = function(models) {
    // associations can be defined here
  };
  return Tag;
};