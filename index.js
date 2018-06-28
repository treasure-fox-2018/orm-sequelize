let Controller = require('./controller/controller')
let argv = process.argv

let menu = argv[2]
let option = argv[3]
let data = argv.splice(4)

if(menu === 'author'){
    if(option === 'add'){
        Controller.addAuthor(data)
    } else if(option === 'read_one'){
        Controller.read_one_author(data[0])
    } else if(option === 'read_all'){
        Controller.read_all_author()
    } else if(option === 'update'){
        Controller.update_author(data[0],data[1],data[2])
    } else if(option === 'erase'){
        Controller.erase_author(data[0])
    }
}