const Model = require('../models');
const View = require('../views/author');

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

  static showAll(){
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