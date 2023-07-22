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

    await queryInterface.bulkInsert('Transactions', [
      {
        "productId": "1",
        "quantity": "10",
        "totalPrice": 160000,
        "transactionDate": "2023-07-22",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "productId": "1",
        "quantity": "10",
        "totalPrice": 960000,
        "transactionDate": "2023-07-21",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "productId": "1",
        "quantity": "10",
        "totalPrice": 760000,
        "transactionDate": "2023-07-20",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "productId": "1",
        "quantity": "10",
        "totalPrice": 250000,
        "transactionDate": "2023-07-19",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "productId": "1",
        "quantity": "10",
        "totalPrice": 350000,
        "transactionDate": "2023-07-18",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "productId": "1",
        "quantity": "10",
        "totalPrice": 750000,
        "transactionDate": "2023-07-17",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "productId": "1",
        "quantity": "10",
        "totalPrice": 160000,
        "transactionDate": "2023-07-16",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "productId": "1",
        "quantity": "10",
        "totalPrice": 150000,
        "transactionDate": "2023-07-15",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "productId": "1",
        "quantity": "10",
        "totalPrice": 900000,
        "transactionDate": "2023-07-14",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "productId": "1",
        "quantity": "10",
        "totalPrice": 330000,
        "transactionDate": "2023-07-13",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "productId": "1",
        "quantity": "10",
        "totalPrice": 600000,
        "transactionDate": "2023-07-12",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "productId": "1",
        "quantity": "10",
        "totalPrice": 540000,
        "transactionDate": "2023-07-11",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "productId": "1",
        "quantity": "10",
        "totalPrice": 400000,
        "transactionDate": "2023-07-10",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "productId": "1",
        "quantity": "10",
        "totalPrice": 300098,
        "transactionDate": "2023-07-09",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "productId": "1",
        "quantity": "10",
        "totalPrice": 610000,
        "transactionDate": "2023-07-08",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "productId": "1",
        "quantity": "10",
        "totalPrice": 280000,
        "transactionDate": "2023-07-07",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "productId": "1",
        "quantity": "10",
        "totalPrice": 410000,
        "transactionDate": "2023-07-06",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "productId": "1",
        "quantity": "10",
        "totalPrice": 300000,
        "transactionDate": "2023-07-05",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "productId": "1",
        "quantity": "10",
        "totalPrice": 230000,
        "transactionDate": "2023-07-04",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "productId": "1",
        "quantity": "10",
        "totalPrice": 190000,
        "transactionDate": "2023-07-03",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "productId": "1",
        "quantity": "10",
        "totalPrice": 120000,
        "transactionDate": "2023-07-02",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "productId": "1",
        "quantity": "10",
        "totalPrice": 17000,
        "transactionDate": "2023-07-01",
        createdAt: new Date(),
        updatedAt: new Date()
      },
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
