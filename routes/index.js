const router = require('express').Router()

// import package swagger 
const swaggerUi = require('swagger-ui-express');
// import file json
const swaggerDocument = require('../docs/swagger.json');

// api docs
router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

const Auth = require('./auth')
const Product = require('./product')
const Transaction = require('./transaction')
const User = require('./user')

// API server
router.use('/api/v1/auth/', Auth)
router.use('/api/v1/products', Product)
router.use('/api/v1/transactions', Transaction)
router.use('/api/v1/users', User)

module.exports = router
