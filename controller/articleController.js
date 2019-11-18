const Model = require('../models')
const View = require('../view/view.js')

class ArticleController {

    static addArticle(title, body, authorId, tagId) {
        Model.Article.addArticle(title, body, authorId, tagId)
            .then(function(dataArticle) {
                View.display(dataArticle.dataValues)
            })
            .catch(function(err) {
                View.display(err.message)
            })
            .then(function() {
                process.exit()
            })
    }

    static read_one(id) {
        Model.Article.read_one(id)
            .then(function(oneArticleData) {
                View.display(oneArticleData.dataValues)
            })
            .catch(function(err) {
                View.display(err)
            })
            .then(function() {
                process.exit()
            })
    }

    static read_all() {
        Model.Article.read_all()
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

    static updateArticle(id, title, body, authorId, tagId) {
        Model.Article.updateArticle(id, title, body, authorId, tagId)
            .then(function(updatedArticle) {
                View.display(updatedArticle.dataValues)
            })
            .catch(function(err) {
                View.display(err)
            })
            .then(function() {
                process.exit()
            })
    }

    static deleteArticle(id) {
        Model.Article.deleteArticle(id)
         .then(function(deletedArticle) {
             View.display(`${deletedArticle} article has been deleted`)
         })
         .catch(function(err) {
             View.display(err)
         })
         .then(function() {
             process.exit()
         })
    }
}

module.exports = ArticleController