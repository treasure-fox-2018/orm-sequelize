const View = require('../view/view')
const Models = require('../models')


class Controller {
  static showHelp() {
    View.showHelp()
  }

  static authorAdd (first_name, last_name, religion, gender, age) {
    let newAuthor = {
      first_name: first_name,
      last_name: last_name,
      religion: religion,
      gender: gender,
      age: age
    }
    Models.Author.findOrCreate({where: newAuthor})
      .spread((user) => {
        View.printMessage(user.get({
          plain: true
        }))
        View.printMessage(`adding author succeess`)
      })
  }

  static authorReadAll() {
    Models.Author.findAll({raw:true}).then (createdAuthor => {
      View.printTableAll(createdAuthor)
    })
  }

  static authorReadOne(id) {
    Models.Author.findById(id, {raw: true}).then(dataAuthor => {
      View.printTableOne(dataAuthor)
    })
  }

  static authorUpdate(id,first_name,last_name,religion,gender,age) {
    let updateAuthor = {
      first_name: first_name,
      last_name: last_name,
      religion: religion,
      gender: gender,
      age: age
    }
    Models.Author.update(updateAuthor,
      {where: {id: id}}, {returning: true})
        .then(() => {
          View.printMessage("update author success")
        })
        .catch(err =>View.printError (err))
  }

  static authorDelete(id) {
    Models.Author.destroy({where: {id: id}}).then(()=>{
      View.printMessage("author deleted successfully")
    })
  }

  static tagAdd (name) {
    let newTag = {
      name: name
    }
    Models.Tag.findOrCreate({where: newTag})
      .spread((user) => {
        View.printMessage(user.get({
          plain: true
        }))
        View.printMessage(`adding tag succeess`)
      })
  }

  static tagReadAll() {
    Models.Tag.findAll({raw:true}).then (createdTag => {
      View.printTableAll(createdTag)
    })
  }

  static tagReadOne(id) {
    Models.Tag.findById(id, {raw: true}).then(dataTag => {
      View.printTableOne(dataTag)
    })
  }

  static tagUpdate(id,name) {
    let updateTag = {
      name: name
    }
    Models.Tag.update(updateTag,
      {where: {id: id}}, {returning: true})
        .then(() => {
          View.printMessage("update tag success")
        })
        .catch(err =>View.printError (err))
  }

  static tagDelete(id) {
    Models.Tag.destroy({where: {id: id}}).then(()=>{
      View.printMessage("tag deleted successfully")
    })
  }
  
  static articleAdd (title, body, authorId, tagId) {
    let newArticle= {
      title: title,
      body: body,
      authorId: authorId,
      tagId: tagId
    }
    Models.Article.findOrCreate({where: newArticle})
      .spread((user) => {
        View.printMessage(user.get({
          plain: true
        }))
        View.printMessage(`adding article succeess`)
      })
  }
  
  static articleReadAll() {
    Models.Article.findAll({raw:true}).then (article => {
      View.printTableAll(article)
    })
  }

  static articleReadOne(id) {
    Models.Article.findById(id, {raw: true}).then(dataArticle => {
      View.printTableOne(dataArticle)
    })
  }

  static articleUpdate(id,title, body, authorId, tagId) {
    let updateArticle = {
      title: title,
      body: body,
      authorId: authorId,
      tagId: tagId
    }
    Models.Article.update(updateArticle,
      {where: {id: id}}, {returning: true})
        .then(() => {
          View.printMessage("update article success")
        })
        .catch(err =>View.printError (err))
  }

  static articleDelete(id) {
    Models.Article.destroy({where: {id: id}}).then(()=>{
      View.printMessage("article deleted successfully")
    })
  }

}

module.exports = Controller