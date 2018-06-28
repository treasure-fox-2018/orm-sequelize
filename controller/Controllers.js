class Help {
  static help() {
    console.log(`
    $ node index.js author add <first_name> <last_name> <religion> <gender> <age>
    $ node index.js author read_one <id_author>
    $ node index.js author read_all
    $ node index.js author update <id_author> <first_name_modif> <last_name_modif> <religion_modif> <gender_modif> <age_modif>
    $ node index.js author delete <id_author>
    $ node index.js article add <title> <body> <Author_id> <TagId>
    $ node index.js article read_one <id_article>
    $ node index.js article read_all
    $ node index.js author update <data> <modify_data> <id_article>
    $ node index.js author delete <id_article>
    $ node index.js tag add <name_tag>
    $ node index.js tag read_one <id_tag>
    $ node index.js tag read_all
    $ node index.js tag update <data> <modify_data> <id_tag>
    $ node index.js tag delete <id_tag>
    `);
  }
  static blank() {
    console.log(`
    $ node index.js help
    `);
  }
}

module.exports = Help;
