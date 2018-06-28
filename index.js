const Controller = require("./controller/controller.js");
const Article = require("./models/article.js")
const Author = require("./models/author.js");
const Tag = require("./models/tag.js");

let argv = process.argv
let table = argv[2]
let command = argv[3]
// let parameter = argv.slice[4]

if (table === 'help'){
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

} else if (table === 'author'){
    if(command === 'add'){
        let first_name = argv[4];
        let last_name = argv[5];
        let religion = argv[6];
        let gender = argv[7];
        let age = argv[8];
        Controller.c_addAuthor(first_name, last_name, religion, gender, age)
    }else if (command === 'readOne'){
        let id = argv[4];
        Controller.c_readOneAuthor(id)
    }else if (command === 'readAll'){
        Controller.c_readAllAuthor()
    }else if(command === 'update'){
        let first_name = argv[4];
        let last_name = argv[5];
        let religion = argv[6];
        let gender = argv[7];
        let age = argv[8];
        let id = argv[9]
        Controller.c_updateAuthor(first_name, last_name, religion, gender, age,id)

    } else if (command === "erase"){
        let id = argv[4]
        Controller.c_eraseAuthor(id);
    }
}else if (table === 'article'){

}