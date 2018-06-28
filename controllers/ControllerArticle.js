let Model = require('../models')
let View = require('../views/Views.js')
let Article = Model.Article
class ControllerArticle {


  static helpArticle() {
    View.helpArticle()
  }


  static addArticle(data) {
    let input = {
      title: data[0],
      body: data[1],
      AuthorId: data[2],
      TagId: data[3]
    }
    Article.create(input)
      .then(function (data) {
        View.viewCreate(data)
      })
      .catch(function (err) {
        View.viewErr(err.message)
      })
  }


  static readOne(id) {
    Article.findById(id)
      .then(data => {
        View.findById(data)
      })
      .catch(function (err) {
        View.viewErr(err)
      })
  }


  static findAll() {
    Article.findAll({
        raw: true
      })
      .then(function (data) {
        View.findAll(data)
      })
      .catch(function (err) {
        View.viewErr(err)
      })
  }


  static Updates(data) {
    let ids = data[0]
    let input = {
      title: data[1],
      body: data[2],
      AuthorId: data[3],
      TagId: data[4]
    }

    Article.update(input, {
        where: {
          id: ids
        }
      })
      .then(function (data) {
        if (data) {
          Article.findById(ids, {
              raw: true
            })
            .then(function (dataArticle) {
              View.viewUpdate(dataArticle)
            })
        }

      })
      .catch(function (err) {
        View.viewErr(err)
      })

  }


  static Delete(iD) {
    Article.destroy({
        where: {
          id: iD
        }
      })
      .then(function (data) {
        View.viewDelete(data, iD)

      })
      .catch(function (err) {
        View.viewErr(err)
      })
  }





}

module.exports = ControllerArticle
