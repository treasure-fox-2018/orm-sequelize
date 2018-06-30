const Model = require('../models')
const View = require('../view/view.js')

class AuthorController {

    static addAuthor(first_name, last_name, religion, gender, age) {
        Model.Author.addAuthor(first_name, last_name, religion, gender, age)
            .then(function(dataAuthor) {
                View.display(dataAuthor.dataValues)
            })
            .catch(function(err) {
                View.display(err.message)
            })
            .then(function() {
                process.exit()
            })
    }

    static read_one(id) {
        Model.Author.read_one(id)
            .then(function(oneAuthorData) {
                View.display(oneAuthorData.dataValues)
            })
            .catch(function(err) {
                View.display(err)
            })
            .then(function() {
                process.exit()
            })
    }

    static read_all() {
        Model.Author.read_all()
            .then(function(allData) {
                allData.forEach(function(oneData) {
                    View.display(oneData.dataValues)
                })
            })
            .catch(function(err) {
                View.display(err)
            })
            .then(function() {
                process.exit()
            })
    }

    static updateAuthor(id, first_name, last_name, religion, gender, age) {
        Model.Author.updateAuthor(id, first_name, last_name, religion, gender, age)
            .then(function(updatedAuthor) {
                View.display(updatedAuthor.dataValues)
            })
            .catch(function(err) {
                View.display(err)
            })
            .then(function() {
                process.exit()
            })
    }

    static deleteAuthor(id) {
        Model.Author.deleteAuthor(id)
         .then(function(deletedAuthor) {
             View.display(`${deletedAuthor} author has been deleted`)
         })
         .catch(function(err) {
             View.display(err)
         })
         .then(function() {
             process.exit()
         })
    }

}

module.exports = AuthorController