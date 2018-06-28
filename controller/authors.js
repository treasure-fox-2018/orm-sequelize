const ModelAuthor = require('../models/')


class Author {
  static authorAdd(first_name, last_name, religion, gender, age) {
    ModelAuthor.Author.create(
      {
        first_name: first_name,
        last_name: last_name,
        religion: religion,
        gender: gender,
        age: age
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

  static authorReadOne(id) {
    ModelAuthor.Author.findById(id, {raw:true})
    .then(response => {
      if (response === null) {
        console.log('data tidak di temukan');
      } else {
        console.log(response);
      }
    })
    // .catch(err => {
    //   if(err) {
    //     console.log('data tidak di temukan');
    //   }
    // })
  }

  static authorReadAll() {
    ModelAuthor.Author.findAll({raw:true})
    .then(response => {
      console.log(response);
    })
  }

  static authorUpdate(id, first_name, last_name, religion, gender, age) {
    ModelAuthor.Author.update({
      first_name:first_name,
      last_name:last_name, 
      religion:religion, 
      gendcer:gender, 
      age:age}, 
      {where:{id:Number(id)}
    })
    .then(() => {
      console.log(`data id: ${id} berhasil di ubah`)
    })
    .catch(err => {
      console.log(err);
    })
  }

  static authorDelete(id) {
    ModelAuthor.Author.destroy({where:{id:Number(id)}
    }).then(() => {
      console.log(`data id: ${id} sudah di hapus`);
    })
    .catch(err => {
      console.log(err);
    })
  }
}

module.exports = Author
