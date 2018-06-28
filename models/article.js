'use strict';
module.exports = (sequelize, DataTypes) => {
  var article = sequelize.define('article', {
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    AuthorId: DataTypes.INTEGER,
    TagId: DataTypes.INTEGER
  }, {});
  article.associate = function(models) {
    // associations can be defined here
    
  };
  return article;
};