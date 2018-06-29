const Model = require('../models');
const View = require('../views/tag');

class Controller {

  static add(input){
    let tagObj = {
      name : input[0],
    }
   
    Model.Tag.create(tagObj).then(tag => {
      View.message(tag.get({
        plain: true
      }))
    })
  }

  static show(input){
    let id = input[0]
  
    Model.Tag.findById(id, {raw:true}).then(tag =>{
      View.message(tag)
    })
  }

  static showAll(){
    Model.Tag.findAll({raw:true}).then(tag =>{
      View.message(tag)
    })
  }

  static update (input){
    let id = input[0]
    let key = input[1]
    let newValue = input[2]
    let newObj = {}
    newObj[key] = newValue

    Model.Tag.update(newObj, {where:{id:id}, returning:true}).then(tag => {
      View.message(tag[1])
    })
  }

  static delete (input){
    let id = input[0]

    Model.Tag.destroy({where: {id:id}}).then(result => {
      View.message('Data succesfully deleted')
    })
  }
}


module.exports = Controller;