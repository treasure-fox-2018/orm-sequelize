const argv = process.argv
const Controller = require('./controller/controller')

let table = argv[2]
let command = argv[3]

if ( argv[2] == 'help') {
  Controller.showHelp()
} else if(table == 'author') {
  if(command == 'add') {
    const first_name = argv[4]
    const last_name = argv[5]
    const religion = argv[6]
    const gender = argv[7]
    const age = argv[8]
    Controller.authorAdd(first_name,last_name,religion,gender,age)
  }
  if(command == 'read_one') {
    let id = argv[4]
    Controller.authorReadOne(id)
  }
  if(command == 'read_all') {
    Controller.authorReadAll()
  }
  if (command == 'update') {
    const id = argv[4]
    const first_name = argv[5]
    const last_name = argv[6]
    const religion = argv[7]
    const gender = argv[8]
    const age = argv[9]
    Controller.authorUpdate(id,first_name,last_name,religion,gender,age)
  }
  if(command == 'delete') {
    let id = argv[4]
    Controller.authorDelete(id)
  }
} else if(table == 'tag') {
  if(command == 'add') {
    const name = argv[4]
    Controller.tagAdd(name)
  }
  if(command == 'read_one') {
    let id = argv[4]
    Controller.tagReadOne(id)
  }
  if(command == 'read_all') {
    Controller.tagReadAll()
  }
  if (command == 'update') {
    const id = argv[4]
    const name = argv[5]
    Controller.tagUpdate(id,name)
  }
  if(command == 'delete') {
    let id = argv[4]
    Controller.tagDelete(id)
  }
} else if(table == 'article') {
  if(command == 'add') {
    const title = argv[4]
    const body = argv[5]
    const authodId = argv[6]
    const tagId = argv[7]
    Controller.articleAdd(title,body,authodId,tagId)
  }
  if(command == 'read_one') {
    let id = argv[4]
    Controller.articleReadOne(id)
  }
  if(command == 'read_all') {
    Controller.articleReadAll()
  }
  if (command == 'update') {
    const id = argv[4]
    const title = argv[5]
    const body = argv[6]
    const authodId = argv[7]
    const tagId = argv[8]
    Controller.articleUpdate(id,title,body,authodId,tagId)
  }
  if(command == 'delete') {
    let id = argv[4]
    Controller.delete(id)
  }
}

