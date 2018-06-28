const Model = require("../models")

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
    Model.Author.findAll({raw: true})
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  static updateAuthor(id, first_name, last_name, religion, gender, age) {
    Model.Author.update({
      first_name: first_name, 
      last_name: last_name, 
      religion: religion, 
      gender: gender, 
      age: age
    }, { where: {id: id}})
      .then(data => {
        if (data[0] == 1) {
          console.log(`Data ${id}Successfully update`);
        } else {
          console.log("Data up to date");
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