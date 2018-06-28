const Model = require("../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const Table = require("cli-table");
const chalk = require("chalk")

class Article {
  static add(title, body, authorId, tagId) {
    Model.Article.create({
      title: title,
      body: body,
      AuthorId: authorId,
      TagId: tagId
    })
      .then(data => {
        let dataAdd = data.get({ plain: true });
        console.log(dataAdd);
      })
      .catch(errAdd => {
        console.log(chalk.greenBright("Message Error: "), chalk.red(errAdd));
      });
  }

  static readOne(id) {
    var table = new Table({
      chars: {
        top: "═",
        "top-mid": "╤",
        "top-left": "╔",
        "top-right": "╗",
        bottom: "═",
        "bottom-mid": "╧",
        "bottom-left": "╚",
        "bottom-right": "╝",
        left: "║",
        "left-mid": "╟",
        mid: "─",
        "mid-mid": "┼",
        right: "║",
        "right-mid": "╢",
        middle: "│"
      }
    });
    Model.Article.findById(id)
      .then(data => {
        if (data === null) {
          console.log(chalk.red("Silahkan masukkan ID yang akan di cari"));
        } else {
          const dataReadOne = data.get({ plain: true });
          table.push(
            [chalk.red("ID"), chalk.red("Title"), chalk.red("Body"), chalk.red("Author ID"), chalk.red("Tag ID")],
            [
              chalk.blue(dataReadOne.id),
              chalk.cyanBright(dataReadOne.title),
              chalk.greenBright(dataReadOne.body),
              chalk.redBright(dataReadOne.AuthorId),
              chalk.yellowBright(dataReadOne.TagId)
            ]
          );
          console.log(table.toString());
        }
      })
      .catch(errReadOne => {
        console.log("Message error: ", errReadOne);
      });
  }

  static readAll() {
    var table = new Table({
      chars: {
        top: "═",
        "top-mid": "╤",
        "top-left": "╔",
        "top-right": "╗",
        bottom: "═",
        "bottom-mid": "╧",
        "bottom-left": "╚",
        "bottom-right": "╝",
        left: "║",
        "left-mid": "╟",
        mid: "─",
        "mid-mid": "┼",
        right: "║",
        "right-mid": "╢",
        middle: "│"
      }
    });

    Model.Article.findAll({ raw: true })
      .then(data => {
        if (data.length === 0) {
          console.log("Data nout found");
        } else {
          const dataAll = data;
          table.push([chalk.red("ID"), chalk.red("Title"), chalk.red("Body"), chalk.red("Author ID"), chalk.red("Tag ID")]);
          for (let i = 0; i < data.length; i++) {
            table.push([
              chalk.blue(data[i].id),
              chalk.cyanBright(data[i].title),
              chalk.greenBright(data[i].body),
              chalk.redBright(data[i].AuthorId),
              chalk.yellowBright(data[i].TagId)
            ]);
          }
          console.log(table.toString());
        }
      })
      .catch(errReadAll => {
        console.log("Message error: ", errReadAll);
      });
  }

  static updateArticle(id, title, body, authorId, tagId) {
    Model.Article.update(
      { title: title, body: body, AuthorId: authorId, TagId: tagId },
      {
        where: {
          id: {
            [Op.eq]: id
          }
        }
      }
    )
      .then(data => {
        if (data[0] == 1) {
          console.log(chalk.greenBright(`Data id ${id} Successfully update`));
        } else {
          console.log(chalk.red(`Sorry! Data id ${id} not found`));
        }
      })
      .catch(errUpdate => {
        console.log(chalk.greenBright("Message error: "), chalk.red(errUpdate));
      });
  }

  static deleteArticle(id) {
    Model.Article.destroy({ where: { id: id } })
      .then(data => {
        if (data === 1) {
          console.log(chalk.greenBright(`Data id ${id} success deleted`));
        } else {
          console.log(chalk.blue(`Data id ${id} has deleted`));
        }
      })
      .catch(errDelete => {
        console.log(chalk.greenBright("Message error: "), chalk.red(errDelete));
      });
  }
}

module.exports = Article;
