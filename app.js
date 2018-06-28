const Controller = require('./controller.js');
const articleModel = require('./models/article.js');
const authorModel = require('./models/author.js');
const tagModel = require('./models/tag.js');

let argv = process.argv;
let table = argv[2];
let command = argv[3];

if (table == 'help') {
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
} else if (table == 'author') {
    if (command == 'add') {
        let first_name = argv[4];
        let last_name = argv[5];
        let religion = argv[6];
        let gender = argv[7];
        let age = argv[8];
        Controller.addAuthor(first_name, last_name, religion, gender, age)

    } else if (command == 'read_one') {
        let id = argv[4];
        Controller.readOneAuthor(id)

    } else if (command == 'read_all') {
        Controller.readAllAuthor()

    } else if (command == 'update') {
        let first_name = argv[4];
        let last_name = argv[5];
        let religion = argv[6];
        let gender = argv[7];   
        let age = argv[8];
        let id = argv[9];
        Controller.updateAuthor(first_name, last_name, religion, gender, age, id)

    } else if (command == 'erase') {
        let id = argv[4];
        Controller.eraseAuthor(id)

    }

} else if (table == 'article') {
    if (command == 'add') {

    } else if (command == 'read_one') {

    } else if (command == 'read_all') {

    } else if (command == 'update') {

    } else if (command == 'erase') {

    }


} else if (table == 'tag') {
    if (command == 'add') {

    } else if (command == 'read_one') {

    } else if (command == 'read_all') {

    } else if (command == 'update') {

    } else if (command == 'erase') {
        
    }


}
