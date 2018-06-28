const ViewTag = require('../views/viewTag')
const model = require('../models')
const Tag = model.Tag

class ControllerArticle{

    static addTag(information){
        Tag
        .create({
            name:information[0],
        })
        .then(function(tag){
            ViewTag.addTag(tag)
        })
        .catch(function(err){
            console.log(err)
        })
    }

    static readOne(id){
        Tag
        .findById(id)
        .then(function(tag){
            ViewTag.readOne(tag)
        })
        .catch(function(err){
            console.error(err.message)
        })
    }

    static readAll(){
        Tag
        .findAll()
        .then(function(tags){
            ViewTag.readAll(tags)
        })
        .catch(function(err){
            console.log(err.message)
        })

    }

    static update(information){
        let tagId = information[2]
        let attributes = information[0]
        let values = Number(information[1])
        let updateInfo = {}
            updateInfo[attributes] = values
        
        Tag
        .update(updateInfo, {
            where:{id:tagId}
            }
        )
        .then(function(tag){
            ViewTag.info('Success Update')
        })
        .catch(function(err){
            ViewTag.info('Gagal Update')
            console.log(err)
        })
    }

    static delete(id){
        Tag
        .destroy({
            where:{id:id},
        })
        .then(function(article){
            ViewTag.info('Success delete')
        })
        .catch(function(err){
            ViewTag.info('Gagal delete')
            console.log(err)
        })
    }
}

module.exports = ControllerArticle