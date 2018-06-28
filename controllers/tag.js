const Model = require('../models')
const View = require('../views/tag')

class Tag{
    static add(name){
        let obj = {}
        obj.name = name

        Model.Tag.create(obj)
        .then(tag => {
            View.add(tag.toJSON())
        })
    }

    static readOne(id){
        Model.Tag.findById(id)
        .then(tagId => {
            View.readOne(tagId.toJSON())
        })
    }

    static readAll(){
        Model.Tag.findAll()
        .then(tags => {
            tags.forEach(dataTags => {
                View.readAll(dataTags.dataValues)  
            })
        })
    }

    static update(id, column, value){
        Model.Tag.update(
            {[column]: value}, {where : {id}
        })
        .then(tag => {
                View.update(`Successfully update tag ID ${id}!`)  
        })
    }

    static erase(id){
        Model.Tag.destroy({
            where : {id}
        })
        .then(delTag => {
            View.erase(`Successfully delete tag ID ${id}!`)
        })
    }
}

module.exports = Tag