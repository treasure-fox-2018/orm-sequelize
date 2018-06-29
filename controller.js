const view = require('./view');
const models = require('./models');
const Sequelize = require('Sequelize');
const Op = Sequelize.Op;


class Controller {
  static help() {
    view.help()
  }

  static read_allAuthor() {
    models.author.findAll({
      raw: true
    }).then((data) => {
      if (data === null) {
        view.showMsg("Data not found")
      } else {
        view.showResult(data);
      }
    }).catch((err) => {
      view.showError(err.message);
    })
  }

  static read_oneAuthor(Id) {
    models.author.findById(Number(Id), {
      raw: true
    }).then((data) => {
      if (data === null) {
        view.showMsg("Data not found")
      } else {
        view.showResult(data);
      }
    }).catch((err) => {
      view.showError(err.message);
    })
  }

  static addAuthor(first_name, last_name, religion, gender, age) {
    models.author.create({
      first_name: first_name,
      last_name: last_name,
      religion: religion,
      gender: gender,
      age: age
    }).then((data) => {
      let value = data.get({
        plain: true
      });
      view.showResult(value);
      view.showMsg("Data succesfully created")
    }).catch((err) => {
      view.showError(err.message);
    })
  }

  static deleteAuthor(Id) {
    models.author.destroy({
      where: {
        id: `${Id}`
      }
    }).then((output) => {
      if (output === 0) {
        view.showMsg("Data not found")
      } else {
        view.showMsg("Data has been deleted")
      }
    }).catch((err) => {
      view.showError(err.message);
    })
  }

  static updateAuthor(Id, column_name, value) {
    if (column_name === "first_name") {
      models.author.update({
        first_name: `${value}`
      }, {
        where: {
          id: `${Id}`
        }
      }).then((output) => {
        if (output === 0) {
          view.showMsg("Data not found")
        } else {
          view.showMsg("Data has been updated")
        }
      }).catch((err) => {
        view.showError(err.message);
      })
    } else if (column_name === "last_name") {
      models.author.update({
        last_name: `${value}`
      }, {
        where: {
          id: `${Id}`
        }
      }).then((output) => {
        if (output === 0) {
          view.showMsg("Data not found")
        } else {
          view.showMsg("Data has been updated")
        }
      }).catch((err) => {
        view.showError(err.message);
      })
    } else if (column_name === "religion") {
      models.author.update({
        religion: `${value}`
      }, {
        where: {
          id: `${Id}`
        }
      }).then((output) => {
        if (output === 0) {
          view.showMsg("Data not found")
        } else {
          view.showMsg("Data has been updated")
        }
      }).catch((err) => {
        view.showError(err.message);
      })
    } else if (column_name === "gender") {
      models.author.update({
        gender: `${value}`
      }, {
        where: {
          id: `${Id}`
        }
      }).then((output) => {
        if (output === 0) {
          view.showMsg("Data not found")
        } else {
          view.showMsg("Data has been updated")
        }
      }).catch((err) => {
        view.showError(err.message);
      })
    } else if (column_name === "age") {
      models.author.update({
        age: `${value}`
      }, {
        where: {
          id: `${Id}`
        }
      }).then((output) => {
        if (output === 0) {
          view.showMsg("Data not found")
        } else {
          view.showMsg("Data has been updated")
        }
      }).catch((err) => {
        view.showError(err.message);
      })
    }
  }

  static read_allTag() {
    models.tag.findAll({
      raw: true
    }).then((data) => {
      if (data === null) {
        view.showMsg("Data not found")
      } else {
        view.showResult(data);
      }
    }).catch((err) => {
      view.showError(err.message);
    })
  }

  static read_oneTag(Id) {
    models.tag.findById(Number(Id), {
      raw: true
    }).then((data) => {
      if (data === null) {
        view.showMsg("Data not found")
      } else {
        view.showResult(data);
      }
    }).catch((err) => {
      view.showError(err.message);
    })
  }

  static addTag(name) {
    models.tag.create({
      name: `${name}`
    }).then((data) => {
      let value = data.get({
        plain: true
      });
      view.showResult(value);
      view.showMsg("Data succesfully created")
    }).catch((err) => {
      view.showError(err.message);
    })
  }

  static deleteTag(Id) {
    models.tag.destroy({
      where: {
        id: `${Id}`
      }
    }).then((output) => {
      if (output === 0) {
        view.showMsg("Data not found")
      } else {
        view.showMsg("Data has been deleted")
      }
    }).catch((err) => {
      view.showError(err.message);
    })
  }

  static updateTag(Id, column_name, value) {
    models.tag.update({
      name: `${value}`
    }, {
      where: {
        id: `${Id}`
      }
    }).then((output) => {
      if (output === 0) {
        view.showMsg("Data not found")
      } else {
        view.showMsg("Data has been updated")
      }
    }).catch((err) => {
      view.showError(err.message);
    })
  }

