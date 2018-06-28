const argv = process.argv
const table = argv[2]
const command = argv[3]
const args = argv.slice(4)

const Controller = require('./controllers/controller.js')

switch(command) {
  case 'add': 
    Controller.add(table, args)
    break;
  case 'read_one':
    Controller.readOne(table, args)
    break;
  case 'read_all':
    Controller.readAll(table)
    break;
  case 'update':
    Controller.update(table, args)
    break;
  case 'delete':
    Controller.delete(table, args)
    break;
  case 'help':
    Controller.help()
    break;
  default:
    Controller.help()
}