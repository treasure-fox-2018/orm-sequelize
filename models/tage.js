'use strict';
module.exports = (sequelize, DataTypes) => {
  var Tage = sequelize.define('Tage', {
    name: DataTypes.STRING
  }, {});
  Tage.associate = function(models) {
    // associations can be defined here
  };
  return Tage;
};