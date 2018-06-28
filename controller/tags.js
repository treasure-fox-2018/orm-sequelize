const ModelTag = require('../models/')

class Tag {
  constructor() {

  }

  static tagAdd(nameTag) {
    ModelTag.Tag.create(
      {
        name: nameTag
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

  static tagReadOne(id) {
    ModelTag.Tag.findById(id, {raw:true})
    .then(data => {
      if (data === null) {
        console.log('data tidak di temukan');
      } else {
        console.log(data);
      }
    })
  }

  static tagReadAll() {
    ModelTag.Tag.findAll({raw:true})
    .then(resultData => {
      console.log(resultData);
    })
  }

  static tagUpdate(newTagName, id) {
    ModelTag.Tag.update({
      name: newTagName
    }, 
      {where:{id:Number(id)}
    })
    .then(() => {
      console.log(`data id: ${id} berhasil di ubah`)
    })
    .catch(err => {
      console.log(err);
    })
  }

  static tagDelete(id) {
    ModelTag.Tag.destroy({where:{id:Number(id)}
    }).then(() => {
      console.log(`data id: ${id} sudah di hapus`);
    })
    .catch(err => {
      console.log(err);
    })
  }
}

module.exports = Tag
