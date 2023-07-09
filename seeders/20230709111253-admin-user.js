'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Users', [
      {
        name: 'Lisma',
        email: 'lisma@gmail.com',
        password: '$2a$10$7nwqtWYWGDbeAvOU2sfyEeu0XLKCqxWT0A2NVkJ/Ml1.bfTW7pkZu',
        role: "Manager",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Imam',
        email: 'imam@gmail.com',
        password: '$2a$10$7nwqtWYWGDbeAvOU2sfyEeu0XLKCqxWT0A2NVkJ/Ml1.bfTW7pkZu',
        role: "Manager",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
