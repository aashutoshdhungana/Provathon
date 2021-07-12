var express = require("express");
import * as UserController from "../controllers/UserController";
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  const data = { kaitey: "Nishesh", version: 1.0, name: "homestay api" };
  res.status(200).json(data);
});

router.post("/login", UserController.login);

router.post("/register", UserController.register);
module.exports = router;
