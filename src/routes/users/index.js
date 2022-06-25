const router = require('express').Router()
const userMiddleware = require('../../controllers/users')
router.post('/', userMiddleware.createUser)

router.post('/login',userMiddleware.login)

// routes.get('/:id')

module.exports = router