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
   
   return queryInterface.bulkInsert('authors', 
   [{
      first_name: "John",
      last_name: "Thor",
      religion: "Islam",
      gender: "Male",
      age: "24",
      createdAt : new Date (),
      updatedAt : new Date () 
    },
    {
      first_name: "Jacky",
      last_name: "Low",
      religion: "Kristen",
      gender: "Male",
      age: "28",
      createdAt : new Date (),
      updatedAt : new Date ()
    },
    {
      first_name: "Theresa",
      last_name: "June",
      religion: "Katholik",
      gender: "Female",
      age: "40",
      createdAt : new Date (),
      updatedAt : new Date ()
    },
    {
      first_name: "Erwin",
      last_name: "Ramadhan",
      religion: "Islam",
      gender: "Male",
      age: "32",
      createdAt : new Date (),
      updatedAt : new Date ()
    },
    {
      first_name: "Ahmad",
      last_name: "Jamaludin",
      religion: "Islam",
      gender: "Male",
      age: "45",
      createdAt : new Date (),
      updatedAt : new Date ()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('authors', null, {});
  }
};
