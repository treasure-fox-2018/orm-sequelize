const models = require('../models')
const Article = models.Article
const Author = models.Author
const Tag = models.Tag
const View = require('../views/View.js')

class Controller {
  static help() {
    View.displayHelp()
  }
  
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

  static update(table, args) {
    let id = args[0]
    let column = args[1]
    let value = args[2]

    if (table === 'article') {
      Article.update(
        { [column]: value },
        { where: { id } }
      ).then(() => {
        return Article.findById(id)
      })
      .then(article => console.log(article.toJSON()))
      .catch(err => console.log(err))
    } 
    else if (table === 'author') {
      Author.update(
        { [column]: value },
        { where: { id } })
        .then(() => {
          return Author.findById(id)
        })
        .then(author => console.log(author.toJSON()))
        .catch(err => console.log(err))
    } 
    else if (table === 'tag') {
      Tag.update(
        { [column]: value },
        { where: { id } }
      ).then(() => {
        return Tag.findById(id)
      })
      .then(tag => console.log(tag.toJSON()))
      .catch(err => console.log(err))
    }
  }

  static delete(table, args) {
    let id = args[0]
    if (table === 'article') {
      Article.findById(id)
        .then(article => {
          return Article.destroy({ where: { id } })
        })
        .then(data => console.log(`Article has been removed`))
        .catch(err => console.log(err))
    }
    else if (table === 'author') {
      Author.findById(id)
        .then(author => {
          var removed = author.first_name
          Author.destroy({ where: { id } })
          return removed
        })
        .then(data => console.log(`Author ${data} has been removed`))
        .catch(err => console.log(err))
    }
    else if (table === 'tag') {
      Tag.findById(id)
        .then(tag => {
          return Tag.destroy({ where: { id } })
        })
        .then(data => console.log(`Tag has been removed`))
        .catch(err => console.log(err))
    }
  }
}

module.exports = Controller