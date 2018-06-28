'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert('Articles', [{
        title: 'Using Middleware On Express JS',
        body: 'This is How to Use Middleware, you need to .... ya that`s it',
        author_id: '1',
        tag_id: '2',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        title: 'Using Session On Express JS',
        body: 'Before we use Session the one thing that you should know is about session it self, you need to .... ya that`s it',
        author_id: '2',
        tag_id: '3',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
