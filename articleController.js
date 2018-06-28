const model = require("./models")
const View = require("./view.js")
var ArticleModel = model.Article

class Controller{
    static create(param){
        let title = param[0]
        let body = param[1]
        let authorId = param[2]
        let tagId = param[3]
        
        ArticleModel.create({
            title : title,
            body : body,
            author_id : authorId,
            tag_id : tagId,
            createdAt : new Date(),
            updatedAt : new Date()
        })
        .then(function(dataArticle){
            View.display(dataArticle.get({plain : true}))
        })
        .catch(function(err){
            console.log(err)
        })
    }

    static readOne(param){
        let articleId = param[0]
        ArticleModel.findOne({
            where : { id : articleId }
        })
        .then(function(data){
            View.display(data.get({plain : true}))
        })
        .catch(function(err){
            console.log(err)
        })
    }

    static readAll(){
        ArticleModel.findAll()
        .then(function(data){
            View.display(data)
        })
        .catch(function(err){
            console.log(err)
        })
    }

    static update(param){
        let articleId = param[0]
        let objAuthor = {}
        objAuthor.title = param[1]
        objAuthor.body = param[2]
        objAuthor.author_id = param[3]
        objAuthor.tag_id = param[4]
        
        ArticleModel.update(objAuthor,{where : {id : articleId}})
        .then(function(data){
            if(data){
                ArticleModel.findById(articleId)
                .then(function(dataUpdate){
                    View.display(dataUpdate.get({plain : true}))
                })
                .catch(function(err){
                    console.log(err)
                })
            }
        })
    }

    static erase(id){
        ArticleModel.destroy({where : { id : id}})
        .then(function(data){
            View.display(data)
        })
        .catch(err=>{
            console.log(err)
        })
    }
}

module.exports = Controller