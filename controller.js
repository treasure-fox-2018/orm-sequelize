// const sequelize = require('sequelize');
// const articleModel = require('./models/article.js');
// const authorModel = require('./models/author.js');
// const author = authorModel.Author;
// const tagModel = require('./models/tag.js');
// const View = require('./view.js');
const Model = require('./models/')
const Author = Model.Author;
const Article = Model.Article;
const Tag = Model.Tag;

class Controller {

    static addAuthor(first_name, last_name, religion, gender, age) {
        Author.create({first_name: first_name, 
                            last_name: last_name, 
                            religion: religion, 
                            gender: gender, 
                            age: age})
            .then(author => {
                // View.display(message)
                console.log(author);
            })
            .catch(err => {
                // View.displayerrormessage
                console.log(err)
            });
    }

    static readOneAuthor(id) {
        Author.findById(id)
        .then(author => {
            console.log(author)
        })
        .catch(err => {
            console.log(err)
        })
    }

    static readAllAuthor() {
        Author.findAll()
        .then(author => {
            console.log(author)
        })
        .catch(err => {
            console.log(err)
        })
    }

    static updateAuthor(first_name, last_name, religion, gender, age, id) {
        Author.update({first_name: first_name, 
                       last_name: last_name, 
                       religion: religion, 
                       gender: gender, 
                       age: age},
                       {where: {id: id}})
        .then(updatedAuthor => {
            console.log(updatedAuthor)
        })
        .catch(err => {
            console.log(err)
        })
    }

    static eraseAuthor(id) {
        Author.destroy({where: {id: id}})
        .then(deletedAuthor => {
            console.log(`Author ${deletedAuthor.first_name} ${deletedAuthor.last_name} has been deleted from database`)
        })
        .catch(err => {
            console.log(err)
        })

    }

    

}

module.exports = Controller;
