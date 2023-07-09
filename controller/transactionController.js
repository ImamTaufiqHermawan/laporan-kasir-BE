const httpStatus = require('http-status')
const { Transaction, Stock, Product, User } = require('../models')
const { Op } = require('sequelize')

const imagekit = require('../lib/imageKit')
const catchAsync = require('../utils/catchAsync')
const ApiError = require('../utils/ApiError')

const createTransaction = catchAsync(async (req, res) => {
    const { productId, quantity, transactionDate, shift, totalPrice } = req.body

    const product = await Product.findProduct(productId)

    const newTransaction = await Transaction.create({
        productId,
        quantity,
        transactionDate,
        shift,
        totalPrice,
    })

    const updatedStock = await Stock.create({
        type: 'Transaction',
        stock: quantity,
        transactionDate,
        productId
    })

    await Product.update({
        stock: product.stock - quantity,
    }, {
        where: {
            id: productId
        }
    })

    res.status(201).json({
        status: 'Success',
        data: {
            newTransaction,
            updatedStock,
        }
    })
})

const findAllTransactions = catchAsync(async (req, res) => {
    const transactions = await Transaction.findAll(
        {
            include: [
                {
                    model: Product,
                },
                {
                    model: User,
                }
            ],
            order: [
                ['id', 'ASC'],
            ]
        },
    )
    res.status(200).json({
        status: 'Success',
        data: transactions
    })
})

const findProductsByOwnership = catchAsync(async (req, res) => {
    const products = await Product.findAll({
        where: {
            warehouseId: req.user.warehouseId
        }
    })
    res.status(200).json({
        status: 'Success',
        data: {
            products
        }
    })
})

const searchProduct = catchAsync(async (req, res) => {
    let warehouseId = req.user.warehouseId !== null ? req.user.warehouseId : 0
    const products = await Product.findAll({
        where: {
            [Op.or]: [
                {
                    warehouseId
                },
                {
                    name: {
                        [Op.substring]: req.query.name
                    }
                }
            ]
        }
    })
    res.status(200).json({
        status: 'Success',
        data: {
            products
        }
    })
})

const findTransactionById = catchAsync(async (req, res) => {
    const id = req.params.id
    const transaction = await Transaction.findByPk(id, {
        include: {
            model: Product,
        },
    })

    if (!transaction) {
        throw new ApiError(httpStatus.NOT_FOUND, `Transaction with this id ${id} is not found`)
    }

    res.status(200).json({
        status: 'Success',
        data: {
            transaction
        }
    })
})

const updateProduct = catchAsync(async (req, res) => {
    const { name, price, stock } = req.body
    const id = req.params.id

    const product = Product.findProduct(id)

    if (!product) {
        throw new ApiError(httpStatus.NOT_FOUND, `Product with this id ${id} is not found`)
    }

    await Product.update({
        name,
        price,
        stock
    }, {
        where: {
            id
        }
    })
    res.status(200).json({
        status: 'Success',
        data: {
            id, name, price, stock
        }
    })
})

const updateTransaction = catchAsync(async (req, res) => {
    const { productId, quantity, transactionDate, shift, totalPrice, userId } = req.body
    const id = req.params.id

    const transaction = Transaction.findTransaction(id)

    if (!transaction) {
        throw new ApiError(httpStatus.NOT_FOUND, `Transaction with this id ${id} is not found`)
    }

    await Transaction.update({
        productId,
        quantity,
        transactionDate,
        shift,
        totalPrice,
        userId
    }, {
        where: {
            id
        }
    })
    res.status(200).json({
        status: 'Success',
        data: {
            id, productId, quantity, transactionDate, shift, totalPrice
        }
    })
})


const deleteTransaction = catchAsync(async (req, res) => {
    const id = req.params.id

    const transaction = Transaction.findTransaction(id)

    if (!transaction) {
        throw new ApiError(httpStatus.NOT_FOUND, `Transaction with this id ${id} is not found`)
    }

    await Transaction.destroy({
        where: {
            id
        }
    })

    res.status(200).json({
        status: 'Success',
        message: `Transaction dengan id ${id} terhapus`
    })
})

module.exports = {
    createTransaction,
    findProductsByOwnership,
    findAllTransactions,
    findTransactionById,
    updateProduct,
    updateTransaction,
    deleteTransaction,
    searchProduct,
}
