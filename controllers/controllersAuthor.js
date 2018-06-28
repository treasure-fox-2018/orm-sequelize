const ViewAuthor = require('../views/viewAuthor')
const model = require('../models')
const Author = model.Author

class ControllerAuthor{

    static addAuthor(information){
        Author
        .create({
            first_name:information[0],
            last_name:information[1],
            religion:information[2],
            gender:information[3],
            age:Number(information[4])
        })
        .then(function(author){
            ViewAuthor.addAuthor(author)
        })
        .catch(function(err){
            console.log(err)
        })
    }

    static readOne(id){
        Author
        .findById(id)
        .then(function(author){
            ViewAuthor.readOne(author)
        })
        .catch(function(err){
            console.error(err.message)
        })
    }

    static readAll(){
        Author
        .findAll()
        .then(function(authors){
            ViewAuthor.readAll(authors)
        })
        .catch(function(err){
            console.log(err.message)
        })

    }

    static update(information){
        let authorId = information[2]
        let attributes = information[0]
        let values = Number(information[1])
        let updateInfo = {}
            updateInfo[attributes] = values
        
        Author
        .update(updateInfo, {
            where:{id:authorId}
            }
        )
        .then(function(author){
            ViewAuthor.info('Success Update')
        })
        .catch(function(err){
            ViewAuthor.info('Gagal Update')
            console.log(err)
        })
    }

    static delete(id){
        Author
        .destroy({
            where:{id:id},
        })
        .then(function(author){
            ViewAuthor.info('Success delete')
        })
        .catch(function(err){
            ViewAuthor.info('Gagal delete')
            console.log(err)
        })
    }
}

module.exports = ControllerAuthor