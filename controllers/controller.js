const View = require('../views/view.js');
const Model = require('../models/')

class Controller {
  static displayHelp(){
    View.displayMessage('$ node index.js help')
  }
  static displayCommandList(){
    let commands = [
      '================================ documentation ================================',
      '$ node index.js ----> "call for help"',
      '$ node index.js help ----> "display commands"',
      '$ node index.js author add <data> ----> "add author"',
      '$ node index.js author read_one <author_id> ----> "display an author"',
      '$ node index.js author read_all ----> "display all author"',
      '$ node index.js author update <author_id> <new_data> ----> "update an author"',
      '$ node index.js author delete <author_id> ----> "delete an author"',
      '$ node index.js tag add <data> ----> "add tag"',
      '$ node index.js tag read_one <tag_id> ----> "display an tag"',
      '$ node index.js tag read_all ----> "display all tag"',
      '$ node index.js tag update <tag_id> <new_data> ----> "update an tag"',
      '$ node index.js tag delete <tag_id> ----> "delete an tag"',
      '$ node index.js article add <data> ----> "add article"',
      '$ node index.js article read_one <article_id> ----> "display an article"',
      '$ node index.js article read_all ----> "display all article"',
      '$ node index.js article update <article_id> <new_data> ----> "update an article"',
      '$ node index.js article delete <article_id> ----> "delete an article"',
      '===============================================================================',
    ]
    for (var i = 0; i < commands.length; i++) {
      View.displayMessage(commands[i])
    }
  }
  static addAuthor(input){
    Model.author.create({first_name:`${input[0]}`,last_name:`${input[1]}`,religion:`${input[2]}`,gender:`${input[3]}`,age:`${input[4]}`})
    .then(function(author){
      let newAuthor = author.get()
      View.displayMessage('Data successfully added!')
      View.displayMessage(newAuthor)
    })
  }
  static displayAnAuthor(input){
    Model.author.findById(input[0], {raw:true}).then(function(author){
      View.displayMessage(author)
    })
  }
  static displayAllAuthor(){
    Model.author.findAll({raw:true}).then(function(author){
      View.displayMessage(author)
    })
  }
  static updateAuthor(input){
    Model.author.update({first_name:`${input[1]}`,last_name:`${input[2]}`,religion:`${input[3]}`,gender:`${input[4]}`,age:`${input[5]}`},
    {where:{id:input[0]}}).then(function(author){
      Controller.displayAnAuthor(input)
      View.displayMessage('Data successfully updated!')
    })
  }
  static deleteAuthor(input){
    Model.author.destroy({where: {id:input[0]}})
    .then(function(author){
      View.displayMessage(`Data successfully deleted on id: ${input[0]}`)
    })
  }
  static addTag(input){
    Model.tag.create({first_name:`${input[0]}`,last_name:`${input[1]}`,religion:`${input[2]}`,gender:`${input[3]}`,age:`${input[4]}`})
    .then(function(tag){
      let newTag = tag.get()
      View.displayMessage('Data successfully added!')
      View.displayMessage(newTag)
    })
  }
  static displayAnTag(input){
    Model.tag.findById(input[0], {raw:true}).then(function(tag){
      View.displayMessage(tag)
    })
  }
  static displayAllTag(){
    Model.tag.findAll({raw:true}).then(function(tag){
      View.displayMessage(tag)
    })
  }
  static updateTag(input){
    Model.tag.update({first_name:`${input[1]}`,last_name:`${input[2]}`,religion:`${input[3]}`,gender:`${input[4]}`,age:`${input[5]}`},
    {where:{id:input[0]}}).then(function(tag){
      Controller.displayAnTag(input)
      View.displayMessage('Data successfully updated!')
    })
  }
  static deleteTag(input){
    Model.tag.destroy({where: {id:input[0]}})
    .then(function(tag){
      View.displayMessage(`Data successfully deleted on id: ${input[0]}`)
    })
  }
  static addArticle(input){
    Model.article.create({first_name:`${input[0]}`,last_name:`${input[1]}`,religion:`${input[2]}`,gender:`${input[3]}`,age:`${input[4]}`})
    .then(function(article){
      let newArticle = article.get()
      View.displayMessage('Data successfully added!')
      View.displayMessage(newArticle)
    })
  }
  static displayAnArticle(input){
    Model.article.findById(input[0], {raw:true}).then(function(article){
      View.displayMessage(article)
    })
  }
  static displayAllArticle(){
    Model.article.findAll({raw:true}).then(function(article){
      View.displayMessage(article)
    })
  }
  static updateArticle(input){
    Model.article.update({first_name:`${input[1]}`,last_name:`${input[2]}`,religion:`${input[3]}`,gender:`${input[4]}`,age:`${input[5]}`},
    {where:{id:input[0]}}).then(function(article){
      Controller.displayAnArticle(input)
      View.displayMessage('Data successfully updated!')
    })
  }
  static deleteArticle(input){
    Model.article.destroy({where: {id:input[0]}})
    .then(function(article){
      View.displayMessage(`Data successfully deleted on id: ${input[0]}`)
    })
  }
}

module.exports = Controller
