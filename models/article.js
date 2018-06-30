'use strict';
module.exports = (sequelize, DataTypes) => {
  var Article = sequelize.define('Article', {
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    authorId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER
  }, {});

  // class method
  Article.addArticle = function(title, body, authorId, tagId) {
    return new Promise(function(resolve, reject) {
      Article.create({
        title: title,
        body: body,
        authorId: authorId,
        tagId: tagId,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
        .then(function(newArticle) {
          resolve(newArticle)
        })
        .catch(function(err) {
          reject(err)
        })
    })
  }

  Article.read_one = function(id) {
    return new Promise(function(resolve, reject) {
      Article.findById(id)
      .then(function(foundArticle) {
        resolve(foundArticle)
      })
      .catch(function(err) {
        reject(err)
      })
    })
  }

  Article.read_all = function() {
    return new Promise(function(resolve, reject) {
      Article.findAll()
      .then(function(allArticle) {
        resolve(allArticle)
      })
      .catch(function(err) {
        reject(err)
      })
    })
  }

  Article.updateArticle = function(inputId, newTitle, newBody, newAuthorId, newTagId) {
    return new Promise(function(resolve, reject) {
      Article.update({
          title: newTitle,
          body: newBody,
          authorId: newAuthorId,
          tagId: newTagId,
          updatedAt: new Date()
        },
         {where: {id: inputId},
         returning: true,
         plain: true
        })
      .then(function(updated) {
        resolve(updated[1])
      })
      .catch(function(err) {
        reject(err)
      })
    })
  }

  Article.deleteArticle = function(inputId) {
    return new Promise(function(resolve, reject) {
      Article.destroy({
        where: {
          id: inputId
        }
      })
      .then(function(result) {
        resolve(result)
      })
      .catch(function(err) {
        reject(err)
      })
    })
  }

  Article.associate = function(models) {
    // associations can be defined here
  };
  return Article;
};