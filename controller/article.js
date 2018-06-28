const Model = require("../models")

class Article {
  static add (title, body, authorId, tagId) {
    Model.Article.create({title: title, body: body, AuthorId: authorId, TagId: tagId})
      .then(data => {
        let dataAdd = data.get({plain: true})
        console.log(dataAdd)
      })
      .catch(err => {
        console.log(err);
      })
  }

  static readOne(id) {
    Model.Article.findById(id)
      .then(data => {
        const dataReadOne = data.get({plain: true})
        console.log(dataReadOne);
      })
      .catch(err => {
        console.log(err);
      })
  }
  
  static readAll() {
    Model.Article.findAll({raw: true})
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  static updateArticle(id, title, body, authorId, tagId) {
    Model.Article.update({title: title, body: body, AuthorId: authorId, TagId: tagId}, {
      where: {
        id: {
          [Op.eq]: id
        }
      }})
      .then(data => {
        if (data[0] == 1) {
          console.log(`Data id ${id} Successfully update`);
        } else {
          console.log(`Sorry! Data id ${id} not found`);
          
        }
      })
      .catch(err => {
        console.log(err);
      })
  }

  static deleteArticle(id) {
    Model.Article.destroy({where: {id: id}})
      .then(data => {
        if (data === 1) {
          console.log(`Data id ${id} success deleted`);
        } else {
          console.log(`Data id ${id} has deleted`);
        }
      })
      .catch(err => {
        console.log(err);
      })
  }
}

module.exports = Article