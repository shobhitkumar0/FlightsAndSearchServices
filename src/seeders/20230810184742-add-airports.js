'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Airports', [{
        name:'Kempegowda International Airport',
        cityId:2,
        createdAt: new Date(),
        updatedAt: new Date(),
       },
      {
        name:'Vishnu Airport',
        cityId:352,
        createdAt: new Date(),
        updatedAt: new Date(),

      },
    {
      name:'Gaya Airport',
      cityId:353,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  {
    name:'Buddha Airport',
    cityId:355,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name:'Mysuru International Airport',
    cityId:365,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name:'Chennai International Airport',
    cityId:364,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name:'Kolkata International Airport',
    cityId:360,
    createdAt: new Date(),
    updatedAt: new Date(),
  }
], {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
