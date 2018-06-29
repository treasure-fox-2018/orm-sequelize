const Model = require('./models/');
const View = require('./view.js');

class authorController {
  static add(first_name, last_name, religion, gender, age){
    Model.Author.create({
      first_name: first_name,
      last_name: last_name,
      religion: religion,
      gender: gender,
      age: age
    })
    .then(data =>{
      let dataObj = data.get({plain:true})
      View.showData(`Data ${JSON.stringify(dataObj)} has been created`)
    })
    .catch(err =>{
      View.showError(err)
    })
  }

  static read_one(id){
    Model.Author.findById(id,{raw: true})
      .then(data =>{
        View.showData(`Data Author ID ${data.id} : ${JSON.stringify(data)}`)
      })
      .catch(err =>{
        View.showError(err)
      })
  }

  static read_all(){
    Model.Author.findAll({raw: true})
    .then(data =>{
      // View.showData(`Data Author : ${JSON.stringify(data)}`)
      View.showData(data)
    })
    .catch(err =>{
      View.showError(err)
    })
  }

  static update(id, first_name, last_name, religion, gender, age){
    Model.Author.update({
      first_name: first_name,
      last_name: last_name,
      religion: religion,
      gender: gender,
      age: age
    },{where: {id:id}})
    .then(data =>{
      View.showData(`Data has been updated`)
    })
    .catch(err =>{
      View.showError(err)
    })
  }

  static delete(id){
    Model.Author.destroy({where: {id:id}})
      .then(data =>{
        View.showData(`Data has been deleted`)
      })
      .catch(err =>{
        View.showError(err)
      })
  }
}

module.exports = authorController;
