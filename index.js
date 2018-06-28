const argv = process.argv;
const table = argv[2];
const command = argv[3];
const args = argv.slice(4);

const sequelize = require('sequelize');
const Model = require('./models');
let Author = Model.Author;
let Tag = Model.Tag;
let Article = Model.Article;

if (table === 'help') {
  help();
}

if (table === 'author') {
  if (command === 'add') {
    addAuthor(args);
  }
  if (command === 'readOne') {
    readOneAuthor(args);
  }
  if (command === 'readAll') {
    readAllAuthor();
  }
  if (command === 'update') {
    updateAuthor(args);
  }
  if (command === 'erase') {
    eraseAuthor(args);
  }
}

if (table === 'article') {
  if (command === 'add') {
    addArticle(args);
  }
  if (command === 'readOne') {
    readOneArticle(args);
  }
  if (command === 'readAll') {
    readAllArticle();
  }
  if (command === 'update') {
    updateArticle(args);
  }
  if (command === 'erase') {
    eraseArticle(args);
  }
}

if (table === 'tag') {
  if (command === 'add') {
    addTag(args);
  }
  if (command === 'readOne') {
    readOneTag(args);
  }
  if (command === 'readAll') {
    readAllTag();
  }
  if (command === 'update') {
    updateTag(args);
  }
  if (command === 'erase') {
    eraseTag(args);
  }
}

// author functions
function addAuthor(args) {
  let firstName = args[0];
  let lastName = args[1];
  let religion = args[2];
  let gender = args[3];
  let age = args[4];
  Author.create({
    first_name: firstName ,
    last_name: lastName ,
    religion,
    gender,
    age,
    createdAt: new Date(),
    updatedAt: new Date()
  }).then(author => {
    console.log(author.get({raw: true}));
  });
}

function readOneAuthor(args) {
  let id = args[0];
  Author.findById(id, {raw: true}).then(author => {
    console.log(author);
  });
}

function readAllAuthor() {
  Author.findAll({raw: true}).then(authors => {
    console.log(authors);
  });
}

function updateAuthor(args) { // <id> <column> <row> <column> <row> ...
  let id = args[0];
  let update = {};
  for (let i = 1; i < args.length; i += 2) {
    update[args[i]] = args[i + 1];
  }
  Author.update(update, {where: {id}
  }).then(() => {
    return Author.findById(id, {raw: true});
  }).then((author) => {
    console.log(author);
  });
}

function eraseAuthor(args) {
  let id = args[0];
  Author.destroy({
    where: {id}
  }).then(() => {
    console.log(`Successfully delete id: ${id}`);
  });
}

// article functions
function addArticle(args) {
  let title = args[0];
  let body = args[1];
  let authorId = args[2];
  let tagId = args[3];
  Article.create({
    title,
    body,
    author_id :authorId,
    tag_id:tagId,
    createdAt: new Date(),
    updatedAt: new Date()
  }).then(article => {
    console.log(article.get({raw: true}));
  });
}

function readOneArticle(args) {
  let id = args[0];
  Article.findById(id, {raw: true}).then(article => {
    console.log(article);
  });
}

function readAllArticle() {
  Article.findAll({raw: true}).then(articles => {
    console.log(articles);
  });
}

function updateArticle(args) { // <id> <column> <row> <column> <row> ...
  let id = args[0];
  let update = {};
  for (let i = 1; i < args.length; i += 2) {
    update[args[i]] = args[i + 1];
  }
  Article.update(update, {where: {id}
  }).then(() => {
    return Article.findById(id, {raw: true});
  }).then((article) => {
    console.log(article);
  });
}

function eraseArticle(args) {
  let id = args[0];
  Article.destroy({
    where: {id}
  }).then(() => {
    console.log(`Successfully delete id: ${id}`);
  });
}

// author functions
function addTag(args) {
  let name = args[0];
  Tag.create({
    name,
    createdAt: new Date(),
    updatedAt: new Date()
  }).then(tag => {
    console.log(tag.get({raw: true}));
  });
}

function readOneTag(args) {
  let id = args[0];
  Tag.findById(id, {raw: true}).then(tag => {
    console.log(tag);
  });
}

function readAllTag() {
  Tag.findAll({raw: true}).then(tags => {
    console.log(tags);
  });
}

function updateTag(args) { // <id> <column> <row> <column> <row> ...
  let id = args[0];
  let update = {};
  for (let i = 1; i < args.length; i += 2) {
    update[args[i]] = args[i + 1];
  }
  Tag.update(update, {where: {id}
  }).then(() => {
    return Tag.findById(id, {raw: true});
  }).then((tag) => {
    console.log(tag);
  });
}

function eraseTag(args) {
  let id = args[0];
  Tag.destroy({
    where: {id}
  }).then(() => {
    console.log(`Successfully delete id: ${id}`);
  });
}

function help() {
  console.log(`node index.js <table_name> add <attribute_value> <attribute_value> ...`);
  console.log(`node index.js <table_name> readOne <id>`);
  console.log(`node index.js <table_name> readAll`);
  console.log(`node index.js <table_name> update <attribute> <attribute_value> <attribute> <attribute_value> ...`);
  console.log(`node index.js <table_name> erase <id>`);
}
