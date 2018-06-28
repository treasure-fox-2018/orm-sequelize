'use strict'

const Controller = require('./Controllers/Controller.js')

const argv = process.argv

const table = argv[2]
const command = argv[3]
const inputs = argv.slice(4)

switch (command) {
  case 'add':
      Controller.addTable(table, inputs)
      break;
  case 'read-one':
      Controller.readOneTableData(table, inputs)
      break;
  case 'read-all':
      Controller.readAllTable(table, inputs)
      break;
  case 'update':
      Controller.updateTable(table, inputs)
    break;
  case 'delete':
      Controller.deleteTable(table, inputs)
    break;
  default:
    Controller.help()
}
