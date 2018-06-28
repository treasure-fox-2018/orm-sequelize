const View = require('../views/view')
const models = require('../models/');
// const Sequelize = require('sequelize')
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
    if(parameter[1] === first_name) {
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
    else if(parameter[1] === last_name) {
      models.author.update({flast_name : `${parameter[2]}`}, { where: {id : `${parameter[0]}`}})
      .then(output => {
        if(output === 0) {
          View.displayNull();
        }
        else {
          View.displayUpdated()
        }
      })
    }
    else if(parameter[1] === gender) {
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
    
  }

  static authorDelete (parameter) {
    models.author.destroy({ where: {id : `${parameter[0]}`}})
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

  //------------------------------------------------------------------

  static articleAdd (parameter) {
    models.articles.create({first_name: parameter[0], last_name: parameter[1], religion: parameter[2], gender: parameter[3], age: parameter[4]})
    .then (inputData => {
      let resultData = inputData.get({plain:true});
      View.authorAdd(resultData);
    })
    .catch (failed => {
      View.displayError(failed)
    })
  }

  static articleReadOne(parameter) {
    models.articles.findById(parameter[0], {raw:true}) 
    .then (function(author) {
      if (author === null) {
        View.displayNull()
      }
      else {
        View.articleReadOne(author)
      }
    })
    .catch (failed => {
      View.displayError(failed)
    })
  }

  static articleReadAll() {
    models.articles.findAll({raw:true}) .then (function(author) {
      View.articleReadAll(author)
    })
  }

  static articleUpdate (parameter) {

  }

  static articleDelete (parameter) {
    models.articles.destroy({ where: {id : `${parameter[0]}`}})
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