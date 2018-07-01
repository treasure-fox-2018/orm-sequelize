const View = require('../views/view')
const models = require('../models/');

class Controller {
  static help () {
    View.help();
  }
  
  static authorAdd (parameter) {
    models.author.create({first_name: parameter[0], last_name: parameter[1], religion: parameter[2], gender: parameter[3], age: parameter[4]})
    .then (inputData => {
      let resultData = inputData.get({plain:true});
      View.authorAdd(resultData);
    })
    .catch (failed => {
      View.displayError(failed)
    })
  }

  static authorReadOne(parameter) {
    models.author.findById(parameter[0], {raw:true}) 
    .then (function(author) {
      if (author === null) {
        View.displayNull()
      }
      else {
        View.authorReadOne(author)
      }
    })
    .catch (failed => {
      View.displayError(failed)
    })
  }

  static authorReadAll() {
    models.author.findAll({raw:true}) .then (function(author) {
      View.authorReadAll(author)
    })
  }

  static authorUpdate (parameter) {
    if(parameter[1] === 'first_name') {
      models.author.update({first_name : `${parameter[2]}`}, { where: {id : `${parameter[0]}`}})
      .then(output => {
        if(output === 0) {
          View.displayNull();
        }
        else {
          View.displayUpdated()
        }
      })
    }
    else if(parameter[1] === 'last_name') {
      models.author.update({last_name : `${parameter[2]}`}, { where: {id : `${parameter[0]}`}})
      .then(output => {
        if(output === 0) {
          View.displayNull();
        }
        else {
          View.displayUpdated()
        }
      })
    }
    else if(parameter[1] === 'gender') {
      models.author.update({gender : `${parameter[2]}`}, { where: {id : `${parameter[0]}`}})
      .then(output => {
        if(output === 0) {
          View.displayNull();
        }
        else {
          View.displayUpdated()
        }
      })
    }
    else if(parameter[1] === 'age') {
      models.author.update({age : `${parameter[2]}`}, { where: {id : `${parameter[0]}`}})
      .then(output => {
        if(output === 0) {
          View.displayNull();
        }
        else {
          View.displayUpdated()
        }
      })
    }
  }

  static authorDelete (parameter) {
    models.author.destroy({ where: {id : `${parameter[0]}`}})
     .then (output => {
       if(output === 0) {
         View.displayEmpty();
       }
       else {
         View.displayDeleteMessage(output);
       }
     })
     .catch (failed => {
       View.displayError(failed);
     })
  }

  //----------------------ARTICLE--------------------------------------------

  static articleAdd (parameter) {
    models.article.create({title : parameter[0], body: parameter[1], AuthorId : parameter[2], TagId: parameter[3]})
    .then (inputData => {
      let resultData = inputData.get({plain:true});
      View.articleAdd(resultData);
    })
    .catch (failed => {
      View.displayError(failed)
    })
  }

  static articleReadOne(parameter) {
    models.article.findById(parameter[0], {raw:true}) 
    .then (function(article) {
      if (article === null) {
        View.displayNull()
      }
      else {
        View.articleReadOne(article)
      }
    })
    .catch (failed => {
      View.displayError(failed)
    })
  }

  static articleReadAll() {
    models.article.findAll({raw:true}) .then (function(article) {
      View.articleReadAll(article)
    })
  }

  static articleUpdate (parameter) {
    if(parameter[1] === 'title') {
      models.article.update({title : `${parameter[2]}`}, { where: {id : `${parameter[0]}`}})
      .then(output => {
        if(output === 0) {
          View.displayNull();
        }
        else {
          View.displayUpdated()
        }
      })
    }
    else if(parameter[1] === 'body') {
      models.article.update({last_name : `${parameter[2]}`}, { where: {id : `${parameter[0]}`}})
      .then(output => {
        if(output === 0) {
          View.displayNull();
        }
        else {
          View.displayUpdated()
        }
      })
    }
    else if(parameter[1] === 'AuthorId') {
      models.article.update({gender : `${parameter[2]}`}, { where: {id : `${parameter[0]}`}})
      .then(output => {
        if(output === 0) {
          View.displayNull();
        }
        else {
          View.displayUpdated()
        }
      })
    }
    else if(parameter[1] === 'TagId') {
      models.article.update({age : `${parameter[2]}`}, { where: {id : `${parameter[0]}`}})
      .then(output => {
        if(output === 0) {
          View.displayNull();
        }
        else {
          View.displayUpdated()
        }
      })
    }
  }

  static articleDelete (parameter) {
    models.article.destroy({ where: {id : `${parameter[0]}`}})
     .then (output => {
       if(output === 0) {
         View.messageEmpty();
       }
       else {
         View.displayDeleteMessage(output);
       }
     })
     .catch (failed => {
       View.displayError(failed);
     })
  }

  //-------------------TAG-------------------------------------

  static tagAdd (parameter) {
    models.tag.create({name: parameter[0]})
    .then (inputData => {
      let resultData = inputData.get({plain:true});
      View.tagAdd(resultData);
    })
    .catch (failed => {
      View.displayError(failed)
    })
  }

  static tagReadOne(parameter) {
    models.tag.findById(parameter[0], {raw:true}) 
    .then (function(tag) {
      if (tag === null) {
        View.displayNull()
      }
      else {
        View.tagReadOne(tag)
      }
    })
    .catch (failed => {
      View.displayError(failed)
    })
  }

  static tagReadAll() {
    models.tag.findAll({raw:true}) .then (function(tag) {
      View.tagReadAll(tag)
    })
  }

  static tagUpdate (parameter) {
    if(parameter[1] === 'name') {
      models.tag.update({name : `${parameter[2]}`}, { where: {id : `${parameter[0]}`}})
      .then(output => {
        if(output === 0) {
          View.displayNull();
        }
        else {
          View.displayUpdated()
        }
      })
    }
  }

  static tagDelete (parameter) {
    models.tag.destroy({ where: {id : `${parameter[0]}`}})
     .then (output => {
       if(output === 0) {
         View.messageEmpty();
       }
       else {
         View.displayDeleteMessage(output);
       }
     })
     .catch (failed => {
       View.displayError(failed);
     })
  }

}

module.exports = Controller;