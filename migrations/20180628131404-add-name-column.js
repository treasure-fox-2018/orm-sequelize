'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      //
      // Add altering commands here.
      // Return a promise to correctly handle asynchronicity.
      //
      // Example:
      return queryInterface.addColumn('Tags', "name", {type: Sequelize.STRING});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
