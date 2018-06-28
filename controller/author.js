const Model = require("../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const Table = require("cli-table");
const chalk = require("chalk")

class Author {
  static add(first_name, last_name, religion, gender, age) {
    Model.Author.create({
      first_name: first_name,
      last_name: last_name,
      religion: religion,
      gender: gender,
      age: age
    })
      .then(data => {
        let dataAdd = data.get({ plain: true });
        console.log(chalk.green(`Data successfull add`), chalk.red(dataAdd));
      })
      .catch(errAdd => {
        console.log(chalk.red("Message Error: "), chalk.red(errAdd));
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

    Model.Author.findById(id)
      .then(data => {
        if (data === null) {
          console.log(chalk.red("Silahkan masukkan id yang akan dicari"));
        } else {
          const dataReadOne = data.get({ plain: true });
          table.push(
            [chalk.red("Id"), chalk.red("First Name"), chalk.red("Last Name"), chalk.red("Religion"), chalk.red("Gender"), chalk.red("Age")],
            [
              chalk.blue(dataReadOne.id),
              chalk.cyanBright(dataReadOne.first_name),
              chalk.greenBright(dataReadOne.last_name),
              chalk.redBright(dataReadOne.religion),
              chalk.magenta(dataReadOne.gender),
              chalk.yellowBright(dataReadOne.age)
            ]
          );
          console.log(table.toString());
        }
      })
      .catch(errReadOne => {
        console.log(chalk.red("Message error: )", chalk.red(errReadOn)));
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

    Model.Author.findAll({
      where: {
        age: {
          [Op.gte]: 18
        }
      }
    })
      .then(data => {
        if (data.length === 0) {
          console.log(chalk.magenta("Data not found"));
        } else {
          const dataAll = data;
          table.push([chalk.red("Id"), chalk.red("First Name"), chalk.red("Last Name"), chalk.red("Religion"), chalk.red("Gender"), chalk.red("Age")])
          for (let i = 0; i < data.length; i++) {
            table.push(
              [
                chalk.blue(data[i].id),
                chalk.cyanBright(data[i].first_name),
                chalk.greenBright(data[i].last_name),
                chalk.redBright(data[i].religion),
                chalk.yellowBright(data[i].gender),
                chalk.magenta(data[i].age)
              ]
            );
          }
          console.log(table.toString());
        }
      })
      .catch(errReadAll => {
        console.log(chalk.red("Message error: "), chalk.redBright(errReadAll));
      });
  }

  static updateAuthor(id, first_name, last_name, religion, gender, age) {
    Model.Author.update(
      {
        first_name: first_name,
        last_name: last_name,
        religion: religion,
        gender: gender,
        age: age
      },
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
          console.log(chalk.greenBright(`Data ${id} Successfully update`));
        } else {
          console.log(chalk.blue(`Data id ${id} not found`));
        }
      })
      .catch(errUpdate => {
        console.log(chalk.redBright("Message error: "), chalk.red(errUpdate));
      });
  }

  static deleteAuthor(id) {
    Model.Author.destroy({ where: { id: id } })
      .then(data => {
        if (data === 1) {
          console.log(chalk.greenBright(`Data id ${id} success deleted`));
        } else {
          console.log(chalk.blue(`Data id ${id} has deleted`));
        }
      })
      .catch(errDelete => {
        console.log(chalk.red("Message error: "), chalk.redBright(errDelete));
      });
  }
}

module.exports = Author;
