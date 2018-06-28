class ViewAuthor{
    static addAuthor(author){
        console.log(author.toJSON())
    }

    static readOne(author){
        console.log(author.toJSON())
    }

    static readAll(authors){
        authors.forEach(element => {
            console.log(element.toJSON())
        });
    }

    static info(info){
        console(info)
    }
    
}

module.exports = ViewAuthor