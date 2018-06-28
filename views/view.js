
class View {
  static help () {
    console.log(
      '==== documentation ================================== \n' +
      'author add -> add<space> "data yang ingin dimasukkan\n' +
      'author read_one -> read_one<space> "masukkan id author\n' +
      'author read_all -> read_all\n' +
      'author update -> update<space> "masukkan data yang ingin di update dan id-nya\n' +
      'author delete -> delete<space> "masukkan id author"\n' +
      'tag add -> add<space> "data yang ingin dimasukkan"\n' +
      'tag read_one -> read_one<space> "masukkan id tag"\n' +
      'tag read_all -> read_all\n' +
      'tag update -> update<space> "masukkan data yang ingin di update dan id-nya"\n' +
      'tag delete -> delete<space> "masukkan id tag"\n' +
      'article add -> add<space> "data yang ingin dimasukkan"\n' +
      'article read_one -> read_one<space> "masukkan id article"\n' +
      'article read_all -> read_all\n' +
      'article update -> update<space> "masukkan data yang ingin di update dan id-nya"\n' +
      'article delete -> delete<space> "masukkan id article"\n'   
    )
  }

  static displayMessage () {
    console.log(`Data is not found`)
  }

  static displayError (output) {
    console.log(output)
  }

  static displayEmpty () {
    console.log(`There is no data`)
  }
  static authorReadOne (output) {
    console.log(output)
  }

  static authorReadAll (output) {
    console.log(output)
  }

  static authorAdd (output) {
    console.log("Input Data :", output);
  }

  static displayUpdated () {
    console.log(`Data has been updated!`)
  }
}

module.exports = View;