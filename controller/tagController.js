const Model = require('../models')
const View = require('../view/view.js')

class TagController {

    static addTag(name) {
        Model.Tag.addTag(name)
            .then(function(dataTag) {
                View.display(dataTag.dataValues)
            })
            .catch(function(err) {
                View.display(err.message)
            })
            .then(function() {
                process.exit()
            })
    }

    static read_one(id) {
        Model.Tag.read_one(id)
            .then(function(oneTagData) {
                View.display(oneTagData.dataValues)
            })
            .catch(function(err) {
                View.display(err)
            })
            .then(function() {
                process.exit()
            })
    }

    static read_all() {
        Model.Tag.read_all()
            .then(function(allData) {
                allData.forEach(function(oneData) {
                    View.display(oneData.dataValues)
                })
            })
            .catch(function(err) {
                View.display(err)
            })
            .then(function() {
                process.exit()
            })
    }

    static updateTag(id, name) {
        Model.Tag.updateTag(id, name)
            .then(function(updatedTag) {
                View.display(updatedTag.dataValues)
            })
            .catch(function(err) {
                View.display(err)
            })
            .then(function(err) {
                process.exit()
            })
    }

    static deleteTag(id) {
        Model.Tag.deleteTag(id)
         .then(function(deletedTag) {
             View.display(`${deletedTag} tag has been deleted`)
         })
         .catch(function(err) {
             View.display(err)
         })
         .then(function() {
             process.exit()
         })
    }
}

module.exports = TagController