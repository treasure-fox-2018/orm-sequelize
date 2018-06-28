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

        } else if (table === 'article') {

        }
    }

    static readOneTableData(table, inputs) {
        if (table === 'author') {
            let authorId = inputs[0]
            Author.findOne({where: {id: authorId}})
            .then(author =>
                console.log(`Author name : ${author.first_name} ${author.last_name}\n
                Religion : ${author.religion}\n
                Gender : ${author.gender}\n
                Age : ${author.age}`))
            .catch(err => console.log(err))
        } else if (table === 'tag') {

        } else if (table === 'article') {

        }
    }

    static readAllTable(table, inputs) {
        if (table === 'author') {
            Author.findAll()
            .then(authors => console.log(authors))
        } else if (table === 'tag') {

        } else if (table === 'article') {

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
            .then(authorUpdated => console.log(authorUpdated))
            .catch(err => console.log(err))
        } else if (table === 'tag') {

        } else if (table === 'article') {

        }
    }

    static deleteTable(table, inputs) {
        if (table === 'author') {
            let authorId = inputs[0]
            Author.destroy({where: {id: authorId}})
            .then(deletedAuthor => `Author ${deletedAuthor.first_name} ${deletedAuthor.last_name} successfully created!`)
            .catch(err => console.log(err))
        } else if (table === 'tag') {

        } else if (table === 'article') {

        }
    }

    static help() {
        View.showHelp()
    }
}

module.exports = Controller
