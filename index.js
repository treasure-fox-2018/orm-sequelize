const Controller = require('./controllers/controller.js');

let args = process.argv
let command = process.argv[2]
let task = process.argv[3]
let input = process.argv.splice(4)

if (!command) {
  Controller.displayHelp()
}else if (command == 'help') {
  Controller.displayCommands()
}else if (command == 'author') {
  if (task == 'add') {
    Controller.addAuthor(input)
  }else if (task == 'read_one') {
    Controller.displayAnAuthor(input)
  }else if (task == 'read_all') {
    Controller.displayAllAuthor(input)
  }else if (task == 'update') {
    Controller.updateAuthor(input)
  }else if (task == 'delete') {
    Controller.deleteAuthor(input)
  }
}else if (command == 'tag') {
  if (task == 'add') {
    Controller.addTag(input)
  }else if (task == 'read_one') {
    Controller.displayAnTag(input)
  }else if (task == 'read_all') {
    Controller.displayAllTag(input)
  }else if (task == 'update') {
    Controller.updateTag(input)
  }else if (task == 'delete') {
    Controller.deleteTag(input)
  }
}else if (command == 'article') {
  if (task == 'add') {
    Controller.addArticle(input)
  }else if (task == 'read_one') {
    Controller.displayAnArticle(input)
  }else if (task == 'read_all') {
    Controller.displayAllArticle(input)
  }else if (task == 'update') {
    Controller.updateArticle(input)
  }else if (task == 'delete') {
    Controller.deleteArticle(input)
  }
}
