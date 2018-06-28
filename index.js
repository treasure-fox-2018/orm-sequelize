const ControllerAuthor = require('./controllers/author')
const ControllerArticle = require('./controllers/article')
const ControllerTag = require('./controllers/tag')
const viewHelp = require('./views/help')
const argv = process.argv.slice(2)
const table = argv[0]
const command = argv[1]

if(table === "help"){
    viewHelp.help()
}

if(table === "author"){
    if(command === "add"){
        ControllerAuthor.add(argv[2], argv[3], argv[4], argv[5], argv[6])
    }
    if(command === "read_one"){
        ControllerAuthor.readOne(argv[2])
    }
    if(command === "read_all"){
        ControllerAuthor.readAll()
    }
    if(command === "update"){
        ControllerAuthor.update(argv[2], argv[3], argv[4])
    }
    if(command === "erase"){
        ControllerAuthor.erase(argv[2])
    }
}

if(table === "article"){
    if(command === "add"){
        ControllerArticle.add(argv[2], argv[3], argv[4], argv[5])
    }
    if(command === "read_one"){
        ControllerArticle.readOne(argv[2])
    }
    if(command === "read_all"){
        ControllerArticle.readAll()
    }
    if(command === "update"){
        ControllerArticle.update(argv[2], argv[3], argv[4])
    }
    if(command === "erase"){
        ControllerArticle.erase(argv[2])
    }
}

if(table === "tag"){
    if(command === "add"){
        ControllerTag.add(argv[2])
    }
    if(command === "read_one"){
        ControllerTag.readOne(argv[2])
    }
    if(command === "read_all"){
        ControllerTag.readAll()
    }
    if(command === "update"){
        ControllerTag.update(argv[2], argv[3], argv[4])
    }
    if(command === "erase"){
        ControllerTag.erase(argv[2])
    }

}