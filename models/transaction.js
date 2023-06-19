'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Product, {
        foreignKey: {
          name: "productId",
          allowNull: false,
        },
      });
    }
  }
  Transaction.init({
    userId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    shift: {
      type: DataTypes.ENUM(['Pagi', 'Siang', 'Malam']),
      defaultValue: 'Pagi'
    },
    totalPrice: DataTypes.INTEGER,
    transactionDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};