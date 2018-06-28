let Model = require('../models')
let Author = Model.Author
let View = require('../views/Views.js')
class ControllerAuthor {

  static Help() {
    View.helpAuthor()
  }

  static addAuthor(data) {
    let input = {
      first_name: data[0],
      last_name: data[1],
      religion: data[2],
      gender: data[3],
      age: data[4]
    }

    Author.create(input)
      .then(function (data) {
        View.viewCreate(data)
      })
      .catch(function (err) {
        View.viewErr(err)
      })


  }


  static readOne(id) {
    Author.findById(id)
      .then(data => {
        View.findById(data)
      })
      .catch(function (err) {
        View.viewErr(err)
      })
  }


  static findAll() {
    Author.findAll({
        raw: true
      })
      .then(function (data) {
        View.findAll(data)
      })
      .catch(function (err) {
        View.viewErr(err)
      })
  }


  static Updates(param) {
    let obj = {};
    let ide = param[0]
    obj.first_name = param[1]
    obj.last_name = param[2]
    obj.religion = param[3]
    obj.gender = param[4]
    obj.age = param[5]

    Author.update(obj, {
        where: {
          id: ide
        }
      })
      .then(function (data) {
        if (data) {
          Author.findById(ide, {
              raw: true
            })
            .then(function (dataAuth) {
              View.viewUpdate(dataAuth)
            })
        }

      })
      .catch(function (err) {
        View.viewErr(err)
      })

  }


  static Delete(ids) {
    Author.destroy({
        where: {
          id: ids
        }
      })
      .then(function (data) {
        View.viewDelete(data, ids)

      })
      .catch(function (err) {
        console.log(err)
      })
  }







}

module.exports = ControllerAuthor
