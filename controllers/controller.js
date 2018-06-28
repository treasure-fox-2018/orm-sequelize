const models = require('../models')
const Article = models.Article
const Author = models.Author
const Tag = models.Tag

class Controller {
  static add(table, args) {
    if (table === 'article') {
      var input = { 
        title: args[0],
        body: args[1]
      }
      Article.create(input)
        .then(article => console.log(article.toJSON()))
        .catch(err => console.log(err))
    } else if (table === 'author') {
      var input = {
        first_name: args[0],
        last_name: args[1],
        religion: args[2],
        gender: args[3],
        age: args[4]
      }
      Author.create(input)
        .then(author => console.log(author.toJSON()))
        .catch(err => console.log(err))
    } else if (table === 'tag') {
      var input = { name: args[0] }
      Tag.create(input)
        .then(tag => console.log(tag.toJSON()))
        .catch(err => console.log(err))
    } else {
      console.log('Table not found.')
    }
  }

  static readOne(table, args) {
    let column = args[0]
    let value = args[1]

    if (table === 'article') {
      Article.findOne({
        where: {
          [column]: value
        }
      })
      .then(article => console.log(article.toJSON()))
      .catch(err => console.log(err))
    } 
    else if (table === 'author') {
      Author.findOne({
        where: { [column]: value }
      })
      .then(author => console.log(author.toJSON()))
      .catch(err => console.log(err))
    }
    else if (table === 'tag') {
      Tag.findOne({
        where: { [column]: value }
      })
      .then(tag => console.log(tag.toJSON()))
      .catch(err => console.log(err))
    }
  }

  static readAll(table) {
    if (table === 'article') {
      Article.findAll()
        .then(articles => {
          articles.forEach(article => console.log(article.toJSON()))
        })
        .catch(err => console.log(err))
    } else if (table === 'author') {
      Author.findAll()
        .then(authors => {
          authors.forEach(author => console.log(author.toJSON()))
        })
        .catch(err => console.log(err))
    } else if (table === 'tag') {
      Tag.findAll()
        .then(tags => {
          tags.forEach(tag => console.log(tag.toJSON()))
        })
        .catch(err => console.log(err))
    }
  }
}

module.exports = Controller