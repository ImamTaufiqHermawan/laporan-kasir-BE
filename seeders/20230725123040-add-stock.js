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

    await queryInterface.bulkInsert('Stocks', [
      {
        type: 'Transaction',
        stock: 30,
        productId: 1,
        "transactionDate": "2023-07-21",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Transaction',
        stock: 30,
        productId: 1,
        "transactionDate": "2023-07-20",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Transaction',
        stock: 30,
        productId: 1,
        "transactionDate": "2023-07-19",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Transaction',
        stock: 30,
        productId: 1,
        "transactionDate": "2023-07-18",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Transaction',
        stock: 30,
        productId: 1,
        "transactionDate": "2023-07-17",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Incoming',
        stock: 50,
        productId: 1,
        "transactionDate": "2023-07-21",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Incoming',
        stock: 50,
        productId: 1,
        "transactionDate": "2023-07-20",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Incoming',
        stock: 50,
        productId: 1,
        "transactionDate": "2023-07-19",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Incoming',
        stock: 50,
        productId: 1,
        "transactionDate": "2023-07-18",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Incoming',
        stock: 50,
        productId: 1,
        "transactionDate": "2023-07-17",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Transaction',
        stock: 30,
        productId: 1,
        "transactionDate": "2023-07-16",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Transaction',
        stock: 30,
        productId: 1,
        "transactionDate": "2023-07-24",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Transaction',
        stock: 30,
        productId: 1,
        "transactionDate": "2023-07-25",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Transaction',
        stock: 30,
        productId: 1,
        "transactionDate": "2023-07-26",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Transaction',
        stock: 30,
        productId: 1,
        "transactionDate": "2023-07-27",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Incoming',
        stock: 50,
        productId: 1,
        "transactionDate": "2023-07-24",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Incoming',
        stock: 50,
        productId: 1,
        "transactionDate": "2023-07-25",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Incoming',
        stock: 50,
        productId: 1,
        "transactionDate": "2023-07-26",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Incoming',
        stock: 50,
        productId: 1,
        "transactionDate": "2023-07-27",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Incoming',
        stock: 50,
        productId: 1,
        "transactionDate": "2023-07-28",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Transaction',
        stock: 60,
        productId: 2,
        "transactionDate": "2023-07-21",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Transaction',
        stock: 60,
        productId: 2,
        "transactionDate": "2023-07-20",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Transaction',
        stock: 60,
        productId: 2,
        "transactionDate": "2023-07-19",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Transaction',
        stock: 60,
        productId: 2,
        "transactionDate": "2023-07-18",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Transaction',
        stock: 60,
        productId: 2,
        "transactionDate": "2023-07-17",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Incoming',
        stock: 80,
        productId: 2,
        "transactionDate": "2023-07-21",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Incoming',
        stock: 80,
        productId: 2,
        "transactionDate": "2023-07-20",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Incoming',
        stock: 80,
        productId: 2,
        "transactionDate": "2023-07-19",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Incoming',
        stock: 80,
        productId: 2,
        "transactionDate": "2023-07-18",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Incoming',
        stock: 80,
        productId: 2,
        "transactionDate": "2023-07-17",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Transaction',
        stock: 80,
        productId: 2,
        "transactionDate": "2023-07-16",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Transaction',
        stock: 80,
        productId: 2,
        "transactionDate": "2023-07-24",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Transaction',
        stock: 80,
        productId: 2,
        "transactionDate": "2023-07-25",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Transaction',
        stock: 80,
        productId: 2,
        "transactionDate": "2023-07-26",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Transaction',
        stock: 80,
        productId: 2,
        "transactionDate": "2023-07-27",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Incoming',
        stock: 80,
        productId: 2,
        "transactionDate": "2023-07-24",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Incoming',
        stock: 80,
        productId: 2,
        "transactionDate": "2023-07-25",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Incoming',
        stock: 80,
        productId: 2,
        "transactionDate": "2023-07-26",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Incoming',
        stock: 80,
        productId: 2,
        "transactionDate": "2023-07-27",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Incoming',
        stock: 80,
        productId: 2,
        "transactionDate": "2023-07-28",
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
