class ViewHelp{
    static viewHelp(){
        console.log(`
            author add -> add<space> "data yang inign dimasukan"
            author read_one -> read_one<space> "masukan id author"
            author read_all -> read_all
            author update -> update<space> "masukan data yang ingin di update dan idnya"
            author delete -> delete<space> "masukan id author"

            tag add -> add<space> "data yang inign dimasukan"
            tag read_one -> read_one<space> "masukan id author"
            tag read_all -> read_all
            tag update -> update<space> "masukan data yang ingin di update dan idnya"
            tag delete -> delete<space> "masukan id tag"

            article add -> add<space> "data yang inign dimasukan"
            article read_one -> read_one<space> "masukan id author"
            article read_all -> read_all
            article update -> update<space> "masukan data yang ingin di update dan idnya"
            article delete -> delete<space> "masukan id article"
        `)
    }
}

module.exports = ViewHelp