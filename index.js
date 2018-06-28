let argv = process.argv
const Controller = require("./controller.js")
const ArticleController = require("./articleController.js")
const TagController = require("./tagController.js")
let command = argv[2]
let data = argv[3]
let param = argv.slice(4)

if(command == "author"){
    if(data == "add"){
        Controller.create(param)
    }else if(data == "find"){
        Controller.readOne(param)
    }else if(data == "findAll"){
        Controller.readAll()
    }else if(data == "update"){
        Controller.update(param)
    }
}else if(command == "article"){
    if(data == "add"){
        ArticleController.create(param)
    }else if(data == "find"){
        ArticleController.readOne(param)
    }else if(data == "findAll"){
        ArticleController.readAll()
    }else if(data == "update"){
        ArticleController.update(param)
    }
}else if(command == "tag"){
    if(data == "add"){
        TagController.create(param)
    }else if(data == "find"){
        TagController.readOne(param)
    }else if(data == "findAll"){
        TagController.readAll()
    }else if(data == "update"){
        TagController.update(param)
    }
}