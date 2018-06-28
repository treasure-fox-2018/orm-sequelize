const Table = require('cli-table');
const chalk = require('chalk')


class View {

  static printError(data) {
    console.log(`Error Message :`, data)
  }
  static printMessage(data) {
    console.log(data)
  }
  static showHelp() {
    const help = `
    ==== documentation ==========================================================
    author add -> add<space>"data yang ingin dimasukkan"
    author read_one -> read_one<space>"masukkan id author"
    author read_all -> rad_all
    author update -> update<space>"masukkan data yang ingin di update dan idnya"
    author delete -> delete<space>"masukkan id author"
    tag add -> add<space>"data yang ingin dimasukkan"
    tag read_one -> read_one<space>"masukkan id tag"
    tag read_all -> rad_all
    tag update -> update<space>"masukkan data yang ingin di update dan idnya"
    tag delete -> delete<space>"masukkan id tag"
    article add -> add<space>"data yang ingin dimasukkan"
    article read_one -> read_one<space>"masukkan id article"
    article read_all -> rad_all
    article update -> update<space>"masukkan data yang ingin di update dan idnya"
    article delete -> delete<space>"masukkan id article"
    ==== documentation ==========================================================
        `
    console.log(help)
  }

  static printTableAuthor(data) {
    let table = new Table({
        chars: { 'top': '═' , 'top-mid': '╤' , 'top-left': '╔' , 'top-right': '╗'
              , 'bottom': '═' , 'bottom-mid': '╧' , 'bottom-left': '╚' , 'bottom-right': '╝'
              , 'left': '║' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼'
              , 'right': '║' , 'right-mid': '╢' , 'middle': '│' },
        colWidths: [5, 15, 15, 15, 15, 5, 25, 25]      
      });
    let header = Object.keys(data[0])
    table.push(header)
    for (let i = 0 ; i < data.length ; i++) {
      let rowData = []
      for (let index in data[i]) {
        rowData.push(data[i][index])
      }
      table.push(rowData)
    }
    console.log(chalk.black.bgWhite(table.toString()));
  }

  static printTableAll(data) {
    let table = new Table({
        chars: { 'top': '═' , 'top-mid': '╤' , 'top-left': '╔' , 'top-right': '╗'
              , 'bottom': '═' , 'bottom-mid': '╧' , 'bottom-left': '╚' , 'bottom-right': '╝'
              , 'left': '║' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼'
              , 'right': '║' , 'right-mid': '╢' , 'middle': '│' }
      });
    let header = Object.keys(data[0])
    table.push(header)
    for (let i = 0 ; i < data.length ; i++) {
      let rowData = []
      for (let index in data[i]) {
        rowData.push(data[i][index])
      }
      table.push(rowData)
    }
    console.log(chalk.black.bgWhite(table.toString()));
  }

  static printTableOne(data) {
    let table = new Table({
        chars: { 'top': '═' , 'top-mid': '╤' , 'top-left': '╔' , 'top-right': '╗'
              , 'bottom': '═' , 'bottom-mid': '╧' , 'bottom-left': '╚' , 'bottom-right': '╝'
              , 'left': '║' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼'
              , 'right': '║' , 'right-mid': '╢' , 'middle': '│' }
      });
    let header = Object.keys(data)
    table.push(header)
    let rowData = []
    for (let index in data) {
      rowData.push(data[index])
    }
      table.push(rowData)

    console.log(chalk.black.bgWhite(table.toString()));
  }


}

module.exports = View