const ControllerHelp = require('./controllers/controllersHelp')
const ControllerAuthor = require('./controllers/controllersAuthor')
const ControllerArticle = require('./controllers/controllersArticle')
const ControllerTag = require('./controllers/controllersTag')
argv = process.argv

let command = argv.slice(2, 4).join(' ')
let information = argv.slice(4)

console.log(`your command : ${command} -- ${information}`)


if(command === "help"){
    ControllerHelp.viewHelp()
}
//========================================================

if(command === "author add"){
    ControllerAuthor.addAuthor(information)
}

if(command === "author read_one"){
    ControllerAuthor.readOne(information[0])
}

if(command === "author read_all"){
    ControllerAuthor.readAll()
}

if(command === "author update"){
    ControllerAuthor.update(information)
}

if(command === "author delete"){
    ControllerAuthor.delete(information[0])
}
//=========================================================
if(command === "article add"){
    ControllerArticle.addArticle(information)
}

if(command === "article read_one"){
    ControllerArticle.readOne(information[0])
}

if(command === "article read_all"){
    ControllerArticle.readAll()
}

if(command === "article update"){
    ControllerArticle.update(information)
}

if(command === "article delete"){
    ControllerArticle.delete(information[0])
}

//==========================================================

if(command === "tag add"){
    ControllerTag.addTag(information)
}

if(command === "tag read_one"){
    ControllerTag.readOne(information[0])
}

if(command === "tag read_all"){
    ControllerTag.readAll()
}

if(command === "tag update"){
    ControllerTag.update(information)
}

if(command === "tag delete"){
    ControllerTag.delete(information[0])
}