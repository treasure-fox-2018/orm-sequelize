const ControllerAuthor = require('./controllers/controllerAuthor.js');
const ControllerArticle = require('./controllers/controllerArticle.js');
const ControllerTag = require('./controllers/controllerTag.js');
const table = process.argv[2]
const command = process.argv[3]
var param1 = process.argv[4]
var param2 = process.argv[5]
var param3 = process.argv[6]
var param4 = process.argv[7]
var param5 = process.argv[8]
var param6 = process.argv[9]

// var input = process.argv.slice(4)

if(table === "help"){
    console.log(`
    ====documentation===============================================
    author add -> add<space> "data yang ingin dimasukan"
    author read_one -> read_one<space> "masukkan id author"
    author read_all -> read_all
    author update -> update<space> "masukkan data yang ingin di update dan idnya"
    author delete -> delete<space> "masukkan id author"
    tag add -> add<space> "data yang ingin dimasukan"
    tag read_one -> read_one<space> "masukkan id tag"
    tag read_all -> read_all
    tag update -> update<space> "masukkan data yang ingin di update dan idnya"
    tag delete -> delete<space> "masukkan id author"
    article add -> add<space> "data yang ingin dimasukan"
    article read_one -> read_one<space> "masukkan id article"
    article read_all -> read_all
    article update -> update<space> "masukkan data yang ingin di update dan idnya"
    article delete -> delete<space> "masukkan id author"
    ================================================================
    `);

}else if(table === "author"){
        if(command === "add"){
            ControllerAuthor.add(param1,param2,param3,param4,param5)
        }else if(command === "read_one"){
            ControllerAuthor.readOne(param1)
        }else if(command === "read_all"){
            ControllerAuthor.readAll()
        }else if(command === "update"){
            ControllerAuthor.update(param1,param2,param3,param4,param5,param6)
        }else if(command === "delete"){
            ControllerAuthor.delete(param1)
        }
}

