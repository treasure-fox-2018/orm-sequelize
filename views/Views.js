class View {


  static helpAuthor() {
    console.log(`
 author add -> add<space> "data yang ingin dimasukan"
 author read_one -> read_one<space> "masukan id author"
 author read_all -> read_all
 author update -> update<space> "masukan data yang ingin di update dan idnya"
 author delete -> delete<space> "masukan id author"`)
  }


  static helpArticle() {
    console.log(`
 article add -> add<space> "data yang ingin dimasukan"
 article read_one -> read_one<space> "masukan id tag"
 article read_all -> read_all
 article update -> update<space> "masukan data yang ingin di update dan idnya"
 article delete -> delete<space> "masukan id tag"`)
  }


  static helpTag() {
    console.log(`
tag add -> add<space> "data yang ingin dimasukan"
 tag read_one -> read_one<space> "masukan id tag"
 tag read_all -> read_all
 tag update -> update<space> "masukan data yang ingin di update dan idnya"
 tag delete -> delete<space> "masukan id tag"`)
  }


  static viewCreate(data) {
    console.log(data.get({
      plain: true
    }))
  }


  static findById(data) {
    console.log(data.get({
      plain: true
    }))
  }


  static findAll(data) {
    console.log(data)
  }


  static viewUpdate(data) {
    console.log(data)
  }


  static viewErr(data) {
    console.log(data)
  }

  static viewDelete(data, ids) {
    if (data == 0) {
      console.log('data tidak ada ')
    } else {
      console.log('berhasil hapus data dengan id : ' + ids)
    }

  }


}

module.exports = View
