
const chalk = require('chalk');

class View {

    static createMessageAllert(param) {
        console.log(param)
    }


    static v_display() {

        console.log(message)
    }
    static v_help() {



        let message = console.log('==============================> Documentations <=====================================')
        console.log('1. node index.js author add <first_name> <last_name> <religion> <gender> <age>');
        console.log('2. node index.js author read_one <id>');
        console.log('3. node index.js author read_all');
        console.log('4. node index.js author update <id> <first_name> <last_name> <religion> <gender> <age>');
        console.log('5. node index.js author delete <id>');
        console.log('6. node index.js tag add <name>');
        console.log('7. node index.js tag read_one <id>');
        console.log('8. node index.js tag read_all”');
        console.log('9. node index.js tag update <id> <name>');
        console.log("10. node index.js tag delete <id>“");
        console.log("“11. node index.js article add <title> <body> <AuthorId> <TagId>“");
        console.log("“12. node index.js article read_one <id>“");
        console.log("“13. node index.js article read_all”");
        console.log("“14. node index.js article update <id> <title> <body> <AuthorId> <TagId>“");
        console.log("“15. node index.js article delete <id>“");
        console.log('====================================================================================')
    }


}

module.exports = View                   