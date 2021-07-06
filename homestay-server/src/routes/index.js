var express = require('express');
import * as UserController from '../controllers/UserController'
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({kaitey : 'Nishesh'});
});

router.post('/login', UserController.login);

router.post('/register', UserController.register);
module.exports = router;
