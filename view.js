const Table = require('cli-table');
const chalk = require('chalk');

class View {

    static displayError(errMessage) {
        console.log(`Error message: ${errMessage}`)
    }

    static displayMessage(message) {
        console.log(message)
    }

    static tableAll(input) {
        let table = new Table({
            chars: { 'top': '═' , 'top-mid': '╤' , 'top-left': '╔' , 'top-right': '╗'
              , 'bottom': '═' , 'bottom-mid': '╧' , 'bottom-left': '╚' , 'bottom-right': '╝'
              , 'left': '║' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼'
              , 'right': '║' , 'right-mid': '╢' , 'middle': '│' }
        })
        var headings = Object.keys(input[0]);
        table.push(headings);
        for (let i = 0; i < input.length; i++) {
            let dataRows = [];
            for (let j in input[i]) {
                dataRows.push(input[i][j])
            }
            table.push(dataRows);
        }
        console.log(table.toString());
    }

    static tableOne(input) {
        let table = new Table({
            chars: { 'top': '═' , 'top-mid': '╤' , 'top-left': '╔' , 'top-right': '╗'
              , 'bottom': '═' , 'bottom-mid': '╧' , 'bottom-left': '╚' , 'bottom-right': '╝'
              , 'left': '║' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼'
              , 'right': '║' , 'right-mid': '╢' , 'middle': '│' }
        })
        var headings = Object.keys(input);
        table.push(headings);
        let dataRow = [];
        for (let i in input) {
            dataRow.push(input[i])
        }
        table.push(dataRow);
        console.log(table.toString());
    }
   
}

module.exports = View;