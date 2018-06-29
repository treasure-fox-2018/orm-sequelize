'use strict'

const Model = require('../models/')
const View = require('../Views/View.js')
const Article = Model.Article
const Author = Model.Author
const Tag = Model.Tag

class Controller {
    static addTable(table, inputs) {
        if (table === 'author') {
            Author.create({
                first_name : inputs[0],
                last_name : inputs[1],
                religion : inputs[2],
                gender : inputs[3],
                age : inputs[4]
            })
              .then(author => console.log(`Author ${author.first_name} ${author.last_name} successfully created!`))
              .catch(err => console.log(err))
        } else if (table === 'tag') {
            Tag.create({
                name: inputs[0]
            })
            .then(tag => console.log(`Tag ${tag.name} has successfully created`))
            .catch(err => console.log(err))
        } else if (table === 'article') {
            Article.create({
                title : inputs[0],
                body : inputs[1],
                AuthorId : inputs[2],
                TagId : inputs[3],
            })
              .then(createdArticle => console.log(createdArticle.get({raw: true})))
              .catch(err => console.log(err))
        }
    }

    static readOneTableData(table, inputs) {
        if (table === 'author') {
            let authorId = inputs[0]
            Author.findOne({where: {id: authorId}})
            .then(author =>
                console.log(author.get({plain:true})))
            .catch(err => console.log(err))
        } else if (table === 'tag') {
            let tagId = inputs[0]
            Tag.findOne({where: {id: tagId}})
            .then(tag =>
                console.log(tag.get({plain:true})))
            .catch(err => console.log(err))
        } else if (table === 'article') {
            let articleId = inputs[0]
            Article.findOne({where: {id: articleId}})
            .then(article => console.log(article.get({plain:true})))
            .catch(err => console.log(err))
        }
    }

    static readAllTable(table, inputs) {
        if (table === 'author') {
            Author.findAll()
            .then(allAuthors => console.log(allAuthors))
            .catch(err => console.log(err))
        } else if (table === 'tag') {
            Tag.findAll()
            .then(allTags => console.log(allTags))
            .catch(err => console.log(err))
        } else if (table === 'article') {
            Article.findAll()
            .then(allArticles => console.log(allArticles))
            .catch(err => console.log(err))
        }
    }

    static updateTable(table, inputs) {
        if (table === 'author') {
            let authorId = inputs[0]
            let authorFirstName = inputs[1]
            let authorLastName = inputs[2]
            let authorReligion = inputs[3]
            let authorGender = inputs[4]
            let authorAge = inputs[5]
            Author.update({first_name : authorFirstName, last_name: authorLastName, religion: authorReligion, gender:authorGender, age:authorAge},
                          {where: {id: authorId}})
            .then(authorUpdated => console.log(authorUpdated.get({plain:true})))
            .catch(err => console.log(err))
        } else if (table === 'tag') {
            let tagId = inputs[0]
            let tagSetName = inputs[1]
            Tag.update({name: tagSetName}, {where: {id:tagId}})
            .then(updatedTag => console.log(updatedTag))
            .catch(err => console.log(err))
        } else if (table === 'article') {
            let articleId = inputs[0]
            let articleTitle = inputs[1]
            let articleBody = inputs[2]

            Article.update({title : articleTitle, body : articleTitle},
                           {where: {id : articleId}})
            .then(console.log(`successfully updated!`))
            .catch(err => console.log(err))
        }
    }

    static deleteTable(table, inputs) {
        if (table === 'author') {
            let authorId = inputs[0]
            Author.destroy({where: {id: authorId}})
            .then(deletedAuthor => `Author ${deletedAuthor.first_name} ${deletedAuthor.last_name} successfully created!`)
            .catch(err => console.log(err))
        } else if (table === 'tag') {
            let tagId = inputs[0]
            Tag.destroy({where: {id:tagId}})
            .then(deletedTag => `Tag ${deletedTag.name} has successfully deleted`)
            .catch(err => console.log(err))
        } else if (table === 'article') {
            let articleId = inputs[0]
            Article.destroy({where: {id: articleId}})
            .then(deletedArticle => `Artcile with title : ${deletedArticle.title} and id : ${deletedArticle.id} has successfully deleted!`)
            .catch(err => console.log(err))
        }
    }

    static help() {
        View.showHelp()
    }
}

module.exports = Controller
