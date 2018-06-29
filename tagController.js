const Model = require('./models/');
const View = require('./view.js');

class tagController {
  static add(name, description){
    Model.Tag.create({name: name, description: description})
    .then(data =>{
      let dataObj = data.get({plain:true})
      View.showData(`Data ${JSON.stringify(dataObj)} has been created`)
    })
    .catch(err =>{
      View.showError(err)
    })
  }

  static read_one(id){
    Model.Tag.findById(id,{raw: true})
      .then(data =>{
        View.showData(`Data Author ID ${data.id} : ${JSON.stringify(data)}`)
      })
      .catch(err =>{
        View.showError(err)
      })
  }

  static read_all(){
    Model.Tag.findAll({raw: true})
    .then(data =>{
      // View.showData(`Data Author : ${JSON.stringify(data)}`)
      View.showData(data)
    })
    .catch(err =>{
      View.showError(err)
    })
  }

  static update(id, name){
    Model.Tag.update({
      name: name,
    },{where: {id:id}})
    .then(data =>{
      View.showData(`Data has been updated`)
    })
    .catch(err =>{
      View.showError(err)
    })
  }

  static delete(id){
    Model.Tag.destroy({where: {id:id}})
      .then(data =>{
        View.showData(`Data has been deleted`)
      })
      .catch(err =>{
        View.showError(err)
      })
  }
}

module.exports = tagController;
