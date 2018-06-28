const Controller = require("./controllers/controller");
const argv = process.argv;
const table = argv[2];
const command = argv[3];
const parameter = argv.slice(4);
const models = require('./models')

if (table === "author") {
  if (command === "add") {
    Controller.authorAdd(parameter);
  }
  else if (command === "read_one") {
    Controller.authorReadOne(parameter);
  }
  else if (command === "read_all") {
    Controller.authorReadAll();
  }
  else if (command === "update") {
    Controller.authorUpdate(parameter);
  }
  else if (command === "delete") {
    Controller.authorDelete(parameter);
  } 
}
else if (table === "tag") {
  if (command === "add") {
    Controller.tagAdd(parameter);
  }
  else if (command === "read_one") {
    Controller.tagReadOne(parameter);
  }
  else if (command === "read_all") {
    Controller.tagReadAll();
  }
  else if (command === "update") {
    Controller.tagUpdate(parameter);
  }
  else if (command === "delete") {
    Controller.tagDelete(parameter);
  }
}
else if (table === "article") {
  if (command === "add") {
    Controller.articleAdd(parameter);
  }
  else if (command === "read_one") {
    Controller.articleReadOne(parameter);
  }
  else if (command === "read_all") {
    Controller.articleReadAll();
  }
  else if (command === "update") {
    Controller.articleUpdate(parameter);
  }
  else if (command === "delete") {
    Controller.articleDelete(parameter);
  }
}
else if (table === "help") {
  Controller.help ()
}