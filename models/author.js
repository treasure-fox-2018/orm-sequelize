'use strict';
module.exports = (sequelize, DataTypes) => {
  var Author = sequelize.define('Author', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    religion: DataTypes.STRING,
    gender: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {});

  Author.addAuthor = function(first_name, last_name, religion, gender, age) {
    return new Promise(function(resolve, reject) {
      Author.create({
        first_name: first_name,
        last_name: last_name,
        religion: religion,
        gender: gender,
        age: age,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
        .then(function(newAuthor) {
          resolve(newAuthor)
        })
        .catch(function(err) {
          reject(err)
        })
    })
  }

  Author.read_one = function(id) {
    return new Promise(function(resolve, reject) {
      Author.findById(id)
      .then(function(foundAuthor) {
        resolve(foundAuthor)
      })
      .catch(function(err) {
        reject(err)
      })
    })
  }

  Author.read_all = function() {
    return new Promise(function(resolve, reject) {
      Author.findAll()
      .then(function(allAuthor) {
        resolve(allAuthor)
      })
      .catch(function(err) {
        reject(err)
      })
    })
  }

  Author.updateAuthor = function(inputId, first_name, last_name, religion, gender, age) {
    return new Promise(function(resolve, reject) {
      Author.update({
          first_name: first_name,
          last_name: last_name,
          religion: religion,
          gender: gender,
          age: age,
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

  Author.deleteAuthor = function(inputId) {
    return new Promise(function(resolve, reject) {
      Author.destroy({
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

  Author.associate = function(models) {
    // associations can be defined here
  };
  return Author;
};