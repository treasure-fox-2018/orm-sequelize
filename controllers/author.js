const Model = require('../models')
const View = require('../views/author')

class Author{
    static add(first_name, last_name, religion, gender, age){
        let obj = {}
        obj.first_name = first_name
        obj.last_name = last_name
        obj.religion = religion
        obj.gender = gender
        obj.age = age

        Model.Author.create(obj)
        .then(author => {
            View.add(author.toJSON())
        })
    }

    static readOne(id){
        Model.Author.findById(id)
        .then(authorId => {
            View.readOne(authorId.toJSON())
        })
    }

    static readAll(){
        Model.Author.findAll()
        .then(authors => {
            authors.forEach(dataAuthor => {
                View.readAll(dataAuthor.dataValues)  
            })
        })
    }

    static update(id, column, value){
        Model.Author.update(
            {[column]: value}, {where : {id}
        })
        .then(authors => {
                View.update(`Successfully update author ID ${id}!`)  
        })
    }

    static erase(id){
        Model.Author.destroy({
            where : {id}
        })
        .then(delAuthor => {
            View.erase(`Successfully delete author ID ${id}!`)
        })
    }
}

module.exports = Author