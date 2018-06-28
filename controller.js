const Model = require('./models')
const View = require('./view')
// const Op = Sequelize.op

class Controller {


    static c_help() {

        View.v_help()
    }

    static c_add(firstName, lastName, religion, gender, age) {

        Model.Author.create({ first_name: firstName, last_name: lastName, religion: religion, gender: gender, age: age })
            .then(data => {
                // let value = data.get({ plain: true })
                View.createMessageAllert(data)
            })
            .catch(err => {
                View.createMessageAllert(err)
            })

    }


    static c_readOne(id) {

        Model.Author.findById(id)
            .then(data => {
                let value = data.get({ plain: true })
                View.createMessageAllert(value)
            })
            .catch(err => {
                View.createMessageAllert(err)
            })

    }


    static c_readAll() {


        Model.Author.findAll()
            .then(data => {
                let value = data.get({ plain: true })
                View.createMessageAllert(data)
            })
            .catch(err => {
                View.createMessageAllert(err)
            })

    }



    static c_delete(id) {
        Model.Author.destroy({ where: { id: id } })
            .then(data => {
                // let value = data.get({ plain: true })
                let message = `row dengan id ${id} berhasil dihapus`
                View.createMessageAllert(message)
            })
            .catch(err => {
                View.createMessageAllert(err)
            })
    }


    static c_update(id, collumn, update) {

        console.log(Model.Author.first_name)
        Model.Author.update({ set: { collumn: update } }, { where: { id: id } })
            .then(data => {
                // let value = data.get({ plain: true })
                let message = `row dengan id ${id} berhasil di update`
                View.createMessageAllert(message)
            })
            .catch(err => {
                View.createMessageAllert(err)
            })
    }

}

module.exports = Controller