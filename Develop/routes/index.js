const router = require('express').Router()

router.use('/api', require('./exerciseRoutes.js'))
router.use('/api', require('./statsRoutes.js'))
router.use('/api', require('./htmlRoutes.js'))
router.use('/api', require('./workout.js'))

module.exports = router