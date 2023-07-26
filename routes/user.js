const router = require('express').Router()

const upload = require('../middlewares/uploader')

// controller
const User = require('../controller/userController')

router.get('/', User.findAllUsers)
router.post('/', User.createUser)
// router.get('/search', Product.searchProduct)
// router.get('/ownership', checkRole('Admin'), Product.findProductsByOwnership)
router.get('/:id', User.findUserById)
router.put('/:id', upload.single('image'), User.updateUser)
router.delete('/:id', User.deleteUser)

module.exports = router
