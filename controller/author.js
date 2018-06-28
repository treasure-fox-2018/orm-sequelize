const Model = require("../models")
const Sequelize = require("sequelize")
const Op = Sequelize.Op

class Author {

  static add (first_name, last_name, religion, gender, age) {
    Model.Author.create({
      first_name: first_name, 
      last_name: last_name, 
      religion: religion, 
      gender: gender, 
      age: age
    })
      .then(data => {
        let dataAdd = data.get({plain: true})
        console.log(`Data successfull add`, dataAdd)
      })
      .catch(err => {
        console.log(err);
      })
  }

  static readOne(id) {
    Model.Author.findById(id)
      .then(data => {
        const dataReadOne = data.get({plain: true})
        console.log(dataReadOne);
      })
      .catch(err => {
        console.log(err);
      })
  }
  
  static readAll() {
    Model.Author.findAll({
      where: {
        age: {
          [Op.gte]: 18
        }
      }})
      .then(data => {
        if (data.length === 0) {
          console.log("Data not found");
        } else {
          const dataAll = data
          for (let i = 0; i < data.length; i++) {
            console.log(data[i].dataValues);
          }
        }
        
      })
      .catch(err => {
        console.log("Message", err);
      })
  }

  static updateAuthor(id, first_name, last_name, religion, gender, age) {
    Model.Author.update({
      first_name: first_name, 
      last_name: last_name, 
      religion: religion, 
      gender: gender, 
      age: age
    }, {
    where: {
      id: {
        [Op.eq]: id
      }
    }})
      .then(data => {
        if (data[0] == 1) {
          console.log(`Data ${id} Successfully update`);
        } else {
          console.log(`Data id ${id} not found`);
        }
      })
      .catch(err => {
        console.log(err);
      })
  }

  static deleteAuthor(id) {
    Model.Author.destroy({where: {id: id}})
      .then(data => {
        if (data === 1) {
          console.log(`Data id ${id} success deleted`);
        } else {
          console.log(`Data id ${id} has deleted`);
        }
      })
      .catch(err => {
        console.log(err);
      })
  }
}

module.exports = Author