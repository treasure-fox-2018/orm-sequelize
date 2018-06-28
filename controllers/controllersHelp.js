const model = require('../models')
const Article = model.Article
const Author = model.Author
const Tag = model.Tag
const ViewHelp = require('../views/viewHelp.js')


class ControllerHelp{
    static viewHelp(){
        ViewHelp.viewHelp()
    }
}

module.exports = ControllerHelp