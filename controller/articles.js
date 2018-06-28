const ModelArticle = require('../models/')

class Article {
  constructor() {

  }

  static articleAdd(title, body, authorId, tagId) {
    ModelArticle.Article.create(
      {
        title: title,
        body: body,
        authorId: authorId,
        tagId: tagId,
      })
      .then((data) => {
        let result = data.get()
        console.log(`data
          ${JSON.stringify(result)}
          berhasil di tambahkan!`);
      })
      .catch((err) => {
        console.log(err)
      })
  }

  static articleReadOne(id) {
    ModelArticle.Article.findById(id, {raw:true})
    .then(data => {
      if (data === null) {
        console.log('data tidak di temukan');
      } else {
        console.log(data);
      }
    })
  }

  static articleReadAll() {
    ModelArticle.Article.findAll({raw:true})
    .then(response => {
      console.log(response);
    })
  }

  static articleUpdate(id, title, body, authorId, tagId) {
    ModelArticle.Article.update({
      title: title,
      body: body,
      authorId: authorId,
      tagId: tagId}, 
      {where:{id:Number(id)}
    })
    .then(() => {
      console.log(`data id: ${id} berhasil di ubah`)
    })
    .catch(err => {
      console.log(err);
    })
  }

  static articleDelete(id) {
    ModelArticle.Article.destroy({where:{id:Number(id)}
    }).then(() => {
      console.log(`data id: ${id} sudah di hapus`);
    })
    .catch(err => {
      console.log(err);
    })
  }
}

module.exports = Article
