const AuthorController = require('./author_controller')
const TagController = require('./tag_controller')
const ArticleController = require('./article_controller')

let argv = process.argv
let type = argv[2]
let command = argv[3]

if (command == 'help') {
    console.log(`====documentation================== \n 
                 author add --> add<space> "data yang ingin dimasukan" \n
                 author read_one --> read_one<space> "masukan id author" \n
                 author read_all --> read_all \n
                 author update --> update<space> "masukan data yang ingin di update dan idnya" \n
                 author delete --> delete<space> "masukan id author" \n
                 tag add --> add<space> "data yang ingin dimasukan" \n
                 tag read_one --> read_one<space> "masukan id tag" \n
                 tag read_all --> read_all \n
                 tag update --> update<space> "masukan data yang ingin di update dan idnya" \n
                 tag delete --> delete<space> "masukan id author" \n
                 article add --> add<space> "data yang ingin dimasukan" \n
                 article read_one --> read_one<space> "masukan id article" \n
                 article read_all --> read_all \n
                 article update --> update<space> "masukan data yang ingin di update dan idnya" \n
                 article delete --> delete<space> "masukan id author" \n
                 =====================================`)
}else if (type == 'author') {
    if(command == 'add'){
        let first_name = argv[4]
        let last_name = argv[5]
        let religion = argv[6]
        let gender = argv[7]
        let age = argv[8]
        AuthorController.add(first_name,last_name,religion,gender,age)
    }else if (command == 'read_one') {
        let id = argv[4]
        AuthorController.readOne(id)
    }else if (command == 'read_all') {
        AuthorController.readAll()
    }else if (command == 'update') {
        let id = argv[4]
        let first_name = argv[5]
        let last_name = argv[6]
        let religion = argv[7]
        let gender = argv[8]
        let age = argv[9]
        AuthorController.update(id,first_name,last_name,religion,gender,age)
    }else if (command == 'delete') {
        let id = argv[4]
        AuthorController.delete(id)
    }
}else if (type == 'tag') {
    if(command == 'add'){
        let name = argv[4]
        TagController.add(name)
    }else if (command == 'read_one') {
        let id = argv[4]
        TagController.readOne(id)
    }else if (command == 'read_all') {
        TagController.readAll()
    }else if (command == 'update') {
        let id = argv[4]
        let name = argv[5]
        TagController.update(name)
    }else if (command == 'delete') {
        let id = argv[4]
        TagController.delete(id)
    }
}else if (type == 'article') {
    if(command == 'add'){
        let title = argv[4]
        let body = argv[5]
        let authorId = argv[6]
        let tagId = argv[7]
        ArticleController.add(title,body,authorId,tagId)
    }else if (command == 'read_one') {
        let id = argv[4]
        ArticleController.readOne(id)
    }else if (command == 'read_all') {
        ArticleController.readAll()
    }else if (command == 'update') {
        let id = argv[4]
        let title = argv[5]
        let body = argv[6]
        let authorId = argv[7]
        let tagId = argv[8]
        ArticleController.update(id,title,body,authorId,tagId)
    }else if (command == 'delete') {
        let id = argv[4]
        ArticleController.delete(id)
    }
}