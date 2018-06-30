const View = require('./view/view.js')
const ArticleController = require('./controller/articleController')
const AuthorController = require('./controller/authorController')
const TagController = require('./controller/tagController')
const argv = process.argv
const table = argv[2]
const command = argv[3]

if(table == 'author') {
    if(command == 'add') {
        // node index.js author add (first_name last_name religion gender age)
        AuthorController.addAuthor(argv[4], argv[5], argv[6], argv[7], argv[8])
    } else if(command == 'read_one') {
        // node index.js author read_one [id]
        AuthorController.read_one(argv[4])

    } else if(command == 'read_all') {
        // node index.js author read_all
        AuthorController.read_all()

    } else if(command == 'update') {
        // node index.js author update [id first_name last_name religion gender age]
        AuthorController.updateAuthor(argv[4], argv[5], argv[6], argv[7], argv[8], argv[9])

    } else if(command == 'delete') {
        // node index.js author delete [id]
        AuthorController.deleteAuthor(argv[4])
    }
    
} else if(table == 'tag') {
    if(command == 'add') {
        // node index.js tags add [name]
        TagController.addTag(argv[4])
        
    } else if(command == 'read_one') {
        // node index.js tag read_one [id]
        TagController.read_one(argv[4])

    } else if(command == 'read_all') {
        // node index.js tag read_all
        TagController.read_all()

    } else if(command == 'update') {
        // node index.js tag update [id name]
        TagController.updateTag(argv[4], argv[5])
        
    } else if(command == 'delete') {
        // node index.js tag delete [id]
        TagController.deleteTag(argv[4])

    }
    
} else if(table == 'article') {
    if(command == 'add') {
        // node index.js Articles add (title, body, authorId, tagId)
        ArticleController.addArticle(argv[4], argv[5], argv[6], argv[7])
        
    } else if(command == 'read_one') {
        // node index.js article read_one [id]
        ArticleController.read_one(argv[4])

    } else if(command == 'read_all') {
        // node index.js article read_all
        ArticleController.read_all()
        
    } else if(command == 'update') {
        // node index.js article update [id title body authorId tagId]
        ArticleController.updateArticle(argv[4], argv[5], argv[6], argv[7], argv[8])

    } else if(command == 'delete') {
        // node index.js article delete [id]
        ArticleController.deleteArticle(argv[4])
    }
    
} else if(table == 'help') {
    View.help()
} else {
    console.log('Invalid input')
}