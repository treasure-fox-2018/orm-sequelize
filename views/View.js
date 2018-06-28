class View {
  static displayHelp() {
    console.log(`====documentation==============================
    author add <first_name> <last_name> <religion> <gender> <age>
    author read_one <data-yang-ingin-dicari> <value>
    author read_all
    author update <id> <data-yang-ingin-diubah> <value>
    author delete <id>

    article add <title> <body>
    article read_one <data-yang-ingin-dicari> <value>
    article read_all
    article update <id> <data-yang-ingin-diubah> <value>
    article delete <id>

    tag add <name>
    tag read_one <data-yang-ingin-dicari> <value>
    tag read_all
    tag update <id> <data-yang-ingin-diubah> <value>
    tag delete <id>`)
    console.log(`==============================================`)
  }
}

module.exports = View