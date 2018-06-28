'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('authors',
    [{first_name:"Jinny",last_name:"Melluish",religion:"islam",gender:"Female",age:"20",createdAt: new Date(),updatedAt: new Date()},
    {first_name:"Ingaborg",last_name:"Listone",religion:"protestant",gender:"Female",age:"19",createdAt: new Date(),updatedAt: new Date()},
    {first_name:"Henrietta",last_name:"Siccombe",religion:"islam",gender:"Female",age:"28",createdAt: new Date(),updatedAt: new Date()},
    {first_name:"Winny",last_name:"Mattam",religion:"catholic",gender:"Male",age:"62",createdAt: new Date(),updatedAt: new Date()},
    {first_name:"Ev",last_name:"Antonopoulos",religion:"islam",gender:"Male",age:"50",createdAt: new Date(),updatedAt: new Date()},
    {first_name:"Raynard",last_name:"Titcom",religion:"protestant",gender:"Male",age:"27",createdAt: new Date(),updatedAt: new Date()},
    {first_name:"Lilah",last_name:"Robeson",religion:"hindu",gender:"Female",age:"20",createdAt: new Date(),updatedAt: new Date()},
    {first_name:"Jackson",last_name:"Gummow",religion:"buddha",gender:"Male",age:"31",createdAt: new Date(),updatedAt: new Date()},
    {first_name:"Colan",last_name:"Brastead",religion:"buddha",gender:"Male",age:"30",createdAt: new Date(),updatedAt: new Date()},
    {first_name:"Wilt",last_name:"Zorzini",religion:"catholic",gender:"Male",age:"44",createdAt: new Date(),updatedAt: new Date()}]
, {});
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
