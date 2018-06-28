'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // /*
      // Add altering commands here.
      // Return a promise to correctly handle asynchronicity.
      //
      // Example:
      return queryInterface.removeColumn('Tags', "last_name");
    // */
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
