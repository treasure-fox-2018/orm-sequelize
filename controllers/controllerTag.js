const ViewTag = require('../views/viewTag.js')
const Model = require('../models')
const modelTag = Model.tag

class ControllerTag{

    static add(name){
        modelTag.create({
            name:name
        }).then(function(){
            console.log('tag has been update')
        }).catch(function(){
            console.log('error create tag')
        })
    }

    static readOne(id){
        modelTag.findById(id,{raw:true})
        .then(function(tag){
            console.log(tag); 
        })
    }

    static readAll(){
        modelTag.findAll({raw:true})
        .then(function(tag){
            console.log(tag)
        })
    }

    static update(id,name){
        modelTag.update({
            name:name
        },{where: {id:Number(id)}})
        .then(function(id){
            console.log(`data tag with id : "${id}" has been updated `)
        }).catch(function(){
            console.log(`error update tag`)
        })
    }

    static delete(id){
        modelTag.destroy({ where:{id:Number(id)}})
        .then(function(id){
            console.log(`data tag with id:"${id}" has been deleted`)
        }).catch(function(){
            console.log(`error data delete`)
        })
    }

}

module.exports = ControllerTag