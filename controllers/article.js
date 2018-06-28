const Model = require('../models')
const View = require('../views/article')

class Article{
    static add(title, body, AuthorId, TagId){
        let obj = {}
        obj.title = title
        obj.body = body
        obj.AuthorId = AuthorId
        obj.TagId = TagId

        Model.Article.create(obj)
        .then(article => {
            View.add(article.toJSON())
        })
    }

    static readOne(id){
        Model.Article.findById(id)
        .then(articleId => {
            View.readOne(articleId.toJSON())
        })
    }

    static readAll(){
        Model.Article.findAll()
        .then(articles => {
            articles.forEach(dataArticle => {
                View.readAll(dataArticle.dataValues)  
            })
        })
    }

    static update(id, column, value){
        Model.Article.update(
            {[column]: value}, {where : {id}
        })
        .then(article => {
                View.update(`Successfully update article ID ${id}!`)  
        })
    }

    static erase(id){
        Model.Article.destroy({
            where : {id}
        })
        .then(delArticle => {
            View.erase(`Successfully delete article ID ${id}!`)
        })
    }
}

module.exports = Article