const ControllerAuthor = require('./controllers/controllerAuthor')
const ControllerArticle = require('./controllers/controllerArticle')
const ControllerTag = require('./controllers/controllerTag')
var argv = process.argv

if(argv[2] === 'cek'){
    ControllerAuthor.cek()
    ControllerArticle.cek()
    ControllerTag.cek()
}else if(argv[2] === 'help'){
    console.log('==== documentation =====================================');
    console.log('author add -> add<space> "data yang ingin dimasukan"');
    console.log('author read_one -> read_one<space> "masukan id author"');
    console.log('author read all -> read_all');
    console.log('author update -> update<space> "masukan data yang ingin diupdate dan idnya"');
    console.log('author delete -> delete<space> "masukan id author"');
    console.log('tag add -> add<space> "data yang ingin dimasukan"');
    console.log('tag read_one -> read_one<space> "masukan id tag"');
    console.log('tag read all -> read_all');
    console.log('tag update -> update<space> "masukan data yang ingin diupdate dan idnya"');
    console.log('tag delete -> delete<space> "masukan id tag"');
    console.log('article add -> add<space> "data yang ingin dimasukan"');
    console.log('article read_one -> read_one<space> "masukan id article"');
    console.log('article read all -> read_all');
    console.log('article update -> update<space> "masukan data yang ingin diupdate dan idnya"');
    console.log('article delete -> delete<space> "masukan id article"');
    console.log('============================================================');

}else if(argv[2] === 'author'){
    if(argv[3] === 'add'){
        var first_name = argv[4]
        var last_name = argv[5]
        var religion = argv[6]
        var gender = argv[7]
        var age = argv[8]
        ControllerAuthor.addData(first_name,last_name,religion,gender,age)
    }else if(argv[3] === 'read_one'){
        var id = argv[4]
        ControllerAuthor.readOne(id)
    }else if(argv[3] === 'read_all'){
        ControllerAuthor.readAll()
    }else if(argv[3] === 'update'){
        var id = argv[9]
        var first_name = argv[4]
        var last_name = argv[5]
        var religion = argv[6]
        var gender = argv[7]
        var age = argv[8]
        ControllerAuthor.update(first_name, last_name, religion, gender, age, id)
    }else if(argv[3] === 'erase'){
        var id = argv[4]
        ControllerAuthor.erase(id)
    }
}else if(argv[2] === 'tag'){
    if(argv[3] === 'add'){
        var nama = argv[4]
        ControllerTag.addData(nama)
    }
    // }else if(argv[3] === )
}

