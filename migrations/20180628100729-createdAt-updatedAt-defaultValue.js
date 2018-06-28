'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
      return [queryInterface.changeColumn('Authors', 'createdAt', {type:Sequelize.DATE, defaultValue:new Date()}),
              queryInterface.changeColumn('Authors', 'updatedAt', {type:Sequelize.DATE, defaultValue:new Date()}),
              queryInterface.changeColumn('Articles', 'createdAt', {type:Sequelize.DATE, defaultValue:new Date()}),
              queryInterface.changeColumn('Articles', 'updatedAt', {type:Sequelize.DATE, defaultValue:new Date()}),
              queryInterface.changeColumn('Tags', 'createdAt', {type:Sequelize.DATE, defaultValue:new Date()}),
              queryInterface.changeColumn('Tags', 'updatedAt', {type:Sequelize.DATE, defaultValue:new Date()})]
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
