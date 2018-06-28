const argv = process.argv
const ControllerAuthor = require("./controller/author")
const ControllerTag = require("./controller/tag")
const ControllerArticle = require("./controller/article")

const command  = argv[2]
const argument = argv[3]
let id, 
  first_name, 
  last_name, 
  religion, 
  gender, 
  age,
  title,
  body,
  authorId,
  tagId;

if (command === "author") {
  switch (argument) {
    case "add": 
      first_name = argv[4]
      last_name = argv[5]
      religion = argv[6]
      gender = argv[7]
      age = argv[8]
      ControllerAuthor.add(first_name, last_name, religion, gender, age)
    break
    case "read_one": 
      id = argv[4]
      ControllerAuthor.readOne(id)
    break
    case "read_all": 
      ControllerAuthor.readAll()
    break
    case "update": 
      id = argv[4]
      first_name = argv[5]
      last_name = argv[6]
      religion = argv[7]
      gender = argv[8]
      age = argv[9]
      ControllerAuthor.updateAuthor(Number(id), first_name, last_name, religion, gender, age)
    break
    case "delete": 
      id = argv[4]
      ControllerAuthor.deleteAuthor(Number(id))
    break
  }
} else if (command === "tag") {
  switch (argument) {
    case "add": 
      const name = argv[4]
      ControllerTag.add(name)
    break
    case "read_one": 
      id = argv[4]
      ControllerTag.readOne(Number(id))
    break
    case "read_all": 
      ControllerTag.readAll()
    break
    case "update": 
      id = argv[4]
      name = argv[5]
      ControllerTag.updateTag(Number(id), name)
    break
    case "delete":
      id = argv[4]
      ControllerTag.deleteTag(Number(id))
    break
  }
} else if (command === "article") {
  switch (argument) {
    case "add": 
      title = argv[4]
      body = argv[5]
      authorId = argv[6]
      tagId = argv[6]
    break
    case "read_one": 
      id = argv[4]
      ControllerArticle.readOne(Number(id))
    break
    case "read_all": 
      ControllerArticle.readAll()
    break
    case "update": 
      id = argv[4]
      title = argv[5]
      body = argv[6]
      authorId = argv[7]
      tagId = argv[8]
      ControllerArticle.updateArticle(Number(id), title, body, authorId, tagId)
    break
    case "delete": 
      id = argv[4]
      ControllerArticle.deleteArticle(Number(id))
    break
  }
} else if (command === "help") {
  console.log("==============================> Documentations <=====================================")
  console.log("1. node index.js author add <first_name> <last_name> <religion> <gender> <age>")
  console.log("2. node index.js author read_one <id>");
  console.log("3. node index.js author read_all");
  console.log("4. node index.js author update <id> <first_name> <last_name> <religion> <gender> <age>");
  console.log("5. node index.js author delete <id>");
  console.log("6. node index.js tag add <name>");
  console.log("7. node index.js tag read_one <id>");
  console.log("8. node index.js tag read_all");
  console.log("9. node index.js tag update <id> <name>");
  console.log("10. node index.js tag delete <id>");
  console.log("11. node index.js article add <title> <body> <AuthorId> <TagId>");
  console.log("12. node index.js article read_one <id>");
  console.log("13. node index.js article read_all");
  console.log("14. node index.js article update <id> <title> <body> <AuthorId> <TagId>");
  console.log("15. node index.js article delete <id>");
  console.log("====================================================================================")
}