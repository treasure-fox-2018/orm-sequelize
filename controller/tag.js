const Model = require("../models")

class Tag {
  static add (name) {
    Model.Tag.create({
      name: name
    })
      .then(data => {
        let dataAdd = data.get({plain: true})
        console.log(dataAdd)
      })
      .catch(err => {
        console.log(err);
      })
  }

  static readOne(id) {
    Model.Tag.findById(id)
      .then(data => {
        const dataReadOne = data.get({plain: true})
        console.log(dataReadOne);
      })
      .catch(err => {
        console.log(err);
      })
  }
  
  static readAll() {
    Model.Tag.findAll({raw: true})
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  static updateTag(id, name) {
    Model.Tag.update({
      name: name
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

  static deleteTag(id) {
    Model.Tag.destroy({where: {id: id}})
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

module.exports = Tag