'use strict';
module.exports = (sequelize, DataTypes) => {
  var tag = sequelize.define('tag', {
    name: DataTypes.STRING
  }, {});
  tag.associate = function(models) {
    // associations can be defined here
  };
  return tag;
};