  static read_allArticle() {
    models.article.findAll({
      raw: true
    }).then((data) => {
      if (data === null) {
        view.showMsg("Data not found")
      } else {
        view.showResult(data);
      }
    }).catch((err) => {
      view.showError(err.message);
    })
  }

  static read_oneArticle(AuthorId) {
    models.article.findOne({where: {AuthorId: Number(AuthorId)}}, {
      raw: true
    }).then((data) => {
      if (data === null) {
        view.showMsg("Data not found")
      } else {
        view.showResult(data);
      }
    }).catch((err) => {
      view.showError(err.message);
    })
  }

  static addArticle(title, body, authorId, tagId) {
    models.article.create({
      title: title,
      body: body,
      authorId: authorId,
      tagId: tagId,
    }).then((data) => {
      let value = data.get({
        plain: true
      });
      view.showResult(value);
      view.showMsg("Data succesfully created")
    }).catch((err) => {
      view.showError(err.message);
    })
  }

  static deleteArticle(Id) {
    models.article.destroy({
      where: {
        id: `${Id}`
      }
    }).then((output) => {
      if (output === 0) {
        view.showMsg("Data not found")
      } else {
        view.showMsg("Data has been deleted")
      }
    }).catch((err) => {
      view.showError(err.message);
    })
  }

  static updateArticle(Id, column_name, value) {
    if (column_name === "title") {
      models.article.update({
        title: `${value}`
      }, {
        where: {
          id: `${Id}`
        }
      }).then((output) => {
        if (output === 0) {
          view.showMsg("Data not found")
        } else {
          view.showMsg("Data has been updated")
        }
      }).catch((err) => {
        view.showError(err.message);
      })
    } else if (column_name === "body") {
      models.article.update({
        body: `${value}`
      }, {
        where: {
          id: `${Id}`
        }
      }).then((output) => {
        if (output === 0) {
          view.showMsg("Data not found")
        } else {
          view.showMsg("Data has been updated")
        }
      }).catch((err) => {
        view.showError(err.message);
      })
    } else if (column_name === "authorId") {
      models.article.update({
        authorId: `${value}`
      }, {
        where: {
          id: `${Id}`
        }
      }).then((output) => {
        if (output === 0) {
          view.showMsg("Data not found")
        } else {
          view.showMsg("Data has been updated")
        }
      }).catch((err) => {
        view.showError(err.message);
      })
    } else if (column_name === "tagId") {
      models.article.update({
        tagId: `${value}`
      }, {
        where: {
          id: `${Id}`
        }
      }).then((output) => {
        if (output === 0) {
          view.showMsg("Data not found")
        } else {
          view.showMsg("Data has been updated")
        }
      }).catch((err) => {
        view.showError(err.message);
      })
    }
  }

  static findWhere1() {
    // console.log("test");
    models.author.findAll({
      where: {
        first_name: {
          [Op.or]: ["Lucius", "Loyo"]
        }
      }
    }).then((data) => {
      if (data === null) {
        view.showMsg("Data not found")
      } else {
        view.showResult(data);
      }
    }).catch((err) => {
      view.showError(err.message);
    })
  }

  static findWhere2() {
    // console.log("test");
    models.author.findAll({
      where: {
        last_name: {
          [Op.or]: ["Doe", "Fox"]
        }
      }
    }).then((data) => {
      if (data === null) {
        view.showMsg("Data not found")
      } else {
        view.showResult(data);
      }
    }).catch((err) => {
      view.showError(err.message);
    })
  }

  static findWhere3() {
    // console.log("test");
    models.author.findAll({
      where: {
        id: {
          [Op.gt]: 7
        }
      }
    }).then((data) => {
      if (data === null) {
        view.showMsg("Data not found")
      } else {
        view.showResult(data);
      }
    }).catch((err) => {
      view.showError(err.message);
    })
  }

  static findWhere4() {
    // console.log("test");
    models.tag.findAll({
      where: {
        name: {
          [Op.or]: ["Asynchronicity", "Ludicrocity"]
        }
      }
    }).then((data) => {
      if (data === null) {
        view.showMsg("Data not found")
      } else {
        view.showResult(data);
      }
    }).catch((err) => {
      view.showError(err.message);
    })
  }

  static findWhere5() {
    // console.log("test");
    models.article.findAll({
      where: {
        authorId: {
          [Op.or]: [1, 3]
        }
      }
    }).then((data) => {
      if (data === null) {
        view.showMsg("Data not found")
      } else {
        view.showResult(data);
      }
    }).catch((err) => {
      view.showError(err.message);
    })
  }
}

module.exports = Controller;
