var express = require("express");

import { authenticate } from "../middlewares/authentication";
import * as UserFeatureController from "../controllers/UserFeaturesController";
import * as UserBookMarkController from "../controllers/userFeatures.js/UserBookmarController";
import * as UserReviewController from "../controllers/userFeatures.js/UserReviewController";
import { updateProfile } from "../controllers/UserController";
import { validateUpdateUser } from "../schemas/userSchema";

var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.put("/:id", authenticate, validateUpdateUser, updateProfile);

/* USER BOOKMARK ROUTES */
router.get(
  "/getBookmarks/:userId",
  authenticate,
  UserBookMarkController.getBookmarks
);

router.post("/addBookmark", authenticate, UserBookMarkController.addBookmarks);

router.delete(
  "/removeBookmark/:id",
  authenticate,
  UserBookMarkController.removeBookmark
);

/*USER REVIEW ROUTES*/
router.post("/insertReview", authenticate, UserReviewController.insertReview);

//remove review

router.post(
  "/createCheckIn",
  authenticate,
  UserFeatureController.createCheckIn
);

module.exports = router;
