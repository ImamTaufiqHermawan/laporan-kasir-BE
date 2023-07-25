const httpStatus = require('http-status')
const { User } = require('../models')
const { Op } = require('sequelize')
const bcrypt = require('bcrypt')

const catchAsync = require('../utils/catchAsync')
const ApiError = require('../utils/ApiError')
const user = require('../models/user')

const createUser = catchAsync(async (req, res) => {
    // destructuring
    const { email, password, name, role } = req.body

    // enkripsi password
    const hashedPassword = bcrypt.hashSync(password, 10)

    const user = await User.create({
        name,
        email,
        password: hashedPassword,
        role
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
    const id = req.params.id
    const file = req.file
    let img;
    
    // proses jika ada update poto profile
    if (file) {
        // validasi utk format file image
        const validFormat = file.mimetype == 'image/png' || file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg' || file.mimetype == 'image/gif';
        if (!validFormat) {
            throw new ApiError(httpStatus.BAD_REQUEST, 'Wrong Image Format')
        }

        // untuk dapat extension file nya
        const split = file.originalname.split('.')
        const ext = split[split.length - 1]

        // upload file ke imagekit
        img = await imagekit.upload({
            file: file.buffer, //required
            fileName: `IMG-${Date.now()}.${ext}`, //required
        })
    }

    //  proses cari user by id
    const user = await User.findUserById(id)

    if (!user) {
        throw new ApiError(httpStatus.NOT_FOUND, `User with this id ${id} is not found`)
    }

    // enkripsi password
    let hashedPassword;
    if (req?.body?.password) {
        hashedPassword = bcrypt.hashSync(password, 10);
        await User.update({
            password: hashedPassword
        }, {
            where: {
                id
            }
        })
    }

    await User.update({
        name: req?.body?.name,
        email: req?.body?.email,
        role: req?.body?.role,
        profilePic: img?.url,
    }, {
        where: {
            id
        }
    })
    res.status(200).json({
        status: 'Success',
        data: {
            id, role
        }
    })
})

const deleteUser = catchAsync(async (req, res) => {
    const id = req.params.id

    const user = await User.findUserById(id)

    console.log(user)

    if (!user) {
        throw new ApiError(httpStatus.NOT_FOUND, `User with this id ${id} is not found`)
    }

    await User.destroy({
        where: {
            id
        }
    })

    res.status(200).json({
        status: 'Success',
        message: `User ${user.name} terhapus`
    })
})

module.exports = {
    createUser,
    // findProductsByOwnership,
    findAllUsers,
    findUserById,
    updateUser,
    deleteUser,
    // searchProduct,
}
