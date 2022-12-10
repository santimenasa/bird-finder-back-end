const express = require('express');
const router = express.Router();
const Bird = require('../models/bird')
const birdController = require('../controllers/bird-controller')



router.post('/', birdController.addBird)
router.get('/', birdController.getBirds)



module.exports = router