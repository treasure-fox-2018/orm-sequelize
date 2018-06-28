'use strict';
module.exports = (sequelize, DataTypes) => {
  var Article = sequelize.define('Article', {
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    AuthorId: DataTypes.INTEGER,
    TagId: DataTypes.INTEGER
  }, {});
  Article.associate = function(models) {
    // associations can be defined here
  };
  return Article;
};