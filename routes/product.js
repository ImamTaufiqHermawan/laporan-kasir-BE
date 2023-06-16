const router = require('express').Router()

// controller
const Product = require('../controller/productController')

// middleware
const Authentication = require('../middlewares/authenticate')
const Uploader = require('../middlewares/uploader')
const checkRole = require('../middlewares/checkRole')
const checkOwnership = require('../middlewares/checkCredentials')

router.get('/', Product.findAllProducts)
router.post('/',
    Product.createProduct
)
router.get('/search', Product.searchProduct)
router.get('/ownership', checkRole('Admin'), Product.findProductsByOwnership)
router.get('/:id', Product.findProductById)
router.put('/:id',
    checkRole('Admin'),
    checkOwnership('Warehouse', 'req.user.warehouseId'),
    Product.updateProduct
)
router.delete('/:id', checkRole('Admin'), Product.deleteProduct)

module.exports = router
