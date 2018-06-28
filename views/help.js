class Help{
    static help(){
        console.log(`$ node index.js author add first_name, last_name, religion, gender, age`)
        console.log(`$ node index.js author read_one idAuthor`)
        console.log(`$ node index.js author read_all`)
        console.log(`$ node index.js author update idAuthor, column, value`)
        console.log(`$ node index.js author erase idAuthor`)
        console.log(`$ node index.js tag add name`)
        console.log(`$ node index.js tag read_one idTag`)
        console.log(`$ node index.js tag read_all`)
        console.log(`$ node index.js tag update idTag, column, value`)
        console.log(`$ node index.js tag erase idTag`)
        console.log(`$ node index.js article add title, body, AuthorId, TagId`)
        console.log(`$ node index.js article read_one idArticle`)
        console.log(`$ node index.js article read_all`)
        console.log(`$ node index.js article update idArticle, column, value`)
        console.log(`$ node index.js article erase masukan idArticle`)
    }
}

module.exports = Help