class View {
  static help() {
    console.log("======= ORM-SEQUELIZE =====================================================");
    console.log("== documentation ==========================================================");
    console.log("author add -> add <space> [Insert Data Here]");
    console.log("author read_one -> read_one <space> [Insert author's ID here]");
    console.log("author read_all -> read_all");
    console.log("author update -> update <space> [Insert author's ID here] <space> [Insert column name here] <space> \n [Insert new value here]");
    console.log("author delete -> delete <space> [Insert author's ID here]");
    console.log("tag add -> add <space> [Insert Data Here]");
    console.log("tag read_one -> read_one <space> [Insert tag's ID here]");
    console.log("tag read_all -> read_all");
    console.log("tag update -> update <space> [Insert tag's ID here] <space> [Insert column name here] <space> \n [Insert new value here]");
    console.log("tag delete -> delete <space> [Insert tag's ID here]");
    console.log("article add -> add <space> [Insert Data Here]");
    console.log("article read_one -> read_one <space> [Insert article's ID here]");
    console.log("article read_all -> read_all");
    console.log("article update -> update <space> [Insert article's ID here] <space> [Insert column name here] <space> \n [Insert new value here]");
    console.log("article delete -> delete <space> [Insert article's ID here]");
  }

  static showResult(data) {
    console.log("=== your result ==============");
    console.log(data);
    console.log("==============================");
  }

  static showMsg(output) {
    console.log(output);
  }

  static showError(msg) {
    console.log(msg);
  }
}

module.exports = View;
