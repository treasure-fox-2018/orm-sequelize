const model = require("./models")
const View = require("./view.js")
var TagModel = model.Tage

class Controller{
    static create(param){
        let name = param[0]
        TagModel.create({
            name : name,
            createdAt : new Date(),
            updatedAt : new Date()
        })
        .then(function(dataTag){
            View.display(dataTag.get({plain : true}))
        })
        .catch(function(err){
            console.log(err)
        })
    }

    static readOne(param){
        let tagId = param[0]
        TagModel.findOne({
            where : { id : tagId }
        })
        .then(function(data){
            View.display(data.get({plain : true}))
        })
        .catch(function(err){
            console.log(err)
        })
    }

    static readAll(){
        TagModel.findAll()
        .then(function(data){
            View.display(data)
        })
        .catch(function(err){
            console.log(err)
        })
    }

    static update(param){
        let tagId = param[0]
        let objTag = {}
        objAuthor.name = param[1]
        TagModel.update(objTag,{where : {id : tagId}})
        .then(function(data){
            if(data){
                TagModel.findById(tagId)
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
        TagModel.destroy({where : { id : id}})
        .then(function(data){
            View.display(data)
        })
        .catch(err=>{
            console.log(err)
        })
    }
}

module.exports = Controller