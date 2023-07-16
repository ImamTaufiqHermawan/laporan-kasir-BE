const router = require('express').Router()

// controller
const Product = require('../controller/productController')

// middleware
const Authentication = require('../middlewares/authenticate')
const Uploader = require('../middlewares/uploader')
const checkRole = require('../middlewares/checkRole')
const checkOwnership = require('../middlewares/checkCredentials')

router.get('/',  Authentication, Product.findAllProducts)
router.post('/',  Authentication, checkRole("Manager"), Product.createProduct)
router.get('/search', Product.searchProduct)
router.get('/ownership', checkRole('Admin'), Product.findProductsByOwnership)
router.get('/:id', Product.findProductById)
router.put('/:id', Authentication, checkRole("Manager"), Product.updateProduct)
router.delete('/:id',  Authentication, checkRole("Manager"), Product.deleteProduct)

module.exports = router
