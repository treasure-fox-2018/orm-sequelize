const Model = require('./models')
const View = require('./view')

class ArticleController {
    static add(title,body,authorId,tagId){
        Model.Article.create({
            title:title,
            body:body,
            authorId:authorId,
            tagId:tagId
        })
        .then(() => {
            View.show(`Data has been Added`)
        })
        .catch((err) => {
            View.showError(err);
        })
    }

    static readOne(id){
        Model.Article.findById(id,{
            where: {id:id}
        })
        .then((data_article)=> {
            View.show(data_article)
        })
        .catch((err) => {
            View.showError(err)
        })
    }

    static readAll(){
        Model.Article.findAll({
            raw:true
        })
        .then((data_article) => {
            View.show(data_article)
        })
        .catch((err)=>{
            View.showError(err)
        })
    }

    static update(id,title,body,authorId,tagId){
        Model.Article.update({
            title:title,
            body:body,
            authorId:authorId,
            tagId:tagId

        },{where: {id:id}})
        .then(() => {
            View.show(`Data has been Updated`)
        })
        .catch((err) => {
            View.showError(err)
        })
    }

    static delete(id){
        Model.Article.destroy({
            where:{id:id}
        })
        .then(() => {
            View.show(`Data has been Deleted`)
        })
        .catch((err) => {
            View.showError(err)
        })
    }
}

module.exports = ArticleController