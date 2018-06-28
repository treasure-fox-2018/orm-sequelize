
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

    return queryInterface.bulkInsert('tags', [{
        name: 'Javascript',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Middleware',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Session',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Multer',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Functional Programming',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Asynchronous',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Synchronous',
        createdAt: new Date(),
        updatedAt: new Date()
      },], {});
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
