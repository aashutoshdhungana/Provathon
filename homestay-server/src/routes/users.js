var express = require("express");

import { authenticate } from "../middlewares/authentication";
import * as UserFeatureController from "../controllers/UserFeaturesController";
import { updateProfile } from "../controllers/UserController";
import { validateUpdateUser } from "../schems/userSchema";

var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.put("/:id", authenticate, validateUpdateUser, updateProfile);

/* User features route */
router.post("/addBookmark", authenticate, UserFeatureController.addBookmarks);

//remove bookmark

router.post("/insertReview", authenticate, UserFeatureController.insertReview);

//remove review

router.post(
  "/createCheckIn",
  authenticate,
  UserFeatureController.createCheckIn
);

router.get(
  "/getBookmarks/:userId",
  authenticate,
  UserFeatureController.getBookmarks
);
module.exports = router;
