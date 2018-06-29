const Model = require('./models/');
const View = require('./view.js');

class articleController {
  static add(title, body, AuthorId, TagId){
    Model.Article.create({
      title: title,
      body: body,
      AuthorId: AuthorId,
      TagId: TagId
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
    Model.Article.findById(id,{raw: true})
      .then(data =>{
        View.showData(`Data Author ID ${data.id} : ${JSON.stringify(data)}`)
      })
      .catch(err =>{
        View.showError(err)
      })
  }

  static read_all(){
    Model.Article.findAll({raw: true})
    .then(data =>{
      // View.showData(`Data Author : ${JSON.stringify(data)}`)
      View.showData(data)
    })
    .catch(err =>{
      View.showError(err)
    })
  }

  static update(id, title, body, AuthorId, TagId){
    Model.Article.update({
      title: title,
      body: body,
      AuthorId: AuthorId,
      TagId: TagId
    },{where: {id:id}})
    .then(data =>{
      View.showData(`Data has been updated`)
    })
    .catch(err =>{
      View.showError(err)
    })
  }

  static delete(id){
    Model.Article.destroy({where: {id:id}})
      .then(data =>{
        View.showData(`Data has been deleted`)
      })
      .catch(err =>{
        View.showError(err)
      })
  }
}

module.exports = articleController;
