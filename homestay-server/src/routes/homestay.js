var express = require("express");

import * as HomestayController from "../controllers/HomestayController";
import { validateRegisterHomestay } from "../schems/homestayScheme";

var router = express.Router();

router.post("/login", HomestayController.homestayLogin);

router.post(
  "/register",
  validateRegisterHomestay,
  HomestayController.homestayRegister
);

router.get("/:id", HomestayController.getHomestayAsync);

module.exports = router;
