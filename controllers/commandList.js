const View = require('../views/commandList')

class Controller{
  static help(){
    let list = [
      `author add -> add<space> "data yang ingin dimasukan"`,
      `author readId -> readId<space> "id yang ingin dimasukan"`,
      `author readAll -> readAll`,
      `author update -> update<space> "data yang ingin dimasukan"`,
      `author delete -> delete<space> "id yang ingin di delete"`,
      `tag add -> add<space> "data yang ingin dimasukan"`,
      `tag readId -> readId<space> "id yang ingin dimasukan"`,
      `tag readAll -> readAll`,
      `tag update -> update<space> "data yang ingin dimasukan"`,
      `tag delete -> delete<space> "id yang ingin di delete"`,
      `article add -> add<space> "data yang ingin dimasukan"`,
      `article readId -> readId<space> "id yang ingin dimasukan"`,
      `article readAll -> readAll`,
      `article update -> update<space> "data yang ingin dimasukan"`,
      `article delete -> delete<space> "id yang ingin di delete"`
    ]

    for (let i in list){
      View.message(list[i])
    }
  }
}

module.exports = Controller;

