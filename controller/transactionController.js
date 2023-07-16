const httpStatus = require('http-status')
const { Transaction, Stock, Product, User } = require('../models')
const { Op } = require('sequelize')
const ExcelJS = require('exceljs');

const imagekit = require('../lib/imageKit')
const catchAsync = require('../utils/catchAsync')
const ApiError = require('../utils/ApiError');
const formatDate = require('../utils/date');
const rupiah = require('../utils/price');

const createTransaction = catchAsync(async (req, res) => {
    const { productId, quantity, transactionDate, shift, totalPrice } = req.body

    const product = await Product.findProduct(productId)

    const newTransaction = await Transaction.create({
        productId,
        quantity,
        transactionDate,
        shift,
        totalPrice,
        userId: req.user.id
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
    const { date, name } = req.query;
    let { page, limit } = req.query;

    const condition = {};
    if (date) condition.transactionDate = new Date(date);

    const includeCondition = {};
    if (name) includeCondition.name = { [Op.iLike]: `${name}%` };;

    page = page ? parseInt(page) : 1;
    limit = limit ? parseInt(limit) : 10;

    const offset = (page - 1) * limit;

    const { count, rows } = await Transaction.findAndCountAll(
        {
            include: [
                {
                    model: Product,
                    where: includeCondition
                },
                {
                    model: User,
                }
            ],
            where: condition,
            order: [
                ['id', 'ASC'],
            ],
            offset,
            limit
        },
    )

    const totalPages = Math.ceil(count / limit);

    res.status(200).json({
        status: 'Success',
        data: rows,
        totalPages
    })
})

const exportTransactions = catchAsync(async (req, res) => {
    const { date, name } = req.query;

    const condition = {};
    if (date) condition.transactionDate = new Date(date);

    const includeCondition = {};
    if (name) includeCondition.name = { [Op.iLike]: `${name}%` };;

    const transactions = await Transaction.findAll(
        {
            include: [
                {
                    model: Product,
                    where: includeCondition
                },
                {
                    model: User,
                }
            ],
            where: condition,
            order: [
                ['id', 'ASC'],
            ],
        },
    )

    console.log(transactions)

    // Create a new workbook
    const workbook = new ExcelJS.Workbook();

    // Add a worksheet
    const worksheet = workbook.addWorksheet('Transactions');

    // Define headers
    worksheet.columns = [
        { header: 'ID', key: 'id' },
        { header: 'Nama Produk', key: 'nama_produk' },
        { header: 'Harga Satuan', key: 'harga' },
        { header: 'Jumlah', key: 'quantity' },
        { header: 'Total Harga', key: 'total_harga' },
        { header: 'Tanggal Transaksi', key: 'tanggal_transaksi' },
        { header: 'Tanggal Input', key: 'tanggal_input' },
        { header: 'Shift', key: 'shift' },
        { header: 'Nama Pegawai', key: 'pegawai' },
    ];

    // Add rows
    transactions.forEach((transaction) => {
        worksheet.addRow({
            id: transaction.id,
            nama_produk: transaction.Product.name,
            harga: rupiah(transaction.Product.price),
            quantity: transaction.quantity,
            total_harga: rupiah(transaction.totalPrice),
            tanggal_transaksi: formatDate(transaction.transactionDate),
            tanggal_input: formatDate(transaction.createdAt),
            shift: transaction.shift,
            pegawai: transaction?.User?.name
        });
    });

    // Generate the Excel file buffer
    const buffer = await workbook.xlsx.writeBuffer();

    // Set response headers
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename=transactions.xlsx');

    // Send the file as response
    res.send(buffer)
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
    exportTransactions,
}
