const modelTag = require('../models/')

class ControllerTag{
    static cek(){
        console.log('tag');
        
    }

    static addData(name){
        modelTag.Tag.create({name:name})
        .then(response=>{
            console.log('data telah ditambahkan');
        })

        .catch(response=>{
            console.log('data gaga ditambahkan');
            
        })
    }

    static 
}

module.exports = ControllerTag