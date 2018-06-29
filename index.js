const authorController = require('./authorController.js');
const articleController = require('./articleController.js');
const tagController = require('./tagController.js');

let argv = process.argv;
let table = argv[2];
let command = argv[3];

if(table == 'help'){
  console.log(['author add       ---> add <space> "input"',
             'author read_one  ---> read_one <space> "input id author"',
             'author read_all  ---> read_all',
             'author update    ---> update <space> "input data to update and input id"',
             'author delete    ---> delete <space> "input author id"',
             'tag add          ---> add <space> "input"',
             'tag read_one     ---> read_one <space> "input id author"',
             'tag read_all     ---> read_all',
             'tag update       ---> update <space> "input data to update and input id"',
             'tag delete       ---> delete <space> "input author id"',
             'article add      ---> add <space> "input"',
             'article read_one ---> read_one <space> "input id author"',
             'article read_all ---> read_all',
             'article update   ---> update <space> "input data to update and input id"',
             'article delete   ---> delete <space> "input author id"',])
}else if(table == 'author'){
  if(command == 'add'){
    let first_name = argv[4];
    let last_name = argv[5];
    let religion = argv[6];
    let gender = argv[7];
    let age = argv[8];
    authorController.add(first_name, last_name, religion, gender, age)
  }else if (command == 'read_one') {
    let id = argv[4]
    authorController.read_one(id)
  }else if (command == 'read_all') {
    authorController.read_all()
  }else if (command == 'update') {
    let id = argv[4];
    let first_name = argv[5];
    let last_name = argv[6];
    let religion = argv[7];
    let gender = argv[8];
    let age = argv[9];
    authorController.update(id, first_name, last_name, religion, gender, age)
  }else if (command == 'delete') {
    let id = argv[4]
    authorController.delete(id)
  }
}else if (table == 'article') {
  if(command == 'add'){
    let title = argv[4];
    let body = argv[5];
    let AuthorId = argv[6];
    let TagId = argv[7];
    articleController.add(title, body, AuthorId, TagId)
  }else if (command == 'read_one') {
    let id = argv[4]
    articleController.read_one(id)
  }else if (command == 'read_all') {
    articleController.read_all()
  }else if (command == 'update') {
    let id = argv[4];
    let first_name = argv[5];
    let last_name = argv[6];
    let religion = argv[7];
    let gender = argv[8];
    let age = argv[9];
    articleController.update(id, title, body, AuthorId, TagId)
  }else if (command == 'delete') {
    let id = argv[4]
    articleController.delete(id)
  }
}else if (command == 'tag') {
  if(command == 'add'){
    let name = argv[4];
    let description = argv[5];
    tagController.add(name, description)
  }else if (command == 'read_one') {
    let id = argv[4]
    tagController.read_one(id)
  }else if (command == 'read_all') {
    tagController.read_all()
  }else if (command == 'update') {
    let id = argv[4];
    let name = argv[5];
    tagController.update(id, name)
  }else if (command == 'delete') {
    let id = argv[4]
    tagController.delete(id)
  }
}
