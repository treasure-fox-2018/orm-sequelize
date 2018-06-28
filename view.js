class Author{
    static Add(result){
        console.log("SUCCESSFULLY ADDED");
        console.log(result.toJSON());
    }
    static findbyId(result){
        console.log(result.toJSON());
        
    }
    static showAll(result){
        console.log(result);
    }
    static Update(result){
        console.log(result);
    }
    static Delete(result){
        console.log(result);
    }
}
class Tag{
    static Add(result){
        console.log("SUCCESSFULLY ADDED");
        console.log(result.toJSON());
    }
    static findbyId(result){
        console.log(result.toJSON());
        
    }
    static showAll(result){
        console.log(result);
    }
    static Update(result){
        console.log(result);
    }
    static Delete(result){
        console.log(result);
    }
}
class Article{
    static Add(result){
        console.log("SUCCESSFULLY ADDED");
        console.log(result.toJSON());
    }
    static findbyId(result){
        console.log(result.toJSON());
        
    }
    static showAll(result){
        console.log(result);
    }
    static Update(result){
        console.log(result);
    }
    static Delete(result){
        console.log(result);
    }
}

module.exports = {
    Author,
    Tag,
    Article
}