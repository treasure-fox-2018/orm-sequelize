const Model = require("../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const Table = require("cli-table");
const chalk = require("chalk")

class Tag {
  static add(name) {
    Model.Tag.create({
      name: name
    })
      .then(data => {
        let dataAdd = data.get({ plain: true });
        console.log(dataAdd);
      })
      .catch(errAdd => {
        console.log(chalk.red("Message error: "), chalk.red(errAdd));
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

    Model.Tag.findById(id)
      .then(data => {
        if (data === null) {
          console.log(chalk.red("Silahkan masukkan ID yang akan dicari"));
        } else {
          const dataReadOne = data.get({ plain: true });
          table.push([chalk.red("Id"), chalk.red("Name Tag")], [chalk.blue(dataReadOne.id), chalk.magenta(dataReadOne.name)]);
          console.log(table.toString());
        }
      })
      .catch(errReadOne => {
        console.log(chalk.red("Message error: "), chalk.red(errReadOne));
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

    Model.Tag.findAll({ raw: true })
      .then(data => {
        const dataAll = data;
        table.push([chalk.red("Id"), chalk.red("Name Tag")]);
        for (let i = 0; i < data.length; i++) {
          table.push([chalk.yellow(data[i].id), chalk.magenta(data[i].name)]);
        }
        console.log(table.toString());
      })
      .catch(errReadAll => {
        console.log(chalk.red("Message Error: "), chalk.red(errReadAll));
      });
  }

  static updateTag(id, name) {
    Model.Tag.update(
      {
        name: name
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
          console.log(chalk.green(`Data ${id}Successfully update`));
        } else {
          console.log(chalk.blue("Data up to date"));
        }
      })
      .catch(errUpdate => {
        console.log(chalk.red("Message error: "), chalk.red(errUpdate));
      });
  }

  static deleteTag(id) {
    Model.Tag.destroy({
      where: {
        id: {
          [Op.eq]: id
        }
      }
    })
      .then(data => {
        if (data === 1) {
          console.log(chalk.green(`Data id ${id} success deleted`));
        } else {
          console.log(chalk.blue(`Data id ${id} has deleted`));
        }
      })
      .catch(errDelete => {
        console.log(chalk.red("Message error: "), chalk.red(errDelete));
      });
  }
}

module.exports = Tag;
