'use strict'

class View {
    static showHelp() {
        console.log('=====  documentation  ==================================')
        console.log('author add       ->  add<space> "data yang ingin dimasukan"')
        console.log('author read_one  ->  read_one<space> "masukkan id author"')
        console.log('author read_all  ->  read_all')
        console.log('========================================================')
    }
}

module.exports = View
