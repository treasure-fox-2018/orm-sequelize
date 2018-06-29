const Model = require('../models');
const View = require('../views/tag');
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
    let tagObj = {
      name : input[0],
    }
   
    Model.Tags.create(tagObj).then(tag => {
      View.message(tag.get({
        plain: true
      }))
    })
  }

  static show(input){
    let id = input[0]
  
    Model.Tags.findById(id, {raw:true}).then(tag =>{
      View.message(tag)
    })
  }

  static showAll(){
    Model.Tags.findAll({raw:true}).then(tag =>{
      View.message(tag)
    })
  }

  static update (input){
    let id = input[0]
    let key = input[1]
    let newValue = input[2]
    let newObj = {}
    newObj[key] = newValue

    Model.Tags.update(newObj, {where:{id:id}, returning:true}).then(tag => {
      View.message(tag[1])
    })
  }

  static delete (input){
    let id = input[0]

    Model.Tags.destroy({where: {id:id}}).then(result => {
      View.message('Data succesfully deleted')
    })
  }
}


module.exports = Controller;