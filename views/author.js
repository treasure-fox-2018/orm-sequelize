class Author{
    static add(author){
        console.log(author)
    }

    static readOne(authorId){
        console.log(authorId)
    }

    static readAll(authors){
        console.log(authors)
    }

    static update(updateAuthor){
        console.log(updateAuthor)
    }

    static erase(id){
        console.log(id)
    }
}

module.exports = Author