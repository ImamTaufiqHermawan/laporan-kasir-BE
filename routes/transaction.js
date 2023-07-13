const router = require('express').Router()

// controller
const Product = require('../controller/productController')
const Transaction = require('../controller/transactionController')

// middleware
const Authentication = require('../middlewares/authenticate')
const Uploader = require('../middlewares/uploader')
const checkRole = require('../middlewares/checkRole')
const checkOwnership = require('../middlewares/checkCredentials')

router.get('/', Transaction.findAllTransactions)
router.post('/', Authentication, Transaction.createTransaction)
router.get('/search', Product.searchProduct)
router.get('/:id', Transaction.findTransactionById)
router.put('/:id', Transaction.updateTransaction)
router.delete('/:id', Transaction.deleteTransaction)

module.exports = router
