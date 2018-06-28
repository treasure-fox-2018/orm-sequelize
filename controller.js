const model = require("./models")
const View = require("./view.js")
var AuthorModel = model.Author

class Controller{

    static create(param){
        let first_name = param[0]
        let last_name = param[1]
        let religion = param[2]
        let gender = param[3]
        let age = param[4]
        AuthorModel.create({
            first_name : first_name,
            last_name : last_name,
            religion : religion,
            gender : gender,
            age : age,
            createdAt : new Date(),
            updatedAt : new Date()
        })
        .then(function(dataAuthor){
            View.display(dataAuthor.get({plain : true}))
        })
        .catch(function(err){
            console.log(err)
        })
    }

    static readOne(param){
        let authorId = param[0]
        AuthorModel.findOne({
            where : { id : authorId }
        })
        .then(function(data){
            View.display(data.get({plain : true}))
        })
        .catch(function(err){
            console.log(err)
        })
    }

    static readAll(){
        AuthorModel.findAll()
        .then(function(data){
            View.display(data)
        })
        .catch(function(err){
            console.log(err)
        })
    }

    static update(param){
        let authorId = param[0]
        let objAuthor = {}
        objAuthor.first_name = param[1]
        objAuthor.last_name = param[2]
        objAuthor.religion = param[3]
        objAuthor.gender = param[4]
        objAuthor.age = param[5]
        AuthorModel.update(objAuthor,{where : {id : authorId}})
        .then(function(data){
            if(data){
                AuthorModel.findById(authorId)
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
        AuthorModel.destroy({where : { id : id}})
        .then(function(data){
            View.display(data)
        })
        .catch(err=>{
            console.log(err)
        })
    }

}

module.exports = Controller