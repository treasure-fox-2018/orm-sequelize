const Model = require('./models')
const View = require('./view')

class TagController {
    static add(name){
        Model.Tag.create({
            name:name
        })
        .then(() => {
            View.show(`Data has been Added`)
        })
        .catch((err) => {
            View.showError(err);
        })
    }

    static readOne(id){
        Model.Tag.findById(id,{
            where: {id:id}
        })
        .then((data_tag)=> {
            View.show(data_tag)
        })
        .catch((err) => {
            View.showError(err)
        })
    }

    static readAll(){
        Model.Tag.findAll({
            raw:true
        })
        .then((data_tag) => {
            View.show(data_tag)
        })
        .catch((err)=>{
            View.showError(err)
        })
    }

    static update(id,name){
        Model.Tag.update({
            name:name
        },{where: {id:id}})
        .then(() => {
            View.show(`Data has been Updated`)
        })
        .catch((err) => {
            View.showError(err)
        })
    }

    static delete(id){
        Model.Tag.destroy({
            where:{id:id}
        })
        .then(() => {
            View.show(`Data has been Deleted`)
        })
        .catch((err) => {
            View.showError(err)
        })
    }
}

module.exports = TagController