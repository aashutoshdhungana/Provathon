var express = require('express');
import * as UserFeatureController from '../controllers/UserFeaturesController'
const { authenticate } = require('../middlewares/authentication');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/addBookmark', UserFeatureController.addBookmarks);

router.post('/insertReview', UserFeatureController.insertReview);

router.post('/createCheckIn', UserFeatureController.createCheckIn);

router.get('/getBookmarks/:userId', UserFeatureController.getBookmarks);
module.exports = router;
