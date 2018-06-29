const Model = require('../models');
const View = require('../views/article');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const operatorsAliases = {
  $like: Op.like,
  $between: Op.between,
  $or: Op.or,
  $in: Op.in,
  $and: Op.and,
}

class Controller {

  static add(input){
    let articleObj = {
      title : input[0],
      body : input[1],
      AuthorId : input[2],
      TagId : input[3],
    }
   
    Model.Article.create(articleObj).then(article => {
      View.message(article.get({
        plain: true
      }))
    })
  }

  static show(input){
    let id = input[0]
  
    Model.Article.findById(id, {raw:true}).then(article =>{
      View.message(article)
    })
  }

  static showAll(){
    Model.Article.findAll({raw:true}).then(article =>{
      View.message(article)
    })
  }

  static update (input){
    let id = input[0]
    let key = input[1]
    let newValue = input[2]
    let newObj = {}
    newObj[key] = newValue

    Model.Article.update(newObj, {where:{id:id}, returning:true}).then(article => {
      View.message(article[1])
    })
  }

  static delete (input){
    let id = input[0]

    Model.Article.destroy({where: {id:id}}).then(result => {
      View.message('Data succesfully deleted')
    })
  }
}


module.exports = Controller;