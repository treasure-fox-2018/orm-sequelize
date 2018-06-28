let Model = require('../models')
let Tag = Model.Tag
let View = require('../views/Views.js')


class ControllerTag {
  static helpTag() {
    View.helpTag()
  }

  static addTag(data) {
    let input = {
      name: data[0]
    }

    Tag.create(input)
      .then(function (data) {
        View.viewCreate(data)
      })
      .catch(function (err) {
        View.viewErr(err)
      })


  }


  static readOne(id) {
    Tag.findById(id)
      .then(data => {
        View.findById(data)
      })
      .catch(function (err) {
        View.viewErr(err)
      })
  }


  static findAll() {
    Tag.findAll({
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
    obj.name = param[1]

    Tag.update(obj, {
        where: {
          id: ide
        }
      })
      .then(function (data) {
        if (data) {
          Tag.findById(ide, {
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
    Tag.destroy({
        where: {
          id: ids
        }
      })
      .then(function (data) {
        View.viewDelete(data, ids)

      })
      .catch(function (err) {
        View.viewErr(err)
      })
  }





}

module.exports = ControllerTag
