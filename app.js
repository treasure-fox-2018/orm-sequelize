const controller = require('./controller');

let table = process.argv[2];
let command = process.argv[3];
let argument = process.argv.slice(4);

if (table === "help" || table === undefined) {
  controller.help()
} else if (table === "author") {
  if (command === "read_all") {
    controller.read_allAuthor();
  } else if (command === "read_one") {
    let Id = argument
    controller.read_oneAuthor(Id);
  } else if (command === "add") {
    let first_name = argument[0];
    let last_name = argument[1];
    let religion = argument[2];
    let gender = argument[3];
    let age = argument[4];
    controller.addAuthor(first_name, last_name, religion, gender, age)
  } else if (command === "delete") {
    let Id = argument
    controller.deleteAuthor(Id);
  } else if (command === "update") {
    let Id = argument[0];
    let column_name = argument[1];
    let value = argument[2];
    controller.updateAuthor(Id, column_name, value)
  }
} else if (table === "tag") {
  if (command === "read_all") {
    controller.read_allTag();
  } else if (command === "read_one") {
    let Id = argument
    controller.read_oneTag(Id);
  } else if (command === "add") {
    let name = argument[0];
    controller.addTag(name)
  } else if (command === "delete") {
    let Id = argument
    controller.deleteTag(Id);
  } else if (command === "update") {
    let Id = argument[0];
    let column_name = argument[1];
    let value = argument[2];
    controller.updateTag(Id, column_name, value)
  }
} else if (table === "article") {
  if (command === "read_all") {
    controller.read_allArticle();
  } else if (command === "read_one") {
    let Id = argument
    controller.read_oneArticle(Id);
  } else if (command === "add") {
    let title = argument[0];
    let body = argument[1];
    let authorId = argument[2];
    let tagId = argument[3];
    controller.addArticle(title, body, authorId, tagId);
  } else if (command === "delete") {
    let Id = argument
    controller.deleteArticle(Id);
  } else if (command === "update") {
    let Id = argument[0];
    let column_name = argument[1];
    let value = argument[2];
    controller.updateArticle(Id, column_name, value)
  }
}
