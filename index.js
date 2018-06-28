const argv = process.argv
argv.splice(0,2)

const table = argv[0]
const command = argv[1]

const Controller = require('./controller.js')
const AuthorController = Controller.Author
const TagController = Controller.Tag
const ArticleController = Controller.Article 

switch (table){
    case "author":
        if(command=="add"){
            // "author add -> author add <firstname> <lastname> <religion> <gender> <age>"
            AuthorController.Add(argv[2],argv[3],argv[4],argv[5],argv[6])
        }
        else if(command=="read_one"){
            // "author read_one -> author read_one <id>"
            AuthorController.findbyId(argv[2])
        }
        else if(command=="read_all"){
            // "author read_all -> author read_all"
            AuthorController.showAll()
        }
        else if(command=="update"){
            // "author update -> author update <column> <value> <id>"
            AuthorController.Update(argv[2],argv[3],argv[4])
        }
        else if(command=="delete"){
            // "author delete -> author delete <id>"
            AuthorController.Delete(argv[2])
        }
    break;
    case "tag":
        if(command=="add"){
            // "tag add -> tag add <name>"
            TagController.Add(argv[2])
        }
        else if(command=="read_one"){
            // "tag read_one -> tag read_one <id>"
            TagController.findbyId(argv[2])
        }
        else if(command=="read_all"){
            // "tag read_all -> tag read_all"
            TagController.showAll()
        }
        else if(command=="update"){
            // "tag update -> tag update <value> <id>"
            TagController.Update(argv[2],argv[3])
        }
        else if(command=="delete"){
            // "tag delete -> tag delete <id>"
            TagController.Delete(argv[2])
        }
    break;
    case "article":
        if(command=="add"){
            // "article add -> article add <title> <body> <authorId> <tagId>"
            ArticleController.Add(argv[2],argv[3],argv[4],argv[5])
        }
        else if(command=="read_one"){
            // "article read_one -> article read_one <id>"
            ArticleController.findbyId(argv[2])
        }
        else if(command=="read_all"){
            // "article read_all -> article read_all"
            ArticleController.showAll()
        }
        else if(command=="update"){
            // "article update -> article update <column> <value> <id>"
            ArticleController.Update(argv[2],argv[3],argv[4])
        }
        else if(command=="delete"){
            // "article delete -> article delete <id>"
            ArticleController.Delete(argv[2])
        }
    break;
    default:
        console.log(`
        =============================== documentation ==================================
        author add -> add<space> "data yang ingin dimasukan"
        author read_one -> read_one<space> "masukan id author"
        author read_all -> read_all
        author update -> update<space> "masukan data yang ingin di update dan idnya"
        author delete -> delete<space> "masukan id author"
        tag add -> add<space> "data yang ingin dimasukan"
        tag read_one -> read_one<space> "masukan id tag"
        tag read_all -> read_all
        tag update -> update<space> "masukan data yang ingin di update dan idnya"
        tag delete -> delete<space> "masukan id tag"
        article add -> add<space> "data yang ingin dimasukan"
        article read_one -> read_one<space> "masukan id tag"
        article read_all -> read_all
        article update -> update<space> "masukan data yang ingin di update dan idnya"
        article delete -> delete<space> "masukan id tag"
        ================================================================================`);
}