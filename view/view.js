
class View {

    static help() {
        console.log(`node index.js [table_name] add [attribute_value] [attribute_value]`);
        console.log(`node index.js [table_name] readOne [id]`);
        console.log(`node index.js [table_name] readAll`);
        console.log(`node index.js [table_name] update [id] [column] [value]`);
        console.log(`node index.js [table_name] erase [id]`);
        
    }
}

module.exports = View