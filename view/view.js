'use strict'
let fs = require('fs')

class View{
    static display(message){
        console.log(`==== your result ==================================`)
        console.log(message)
        console.log(`===================================================`)
    }

    static help(){
        console.log(`
==== documentation ====================================================
author add -> add<space> "data yang ingin dimasukan"
author read_one -> read_one<space> "masukan id author"
author read_all -> read_all
author update -> update<space> "masukan data yg di update dan idnya"
author delete -> delete<space> "masukan id author"
tag add -> add<space> "data yang ingin dimasukan"
tag read_one -> read_one<space> "masukan id tag"
tag read_all -> read_all
tag update -> update<space> "masukan data yg di update dan idnya"
tag delete -> delete<space> "masukan id tag"
article add -> add<space> "data yang ingin dimasukan"
article read_one -> read_one<space> "masukan id article"
article read_all -> read_all
article update -> update<space> "masukan data yg di update dan idnya"
article delete -> delete<space> "masukan id article"
=======================================================================`)

    }
}

module.exports = View