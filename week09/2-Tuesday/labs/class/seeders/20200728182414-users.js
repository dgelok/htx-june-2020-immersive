'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('users', [
    {
      firstname: 'John',
      lastname: 'Doe',
      email: 'John@dc.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstname: 'bill',
      lastname: 'McFuggins',
      email: 'bob@gmai.co',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstname: 'deff',
      lastname: 'Fedd',
      email: 'dano@od.vi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstname: 'qbert',
      lastname: 'zzzub',
      email: 'lskdjf@jg.ci',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstname: 'bibibibi',
      lastname: 'cucucucu',
      email: 'bu@ci.co',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
