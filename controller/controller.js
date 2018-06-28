
const Model = require("./models/.");
const Author = Model.Author;
const Article = Model.Article;
const Tag = Model.Tag;

class Controller {
    
    static c_addAuthor(first_name, last_name, religion, gender, age){
        Author.create({
            first_name:first_name,
            last_name:last_name,
            religion:religion,
            gender:gender,
            age:age
        })
        .then(author =>{
            console.log(author);
        })
        .catch(err =>{
            console.log(err);
        })
    }

    static c_readOneAuthor(id){
        Author.findById(id)
        .then(author =>{
            console.log(author)
        })
        .catch(author => {
            console.log(err);
        })
    }

    static c_readAllAuthor(){
        Author.findAll()
        .then(author =>{
            console.log(author)
        })
        .catch(err =>{
            console.log(err);
        })
    }

    static c_updateAuthor(first_name, last_name, religion, gender, age,id){
        Author.update({
            first_name:first_name,
            last_name:last_name,
            religion:religion,
            gender:gender,
            age:age,
            id:id
        })
        .then(updateAuthor =>{
            console.log(updateAuthor)
        })
        .catch(err =>{
            console.log(err);
        })
    }
    
    static c_eraseAuthor(id){
        Author.destroy({where: {id:id}})
        .then(deleteAuthor =>{
            console.log(`Author "${deleteAuthor.first_name}" "${deleteAuthor.last_name}" has been deleted from database`)
        })
    }




}

module.exports = Controller