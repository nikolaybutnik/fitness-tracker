const db = require('../models')
const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  res.send('Hello World')
})

// Export the router.
module.exports = router
