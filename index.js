let ControlAuthor = require('./controllers/ControllerAuthor.js')
let ControlArticle = require('./controllers/ControllerArticle.js')
let ControlTag = require('./controllers/ControllerTag.js')

let argv = process.argv

if (argv[2] == 'author') {
  if (argv[3] == 'add') {
    ControlAuthor.addAuthor(argv.slice(4))
  } else if (argv[3] == 'read_one') {
    ControlAuthor.readOne(argv[4])
  } else if (argv[3] == 'read_all') {
    ControlAuthor.findAll()
  } else if (argv[3] == 'update') {
    ControlAuthor.Updates(argv.slice(4))
  } else if (argv[3] == 'delete') {
    ControlAuthor.Delete(argv[4])
  } else if (argv[3] == 'help') {
    ControlAuthor.Help()

  }
}


if (argv[2] == 'article') {
  if (argv[3] == 'add') {
    ControlArticle.addArticle(argv.slice(4))
  } else if (argv[3] == 'read_one') {
    ControlArticle.readOne(argv[4])
  } else if (argv[3] == 'read_all') {
    ControlArticle.findAll()
  } else if (argv[3] == 'update') {
    ControlArticle.Updates(argv.slice(4))
  } else if (argv[3] == 'delete') {
    ControlArticle.Delete(argv[4])
  } else if (argv[3] == 'help') {
    ControlArticle.helpArticle()
  }
}

if (argv[2] == 'tag') {
  if (argv[3] == 'add') {
    ControlTag.addTag(argv.slice(4))
  } else if (argv[3] == 'read_one') {
    ControlTag.readOne(argv[4])
  } else if (argv[3] == 'read_all') {
    ControlTag.findAll()
  } else if (argv[3] == 'update') {
    ControlTag.Updates(argv.slice(4))
  } else if (argv[3] == 'delete') {
    ControlTag.Delete(argv[4])
  } else if (argv[3] == 'help') {
    ControlTag.helpTag()
  }

}
