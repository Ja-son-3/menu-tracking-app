const express = require('express')
const router = express.Router()
//add controllers
//const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', indexController.getHome)
router.

module.exports = router