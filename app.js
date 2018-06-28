let argv = process.argv
let table = argv[2]
let command = argv[3]
let Controller = require('./controller')
let id;
// console.log(argv[2],argv[3],argv[4],argv[5],argv[6],argv[7],argv[8])

if (command === 'help') {

    Controller.c_help();

}


if (table === 'author') {
    switch (command) {

        case 'add':
            let firstName = argv[4]
            let lastName = argv[5]
            let religion = argv[6]
            let gender = argv[7]
            let age = argv[8];

            Controller.c_add(firstName, lastName, religion, gender, age);
            break;

        case 'read_one':
            id = argv[4];
            Controller.c_readOne(id);
            break;

        case 'read_all':
            // let read = argv[4];
            Controller.c_readAll();
            break;

        case 'update':
            id = argv[4]
            let collumn=argv[5]
            let update = argv[6];
            Controller.c_update(id,collumn ,update);
            break;

        case 'delete':
            id = argv[4];
            Controller.c_delete(id);
            break;
    }


}

// if (table === 'tag') {
//     switch (command) {

//         case 'add':
//             let addData = argv[4];
//             Controller.c_add(addData);
//             break;
//         case 'read_one':
//             id = argv[4];
//             Controller.c_readOne(id);
//             break;

//         case 'read_all':
//             let read = argv[4];
//             Controller.c_read(read);
//             break;

//         case 'update':
//             id = argv[4]
//             let update = argv[5];
//             Controller.c_update(id, update);
//             break;

//         case 'delete':
//             id = arbv[4];
//             Controller.c_delete(id);
//             break;
//     }

// }

// if (table === 'article') {
//     switch (command) {

//         case 'add':
//             let addData = argv[4];
//             Controller.c_add(addData);
//             break;
//         case 'read_one':
//             id = argv[4];
//             Controller.c_readOne(id);
//             break;

//         case 'read_all':
//             let read = argv[4];
//             Controller.c_read(read);
//             break;

//         case 'update':
//             id = argv[4]
//             let update = argv[5];
//             Controller.c_update(id, update);
//             break;

//         case 'delete':
//             id = arbv[4];
//             Controller.c_delete(id);
//             break;
//     }

// }