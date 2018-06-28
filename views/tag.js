class Tag{
    static add(tag){
        console.log(tag)
    }

    static readOne(tagId){
        console.log(tagId)
    }

    static readAll(tags){
        console.log(tags)
    }

    static update(updateTag){
        console.log(updateTag)
    }

    static erase(id){
        console.log(id)
    }
}

module.exports = Tag