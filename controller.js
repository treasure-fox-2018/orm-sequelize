const View = require('./view.js');
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
                View.displayMessage(author.get({raw:true}))
                // console.log(author);
            })
            .catch(err => {
                View.displayError(err)
                // console.log(err)
            });
    }

    static readOneAuthor(id) {
        Author.findById(id)
        .then(author => {
            View.tableOne(author.get({raw:true}))
            // console.log(author)
        })
        .catch(err => {
            View.displayError(err)
            // console.log(err)
        })
    }

    static readAllAuthor() {
        Author.findAll({raw:true})
        .then(author => {
            View.tableAll(author)
            // console.log(author)
        })
        .catch(err => {
            View.displayError(err)
            // console.log(err)
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
            View.displayMessage(updatedAuthor)
            // console.log(updatedAuthor)
        })
        .catch(err => {
            View.displayError(err)
            // console.log(err)
        })
    }

    static eraseAuthor(id) {
        Author.destroy({where: {id: id}})
        .then(deletedAuthor => {
            View.displayMessage(`Data has been deleted from the database`)
            // console.log(`Data has been deleted from database`)
        })
        .catch(err => {
            View.displayError(err)
            // console.log(err)
        })

    }

    static addArticle(title, body, authorId, tagId) {
        Article.create({title : title,
                        body: body,
                        authorId: authorId,
                        tagId: tagId})
        .then(article => {
            View.displayMessage(article.get ({raw:true}))
        })
        .catch(err => {
            View.displayError(err)
        })
    }

    static readOneArticle(id) {
        Article.findById(id)
        .then(article => {
            View.tableOne(article.get({raw:true}))
        })
        .catch(err => {
            View.displayError(err)
        })
    }

    static readAllArticles() {
        Article.findAll({raw:true})
        .then(articles => {
            View.tableAll(articles)
        })
        .catch(err => {
            View.displayError(err)
        })
    }

    static updateArticle(title, body, authorId, tagId, id) {
        Article.update({title: title,
                        body: body,
                        authorId: authorId,
                        tagId: tagId},
                        {where: {id: id}})
        .then(updatedArticle => {
            View.displayMessage(updatedArticle)
        })
        .catch(err => {
            View.displayError(err)
        })
    }

    static eraseArticle(authorId) {
        Article.destroy({where: {authorId: authorId}})
        .then(deletedArticle => {
            View.displayMessage(`Article has been deleted from the database`)
        })
        .catch(err => {
            View.displayError(err)
        })
    }

    static addTag(name) {
        Tag.create({name})
        .then(name => {
            View.displayMessage(name.get ({raw:true}))
        })
        .catch(err => {
            View.displayError(err)
        })
    }

    static readOneTag(id) {
        Tag.findById(id, {raw:true})
        .then(article => {
            View.tableOne(article)
        })
        .catch(err => {
            View.displayError(err)
        })
    }

    static readAllTags() {
        Tag.findAll({raw:true})
        .then(tags => {
            View.tableAll(tags)
        })
        .catch(err => {
            View.displayError(err)
        })
    }
    static updateTag(name, id) {
        Tag.update({name: name}, 
                    {where: {id: id}})
        .then(updatedTag => {
            View.displayMessage(updatedTag)
        })
        .catch(err => {
            View.displayError(err)
        })

    }
    static eraseTag(id) {
        Tag.destroy({where: {id: id}})
        .then(deletedTag => {
            View.displayMessage(`Tag has been deleted from the database`)
        })
        .catch(err => {
            View.displayError(err)
        })
    }



}

module.exports = Controller;
