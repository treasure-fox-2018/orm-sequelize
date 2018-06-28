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

  }
  else if (command === "read_one") {

  }
  else if (command === "read_all") {

  }
  else if (command === "update") {

  }
  else if (command === "erase") {

  }
}
else if (table === "article") {
  if (command === "add") {

  }
  else if (command === "read_one") {

  }
  else if (command === "read_all") {

  }
  else if (command === "update") {

  }
  else if (command === "erase") {

  }
}
else if (table === "help") {
  Controller.help ()
}