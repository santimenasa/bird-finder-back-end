const express = require('express');
const router = express.Router();
const Bird = require('../models/bird')
const birdController = require('../controllers/bird-controller')



router.post('/', birdController.addBird)

module.exports = router