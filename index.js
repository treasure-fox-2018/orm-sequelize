const Article = require('./controllers/article')
const Author = require('./controllers/author')
const Tag = require('./controllers/tag')
const List = require('./controllers/commandList')

let target = process.argv[2]
let command = process.argv[3]
let input = process.argv.slice(4)

if (target == 'author'){
  if (command == 'add'){
    Author.add(input)
  } else if (command == 'read_one'){
    Author.show(input)
  } else if (command == 'read_all'){
    Author.showAll(input)
  } else if (command == 'update'){
    Author.update(input)
  } else if (command == 'erase'){
    Author.delete(input)
  } else {
    List.help();
  }

} else if (target == 'article'){
  if (command == 'add'){
    Article.add(input)
  } else if (command == 'read_one'){
    Article.show(input)
  } else if (command == 'read_all'){
    Article.showAll(input)
  } else if (command == 'update'){
    Article.update(input)
  } else if (command == 'erase'){
    Article.delete(input)
  } else {
    List.help();
  }

} else if (target == 'tag'){
  if (command == 'add'){
    Article.add(input)
  } else if (command == 'read_one'){
    Article.show(input)
  } else if (command == 'read_all'){
    Article.showAll(input)
  } else if (command == 'update'){
    Article.update(input)
  } else if (command == 'erase'){
    Article.delete(input)
  } else {
    List.help();
  }

} else {
  List.help();
}