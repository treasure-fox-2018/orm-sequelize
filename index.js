const argv = process.argv
const input = argv.slice(4)
const command = `${argv[2]} ${argv[3]}`
const ControllerAuthors = require('./controller/authors.js')
const ControllerArticles = require('./controller/articles.js')
const ControllerTags = require('./controller/tags.js')
const Controller = require('./controller/Controllers.js')

if(command === 'author add') {
  ControllerAuthors.authorAdd(input[0], input[1], input[2], input[3], input[4])
} else if (command === 'author read_one') {
  ControllerAuthors.authorReadOne(input[0])
} else if (command === 'author read_all') {
  ControllerAuthors.authorReadAll()
} else if (command === 'author update') {
  ControllerAuthors.authorUpdate(input[0], input[1], input[2], input[3], input[4], input[5])
} else if (command === 'author delete') {
  ControllerAuthors.authorDelete(input[0])
} else if (command === 'article add') {
  ControllerArticles.articleAdd(input[0], input[1], input[2], input[3])
} else if (command === 'article read_one') {
  ControllerArticles.articleReadOne(input[0])
} else if (command === 'article read_all') {
  ControllerArticles.articleReadAll()
} else if (command === 'article update') {
  ControllerArticles.articleUpdate(input[0], input[1], input[2], input[3], input[4])
} else if (command === 'article delete') {
  ControllerArticles.articleDelete(input[0])
}  else if (command === 'tag add') {
  ControllerTags.tagAdd(input[0])
} else if (command === 'tag read_one') {
  ControllerTags.tagReadOne(input[0])
} else if (command === 'tag read_all') {
  ControllerTags.tagReadAll()
} else if (command === 'tag update') {
  ControllerTags.tagUpdate(input[0], input[1])
} else if (command === 'tag delete') {
  ControllerTags.tagDelete(input[0])
} else if (command === 'help undefined'){
  Controller.help()
} else {
  Controller.blank()
}
