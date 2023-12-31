'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.hasMany(models.Transaction, {
        foreignKey: {
          name: "productId",
          allowNull: false,
        },
      });
      Product.hasMany(models.Stock, {
        foreignKey: {
          name: "productId",
          allowNull: false,
        },
      });
    }
  }
  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    stock: {
      type: DataTypes.INTEGER,
      defaultValue: 10
    },
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  },
    Product.findProduct = async function (value) {
      const product = await Product.findOne(
        {
          where: {
            id: value
          }
        }
      )
      return product
    },
  );

  Product.associate = function (models) {
    //association can be defined here
    // Product.belongsTo(models.Warehouse, {
    //   foreignKey: 'warehouseId'
    // })
  }

  return Product;
};