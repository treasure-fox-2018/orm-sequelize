const ViewAuthor = require('../views/viewAuthor.js')
const Model = require('../models')
const modelAuthor = Model.author

class ControllerAuthor{

    static add(firstName,lastName,religion,gender,age){
        modelAuthor.create({
            first_name:firstName,
            last_name:lastName,
            religion:religion,
            gender:gender,
            age:age
        }).then(function(){
            ViewAuthor.addMessage()
        }).catch(function(){
            ViewAuthor.errorMessage()
        })
    }

    static readOne(id){
        modelAuthor.findById(id,{raw:true})
        .then(function(author){
            console.log(author);
            // ViewAuthor  
        })
    }

    static readAll(){
        modelAuthor.findAll({raw:true})
        .then(function(author){
            console.log(author);
            // ViewAuthor  
        })
    }

    static update(id,firstName,lastName,religion,gender,age){
        modelAuthor.update({
            first_name:firstName,
            last_name:lastName,
            religion:religion,
            gender:gender,
            age:age
        },{where:{id:Number(id)}})
        .then(function(author){
            console.log(author)
        })
    }

    static delete(id){
        modelAuthor.destroy({where:{id:Number(id)}})
        .then(function(){
            console.log(`data with id: "${id}" has been deleted`)
        }).catch(function(){
            console.log(`error delete`)
        })

    }
}

module.exports = ControllerAuthor