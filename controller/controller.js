let model = require('../models')
let View = require('../view/view')

class Controller{

    static help(){
        View.help()
    }


    static addAuthor(data){
        model.Author.create({first_name: data[0],last_name: data[1],religion: data[2],gender: data[3], age: data[4]})
        .then(author => {
            View.display(`Succesfully added account 
${JSON.stringify(author.get({plain:true}))}`)
        })
        .catch(err => {
            View.display('ERROR Message:', err.message)
        })
    }

    static addArticle(data){
        model.Article.create({title: data[0],body: data[1],AuthorId: data[2],TagId: data[3]})
        .then(article => {
            View.display(' ')
            View.display(`Succesfully added article ${JSON.stringify(article.get({plain:true}))}`)
        })
        .catch(err => {
            View.display('ERROR Message:', err.message)
        })
    }

    static addTag(data){
        model.Tag.create({name: data[0]})
        .then(tag => {
            View.display(' ')
            View.display(`Succesfully added tag ${JSON.stringify(tag.get({plain:true}))}`)
        })
        .catch(err => {
            View.display('ERROR Message:', err.message)
        })
    }

    static read_one_author(id){
        model.Author.findOne({where: { id:`${id}`}})
        .then(author => {
            View.display(author.get({plain:true}))
        })
        .catch(err =>{
            View.display('ERROR Message:', err.message)
        })
    }

    static read_one_article(id){
        model.Article.findOne({where: { id:`${id}`}})
        .then(article => {
            View.display(article.get({plain:true}))
        })
        .catch(err =>{
            View.display('ERROR Message:', err.message)
        })
    }

    static read_one_tag(id){
        model.Tag.findOne({where: { id:`${id}`}})
        .then(tag => {
            View.display(tag.get({plain:true}))
        })
        .catch(err =>{
            View.display('ERROR Message:', err.message)
        })
    }

    static read_all_author(){
        model.Author.findAll({raw: true})
        .then(result => {
            View.display(result)
        })
        .catch(err =>{
            View.display('ERROR Message:', err.message)
        })
    }

    static read_all_article(){
        model.Article.findAll({raw: true})
        .then(result => {
            View.display(result)
        })
        .catch(err =>{
            View.display('ERROR Message:', err.message)
        })
    }

    static read_all_tagarticle(){
        model.Tag.findAll({raw: true})
        .then(result => {
            View.display(result)
        })
        .catch(err =>{
            View.display('ERROR Message:', err.message)
        })
    }

    static update_author(id,column,values){
        let changing = {}
        changing[column] = values
        
        model.Author.update(changing, {
            where: {
                id: `${id}`
            }
        })
        .then(result => {
            View.display(`Successfully update ${result} author`)
        })
        .catch(err =>{
            View.display('ERROR Message:', err.message)
        })
    }

    static update_article(id,column,values){
        let changing = {}
        changing[column] = values
        
        model.Article.update(changing, {
            where: {
                id: `${id}`
            }
        })
        .then(result => {
            View.display(`Successfully update ${result} article`)
        })
        .catch(err =>{
            View.display('ERROR Message:', err.message)
        })
    }

    static update_tag(id,column,values){
        let changing = {}
        changing[column] = values
        
        model.Tag.update(changing, {
            where: {
                id: `${id}`
            }
        })
        .then(result => {
            View.display(`Successfully update ${result} tag`)
        })
        .catch(err =>{
            View.display('ERROR Message:', err.message)
        })
    }

    static erase_author(id){
        model.Author.destroy({where: {id: `${id}`}})
        .then(result => {
            View.display(`Author with id ${id} is successfully deleted`)
        })
        .catch(err =>{
            View.display('ERROR Message:', err.message)
        })
    }

    static erase_article(id){
        model.Article.destroy({where: {id: `${id}`}})
        .then(result => {
            View.display(`Article with id ${id} is successfully deleted`)
        })
        .catch(err =>{
            View.display('ERROR Message:', err.message)
        })
    }

    static erase_tag(id){
        model.Tag.destroy({where: {id: `${id}`}})
        .then(result => {
            View.display(`Tag with id ${id} is successfully deleted`)
        })
        .catch(err =>{
            View.display('ERROR Message:', err.message)
        })
    }

}

module.exports = Controller