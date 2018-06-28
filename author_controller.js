const Model = require('./models')
const View = require('./view.js')
class AuthorController {
    static add(first_name,last_name,religion,gender,age){
        Model.Author.create({
            first_name: first_name,
            last_name: last_name,
            religion: religion,
            gender: gender,
            age: age,
            // createdAt: new Date(),
            // updatedAt: new Date()
        })
        .then(() => {
            View.show(`Data has been Added`)
        })
        .catch((err) => {
            View.showError(err)
        })
    }

    static readOne(id){
        Model.Author.findById(id,{
            where: {id:id}
        })
        .then((data_author) => {
            View.show(data_author)
        })
        .catch((err) => {
            View.showError(err)
        })
    }

    static readAll(){
        Model.Author.findAll({
            raw:true
        })
        .then((data_author) => {
            View.show(data_author)
        })
    }

    static update(id,first_name,last_name,religion,gender,age){
        Model.Author.update({
            first_name: first_name,
            last_name: last_name,
            religion: religion,
            gender: gender,
            age: age,
            // createdAt: new Date(),
            // updatedAt: new Date()
        },{where: {id:id}})
        .then(() => {
            View.show(`Data has been Updated`)
        })
        .catch((err) => {
            View.showError(err)
        })
    }

    static delete(id){
        Model.Author.destroy({
            where: {id:id}
        })
        .then(() => {
            View.show(`Data has been deleted`)
        })
        .catch((err)=>{
            View.showError(err)
        })
    }
}

module.exports = AuthorController