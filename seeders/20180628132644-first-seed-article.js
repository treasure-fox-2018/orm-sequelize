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
   return queryInterface.bulkInsert('articles', 
   [{
      title: "Hello, good morning",
      body: "Enjoy Life",
      AuthorId: "1",
      TagId: "3",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      title: "Indonesia Jaya",
      body: "Tanah Airku",
      AuthorId: "2",
      TagId: "1",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      title: "Marvel CU",
      body: "Iron Man",
      AuthorId: "1",
      TagId: "3",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      title: "Travelling",
      body: "Explore Europe",
      AuthorId: "3",
      TagId: "2",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      title: "Japan after Atom Bomb",
      body: "Hiroshima Nagasaki",
      AuthorId: "4",
      TagId: "1",
      createdAt : new Date(),
      updatedAt : new Date()
    }
     ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('articles', null, {});
  }
};
