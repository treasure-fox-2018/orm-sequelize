class Article{
    static add(article){
        console.log(article)
    }

    static readOne(articleId){
        console.log(articleId)
    }

    static readAll(articles){
        console.log(articles)
    }

    static update(updateArticle){
        console.log(updateArticle)
    }

    static erase(id){
        console.log(id)
    }
}

module.exports = Article