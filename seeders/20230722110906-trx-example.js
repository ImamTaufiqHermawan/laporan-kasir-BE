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
        "quantity": "16",
        "totalPrice": 160000,
        "transactionDate": "2023-07-22",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId : 1
      },
      {
        "productId": "1",
        "quantity": "96",
        "totalPrice": 960000,
        "transactionDate": "2023-07-21",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId : 1
      },
      {
        "productId": "1",
        "quantity": "76",
        "totalPrice": 760000,
        "transactionDate": "2023-07-20",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId : 1
      },
      {
        "productId": "1",
        "quantity": "25",
        "totalPrice": 250000,
        "transactionDate": "2023-07-19",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId : 1
      },
      {
        "productId": "1",
        "quantity": "35",
        "totalPrice": 350000,
        "transactionDate": "2023-07-18",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId : 1
      },
      {
        "productId": "1",
        "quantity": "75",
        "totalPrice": 750000,
        "transactionDate": "2023-07-17",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId : 1
      },
      {
        "productId": "1",
        "quantity": "16",
        "totalPrice": 160000,
        "transactionDate": "2023-07-16",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId : 1
      },
      {
        "productId": "1",
        "quantity": "15",
        "totalPrice": 150000,
        "transactionDate": "2023-07-15",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId : 1
      },
      {
        "productId": "1",
        "quantity": "90",
        "totalPrice": 900000,
        "transactionDate": "2023-07-14",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId : 1
      },
      {
        "productId": "1",
        "quantity": "33",
        "totalPrice": 330000,
        "transactionDate": "2023-07-13",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId : 1
      },
      {
        "productId": "1",
        "quantity": "60",
        "totalPrice": 600000,
        "transactionDate": "2023-07-12",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId : 1
      },
      {
        "productId": "1",
        "quantity": "54",
        "totalPrice": 540000,
        "transactionDate": "2023-07-11",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId : 1
      },
      {
        "productId": "1",
        "quantity": "40",
        "totalPrice": 400000,
        "transactionDate": "2023-07-10",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId : 1
      },
      {
        "productId": "1",
        "quantity": "30",
        "totalPrice": 300098,
        "transactionDate": "2023-07-09",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId : 1
      },
      {
        "productId": "1",
        "quantity": "61",
        "totalPrice": 610000,
        "transactionDate": "2023-07-08",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId : 1
      },
      {
        "productId": "1",
        "quantity": "28",
        "totalPrice": 280000,
        "transactionDate": "2023-07-07",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId : 1
      },
      {
        "productId": "1",
        "quantity": "41",
        "totalPrice": 410000,
        "transactionDate": "2023-07-06",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId : 1
      },
      {
        "productId": "1",
        "quantity": "30",
        "totalPrice": 300000,
        "transactionDate": "2023-07-05",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId : 1
      },
      {
        "productId": "1",
        "quantity": "23",
        "totalPrice": 230000,
        "transactionDate": "2023-07-04",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId : 1
      },
      {
        "productId": "1",
        "quantity": "19",
        "totalPrice": 190000,
        "transactionDate": "2023-07-03",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId : 1
      },
      {
        "productId": "1",
        "quantity": "12",
        "totalPrice": 120000,
        "transactionDate": "2023-07-02",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId : 1
      },
      {
        "productId": "1",
        "quantity": "17",
        "totalPrice": 17000,
        "transactionDate": "2023-07-01",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId : 1
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
