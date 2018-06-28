class ViewArticle{
    static addArticle(article){
        console.log(article.toJSON())
    }

    static readOne(article){
        console.log(article.toJSON())
    }

    static readAll(articles){
        articles.forEach(element => {
            console.log(element.toJSON())
        });
    }

    static info(info){
        console(info)
    }
    
}

module.exports = ViewArticle