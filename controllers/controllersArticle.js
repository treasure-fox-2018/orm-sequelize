const ViewArticle = require('../views/viewArticle')
const model = require('../models')
const Article = model.Article

class ControllerArticle{

    static addAuthor(information){
        Article
        .create({
            title:information[0],
            body:information[1],
            AuthorId:Number(information[2]),
            tagId:Number(information[3]),
           
        })
        .then(function(article){
            ViewArticle.addArticle(article)
        })
        .catch(function(err){
            console.log(err)
        })
    }

    static readOne(id){
        Article
        .findById(id)
        .then(function(article){
            ViewArticle.readOne(article)
        })
        .catch(function(err){
            console.error(err.message)
        })
    }

    static readAll(){
        Article
        .findAll()
        .then(function(articles){
            ViewArticle.readAll(articles)
        })
        .catch(function(err){
            console.log(err.message)
        })

    }

    static update(information){
        let articleId = information[2]
        let attributes = information[0]
        let values = Number(information[1])
        let updateInfo = {}
            updateInfo[attributes] = values
        
        Article
        .update(updateInfo, {
            where:{id:articleId}
            }
        )
        .then(function(author){
            ViewArticle.info('Success Update')
        })
        .catch(function(err){
            ViewArticle.info('Gagal Update')
            console.log(err)
        })
    }

    static delete(id){
        Article
        .destroy({
            where:{id:id},
        })
        .then(function(article){
            ViewArticle.info('Success delete')
        })
        .catch(function(err){
            ViewArticle.info('Gagal delete')
            console.log(err)
        })
    }
}

module.exports = ControllerArticle