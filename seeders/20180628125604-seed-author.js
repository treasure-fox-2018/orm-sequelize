'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // /*
      // Add altering commands here.
      // Return a promise to correctly handle asynchronicity.
      //
      // Example:
      return queryInterface.bulkInsert('authors', [{
        first_name: 'John',
        last_name: "Doe",
        religion: "Hepinisme",
        gender: "Male",
        age: 19,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    // */
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
