const Model = require('./models');
const AuthorModel = Model.Author;
const TagModel = Model.Tag;
const ArticleModel = Model.Article;

const View = require('./view.js')
const AuthorView = View.Author
const TagView = View.Tag
const ArticleView = View.Article 

class Author{
    static Add(first_name,last_name,religion,gender,age){
       AuthorModel.create({
           first_name:first_name,
           last_name:last_name,
           religion:religion,
           gender:gender,
           age:age
       })
       .then(authors=>{
            AuthorView.Add(authors)
       })
       .catch(err=>{
           console.log(err.message);
       })
    }
    static findbyId(id){
        AuthorModel.findById(id)
        .then(author=>{
            AuthorView.findbyId(author)
        })
        .catch(err=>{
            console.log(err.message);
        })
    }
    static showAll(){
        AuthorModel.findAll({raw:true})
        .then(authors=>{
            AuthorView.showAll(authors)
        })
        .catch(err=>{
            console.log(err.message);
        })
    }
    static Update(coloumn,value,id){
        AuthorModel.update({[coloumn]:value},{
            where:{id:id}
        })
        .then(result=>{
            AuthorView.Update(result)
        })
    }
    static Delete(id){
        AuthorModel.destroy({
            where:{id:id}
        })
        .then(result=>{
            AuthorView.Delete(result)
        })
        .catch(err=>{
            console.log(err.message);
        })
    }
}
class Tag{
    static Add(name){
        TagModel.create({
            name:name
        })
        .then(tags=>{
             TagView.Add(tags)
        })
        .catch(err=>{
            console.log(err.message);
        })
    }
    static findbyId(id){
        TagModel.findById(id)
        .then(tag=>{
            TagView.findbyId(tag)
        })
        .catch(err=>{
            console.log(err.message);
        })
    }
    static showAll(){
        TagModel.findAll({raw:true})
        .then(tags=>{
            TagView.showAll(tags)
        })
        .catch(err=>{
            console.log(err.message);
        })
    }
    static Update(value,id){
        TagModel.update({name:value},{
            where:{id:id}
        })
        .then(result=>{
            TagView.Update(result)
        })
    }
    static Delete(id){
        TagModel.destroy({
            where:{id:id}
        })
        .then(result=>{
            TagView.Delete(result)
        })
        .catch(err=>{
            console.log(err.message);
        })
    }
}
class Article{
    static Add(title,body,authorId,tagId){
        ArticleModel.create({
            title:title,
            body:body,
            AuthorId:authorId,
            TagId:tagId
        })
        .then(articles=>{
             ArticleView.Add(articles)
        })
        .catch(err=>{
            console.log(err.message);
        })
    }
    static findbyId(id){
        ArticleModel.findById(id)
        .then(article=>{
            ArticleView.findbyId(article)
        })
        .catch(err=>{
            console.log(err.message);
        })
    }
    static showAll(){
        ArticleModel.findAll({raw:true})
        .then(articles=>{
            ArticleView.showAll(articles)
        })
        .catch(err=>{
            console.log(err.message);
        })
    }
    static Update(coloumn,value,id){
        ArticleModel.update({[coloumn]:value},{
            where:{id:id}
        })
        .then(result=>{
            ArticleView.Update(result)
        })
    }
    static Delete(id){
        ArticleModel.destroy({
            where:{id:id}
        })
        .then(result=>{
            ArticleView.Delete(result)
        })
        .catch(err=>{
            console.log(err.message);
        })
    }
}

module.exports = {
    Author,
    Tag,
    Article
}