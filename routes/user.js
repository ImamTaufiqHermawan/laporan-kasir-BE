const router = require('express').Router()

// controller
const User = require('../controller/userController')

router.get('/', User.findAllUsers)
router.post('/', User.createUser)
// router.get('/search', Product.searchProduct)
// router.get('/ownership', checkRole('Admin'), Product.findProductsByOwnership)
router.get('/:id', User.findUserById)
router.put('/:id', User.updateUser)
router.delete('/:id', User.deleteUser)

module.exports = router
