const {Router} = require('express')
const router = Router()
const controller = require('../controller/controller')

router.get('/other', controller.otherRoute)

module.exports = router
