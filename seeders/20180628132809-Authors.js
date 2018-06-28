'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      // return queryInterface.bulkInsert('Authors', [{
      //   first_name: 'erwin',
      //   last_name: 'ramadhan',
      //   religion: 'islam',
      //   gender: 'male',
      //   age: 20,
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // }], {});
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
