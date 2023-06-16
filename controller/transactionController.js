const httpStatus = require('http-status')
const { Product } = require('../models')
const { Op } = require('sequelize')

const imagekit = require('../lib/imageKit')
const catchAsync = require('../utils/catchAsync')
const ApiError = require('../utils/ApiError')

const createProduct = catchAsync(async (req, res) => {
    const { name, price, stock } = req.body
    
    const newProduct = await Product.create({
        name,
        price,
        stock,
    })

    res.status(201).json({
        status: 'Success',
        data: {
            newProduct
        }
    })
})

const findAllProducts = catchAsync(async (req, res) => {
    const products = await Product.findAll()
    res.status(200).json({
        status: 'Success',
        data: {
            products
        }
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

const findProductById = catchAsync(async (req, res) => {
    const id = req.params.id
    const product = await Product.findByPk(id)

    console.log(product)

    if (!product) {
        throw new ApiError(httpStatus.NOT_FOUND, `Product with this id ${id} is not found`)
    }

    res.status(200).json({
        status: 'Success',
        data: {
            product
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

const deleteProduct = catchAsync(async (req, res) => {
    const id = req.params.id

    const product = Product.findProduct(id)

    if (!product) {
        throw new ApiError(httpStatus.NOT_FOUND, `Product with this id ${id} is not found`)
    }
    
    await Product.destroy({
        where: {
            id
        }
    })

    res.status(200).json({
        status: 'Success',
        message: `Product dengan id ${id} terhapus`
    })
})

module.exports = {
    createProduct,
    findProductsByOwnership,
    findAllProducts,
    findProductById,
    updateProduct,
    deleteProduct,
    searchProduct,
}
