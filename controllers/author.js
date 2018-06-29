const Model = require('../models');
const View = require('../views/author');
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
    let authorObj = {
      first_name : input[0],
      last_name : input[1],
      religion : input[2],
      gender : input[3],
      age : input[4]
    }
   
    Model.Author.create(authorObj).then(author => {
      View.message(author.get({
        plain: true
      }))
    })
  }

  static show(input){
    let id = input[0]
  
    Model.Author.findById(id, {raw:true}).then(author =>{
      View.message(author)
    })
  }

  static showAll(input){
    let keyword = input[0]
    let value1 = input[1]
    let value2 = input[2]

    if (keyword == 'id'){
      Model.Author.findAll({where:{id:{[Op.in]: [value1, value2]}},raw:true}).then(author =>{
        View.message(author)
      })
    } else if (keyword == 'name'){
      Model.Author.findAll({where:{[Op.or]: [{first_name: value1}, {last_name: value1}]},raw:true}).then(author =>{
        View.message(author)
      })
    } else if (keyword == 'fullname'){
      Model.Author.findAll({where:{[Op.and]: [{first_name: value1}, {last_name: value2}]},raw:true}).then(author =>{
        View.message(author)
      })
    } else if (keyword == 'first_name'){
      Model.Author.findAll({where:{first_name: {[Op.like]: `%${value1}%`}},raw:true}).then(author =>{
        View.message(author)
      })
    } else if (keyword == 'age'){
      Model.Author.findAll({where:{age: {[Op.between]: [20, 40]}},raw:true}).then(author =>{
        View.message(author)
      })
    }

    Model.Author.findAll({raw:true}).then(author =>{
      View.message(author)
    })
  }

  static update (input){
    let id = input[0]
    let key = input[1]
    let newValue = input[2]
    let newObj = {}
    newObj[key] = newValue

    Model.Author.update(newObj, {where:{id:id}, returning:true}).then(author => {
      View.message(author[1])
    })
  }

  static delete (input){
    let id = input[0]

    Model.Author.destroy({where: {id:id}}).then(result => {
      View.message('Data succesfully deleted')
    })
  }
}


module.exports = Controller;