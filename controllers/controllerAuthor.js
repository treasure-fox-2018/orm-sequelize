var modelAuthor = require('../models/')


class controllerAuthor{
    static cek(){
        console.log('aaa');
    }

    static addData(first_name,last_name,religion,gender,age){
        modelAuthor.Author.create({
            first_name :first_name,
            last_name : last_name,
            religion : religion,
            gender : gender,
            age : age})
            .then(response => {
                console.log('sukses');
            }).catch(response => {
                console.log('gagal');
            })
    }

    static readOne(id){
        modelAuthor.Author.findById(id,{raw:true})
        .then(response => {
            console.log(response);
            
        })
        .catch(response => {
            console.log('data tidak ditemukan');
            
        })
    }

    static readAll(){
        modelAuthor.Author.findAll({raw:true})
        .then(response => {
            console.log(response);
            
        })
        .catch(response => {
            console.log('err');
            
        })
    }

    static update(first_name, last_name, religion, gender, age, id){
        modelAuthor.Author.update(
            {first_name : first_name,
            last_name : last_name,
            religion : religion,
            gender: gender,
            age:age},{
            where:{id:Number(id)}})
            .then(response => {
                console.log('data telah diupdate');
            })
            .catch(response => {
                console.log('file tidak ada');
                
            })

    }

    static erase(id){
        modelAuthor.Author.destroy({where:{id:Number(id)}})
        .then(response =>{
            console.log('data telah dihapus');
        })
        .catch(response => {
            console.log('data tidak ada');
            
        })
    }
}

module.exports = controllerAuthor