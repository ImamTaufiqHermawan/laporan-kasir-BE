const httpStatus = require('http-status')
const { User } = require('../models')
const { Op } = require('sequelize')
const bcrypt = require('bcrypt')

const catchAsync = require('../utils/catchAsync')
const ApiError = require('../utils/ApiError')
const user = require('../models/user')

const createUser = catchAsync(async (req, res) => {
    // destructuring
    const { email, password, name } = req.body

    // enkripsi password
    const hashedPassword = bcrypt.hashSync(password, 10)

    const user = await User.create({
        name,
        email,
        password: hashedPassword,
    })

    res.status(201).json({
        status: 'Success',
        data: {
            user
        }
    })
})

const findAllUsers = catchAsync(async (req, res) => {
    const users = await User.findAll({
        order: [
            ['id', 'ASC'],
        ]
    })
    res.status(200).json({
        status: 'Success',
        data: {
            users
        }
    })
})

// const findProductsByOwnership = catchAsync(async (req, res) => {
//     const products = await Product.findAll({
//         where: {
//             warehouseId: req.user.warehouseId
//         },
//     })
//     res.status(200).json({
//         status: 'Success',
//         data: {
//             products
//         }
//     })
// })

// const searchProduct = catchAsync(async (req, res) => {
//     let warehouseId = req.user.warehouseId !== null ? req.user.warehouseId : 0
//     const products = await Product.findAll({
//         where: {
//             [Op.or]: [
//                 {
//                     warehouseId
//                 },
//                 {
//                     name: {
//                         [Op.substring]: req.query.name
//                     }
//                 }
//             ]
//         }
//     })
//     res.status(200).json({
//         status: 'Success',
//         data: {
//             products
//         }
//     })
// })

const findUserById = catchAsync(async (req, res) => {
    const id = req.params.id
    const user = await User.findByPk(id)

    console.log(user)

    if (!user) {
        throw new ApiError(httpStatus.NOT_FOUND, `user with this id ${id} is not found`)
    }

    res.status(200).json({
        status: 'Success',
        data: {
            user
        }
    })
})

 const updateUser = catchAsync(async (req, res) => {
     console.log(req.body)
     const { name, email } = req.body.user
     const id = req.params.id

    //  proses cari user by id
     const user = await User.findUserById(id)

     if (!user) {
         throw new ApiError(httpStatus.NOT_FOUND, `Users with this id ${id} is not found`)
     }

     await User.update({
         name,
         email
     }, {
         where: {
             id
         }
     })
     res.status(200).json({
         status: 'Success',
         data: {
             id, name, email
         }
     })
 })

// const deleteProduct = catchAsync(async (req, res) => {
//     const id = req.params.id

//     const product = await Product.findProduct(id)

//     console.log(product)

//     if (!product) {
//         throw new ApiError(httpStatus.NOT_FOUND, `Product with this id ${id} is not found`)
//     }

//     await Product.destroy({
//         where: {
//             id
//         }
//     })

//     res.status(200).json({
//         status: 'Success',
//         message: `Product ${product.name} terhapus`
//     })
// })

module.exports = {
    createUser,
    // findProductsByOwnership,
    findAllUsers,
    findUserById,
    updateUser,
    // deleteProduct,
    // searchProduct,
}
