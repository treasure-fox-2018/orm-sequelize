const View = require('../views/commandList')

class Controller{
  static help(){
    let list = [
      `author add -> add<space> "data yang ingin dimasukan"`,
      `author read_one -> read_one<space> "search keyword bisa apa saja"`,
      `author read_all -> read_all<space> "masukkan keyword dan value e.g (id 2 atau name Budi) untuk filter result"`,
      `author update -> update<space> "data yang ingin dimasukan"`,
      `author delete -> delete<space> "id yang ingin di delete"`,
      `tag add -> add<space> "data yang ingin dimasukan"`,
      `tag read -> read_one -> read_one<space> "search keyword bisa apa saja"`,
      `tag readAll -> read_all<space> "masukkan keyword dan value e.g (name Budi)  untuk filter result"`,,
      `tag update -> update<space> "data yang ingin dimasukan"`,
      `tag delete -> delete<space> "id yang ingin di delete"`,
      `article add -> add<space> "data yang ingin dimasukan"`,
      `article read_one -> read_one<space> "search keyword bisa apa saja"`,
      `article read_all -> read_all<space> "masukkan keyword dan value e.g (AuthorId 2 atau title Supernova) untuk filter result"`,
      `article update -> update<space> "data yang ingin dimasukan"`,
      `article delete -> delete<space> "id yang ingin di delete"`
    ]

    for (let i in list){
      View.message(list[i])
    }
  }
}

module.exports = Controller;

