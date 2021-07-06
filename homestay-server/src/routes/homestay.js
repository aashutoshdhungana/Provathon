var express = require('express');
import * as HomestayController from '../controllers/HomestayController'
var router = express.Router();

router.post('/login', HomestayController.homestayLogin);

router.post('/register', HomestayController.homestayRegister);

router.get('/:id', HomestayController.getHomestayAsync);

module.exports = router;