class ViewTag{
    static addAuthor(tag){
        console.log(tag.toJSON())
    }

    static readOne(tag){
        console.log(tag.toJSON())
    }

    static readAll(tags){
        tags.forEach(element => {
            console.log(element.toJSON())
        });
    }

    static info(info){
        console(info)
    }
    
}

module.exports = ViewTag