const Article = require('./controllers/article')
const Author = require('./controllers/author')
const Tag = require('./controllers/tag')
const List = require('./controllers/commandList')

let target = process.argv[2]
let command = process.argv[3]
let input = process.argv.slice(4)


if (target == 'author'){
  if (command == 'add'){
    let first_name = input[4];
    let last_name = input[5];
    let religion = input[6];
    let gender = input[7];
    let age = input[8];
    Author.add(first_name, last_name, religion, gender, age)

  } else if (command == 'read_one'){
    

  } else if (command == 'read_all'){
    
  } else if (command == 'update'){
    
  } else if (command == 'erase'){
    
  }

} else if (target == 'tag'){
  if (command == 'add'){

  } else if (command == 'read_one'){
    
  } else if (command == 'read_all'){
    
  } else if (command == 'update'){
    
  } else if (command == 'erase'){
    
  }

} else if (target == 'article'){
  if (command == 'add'){

  } else if (command == 'read_one'){
    
  } else if (command == 'read_all'){
    
  } else if (command == 'update'){
    
  } else if (command == 'erase'){
    
  }

} else {
  List.help();
}