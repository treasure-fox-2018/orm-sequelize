'use strict';
module.exports = (sequelize, DataTypes) => {
  var Tag = sequelize.define('Tag', {
    name: DataTypes.STRING
  }, {});

  Tag.addTag = function(name) {
    return new Promise(function(resolve, reject) {
      Tag.create({
        name: name,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
        .then(function(newTag) {
          resolve(newTag)
        })
        .catch(function(err) {
          reject(err)
        })
    })
  }

  Tag.read_one = function(id) {
    return new Promise(function(resolve, reject) {
      Tag.findById(id)
      .then(function(foundTag) {
        resolve(foundTag)
      })
      .catch(function(err) {
        reject(err)
      })
    })
  }

  Tag.read_all = function() {
    return new Promise(function(resolve, reject) {
      Tag.findAll()
      .then(function(allTag) {
        resolve(allTag)
      })
      .catch(function(err) {
        reject(err)
      })
    })
  }

  Tag.updateTag = function(inputId, name) {
    return new Promise(function(resolve, reject) {
      Tag.update({
          name: name,
          updatedAt: new Date(),
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

  Tag.deleteTag = function(inputId) {
    return new Promise(function(resolve, reject) {
      Tag.destroy({
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

  Tag.associate = function(models) {
    // associations can be defined here
  };
  return Tag;
};