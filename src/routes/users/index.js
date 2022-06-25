const router = require('express').Router()
const userMiddleware = require('../../controllers/users')
const { tokenExistis } = require('../../middlewares/auth')
router.post('/', userMiddleware.createUser)

router.post('/login',userMiddleware.login)

router.get('/:id', tokenExistis, userMiddleware.myAccount)

module.exports = router