const {Router} = require('express')
const router = Router()
const controller = require('../controller/controller')

router.get('/other', controller.otherRoute)

// Timeline routes
router.post('/timeline/events', controller.createTimelineEvent)
router.get('/timeline/events', controller.getTimelineEvents)

module.exports = router
