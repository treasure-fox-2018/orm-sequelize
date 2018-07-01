'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      // Add altering commands here.
      // Return a promise to correctly handle asynchronicity.
      //
      // Example:
      return queryInterface.bulkInsert('articles', [{
        title: 'The Deformation of Mechanically Instable Quasi-Object of Mystery',
        body: "HEHHEHEHEHEEHEHHEHEHHEHE",
        authorId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        tagId: 1
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
