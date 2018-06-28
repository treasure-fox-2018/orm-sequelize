const View = require('./view/view.js')
const Controller = require('./controller/controller.js')
const argv = process.argv
const table = argv[2]
const command = argv[3]

// node index.js Articles add (title, body, authorId, tagId)
// node index.js Author add (first_name, last_name, religion, gender, age)
// node index.js Tags add (name)

if(table == 'author') {
    if(command == 'add') {

    } else if(command == 'read_one') {

    } else if(command == 'read_all') {

    } else if(command == 'update') {

    } else if(command == 'erase') {

    }

} else if(table == 'tag') {
    if(command == 'add') {

    } else if(command == 'read_one') {

    } else if(command == 'read_all') {

    } else if(command == 'update') {

    } else if(command == 'erase') {
        
    }

} else if(table == 'article') {
    if(command == 'add') {

    } else if(command == 'read_one') {

    } else if(command == 'read_all') {

    } else if(command == 'update') {

    } else if(command == 'erase') {
        
    }

} else if(table == 'help') {
    View.help()
} else {
    console.log('Invalid input')
}