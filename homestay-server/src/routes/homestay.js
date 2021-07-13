var express = require("express");

import * as HomestayController from "../controllers/HomestayController";
import { validateRegisterHomestay } from "../schemas/homestaySchema";

var router = express.Router();

// public routers
router.post("/login", HomestayController.homestayLogin);

router.post(
  "/register",
  validateRegisterHomestay,
  HomestayController.homestayRegister
);

router.get("/:id", HomestayController.getHomestayAsync);

// private routes

// update homestay info

module.exports = router;
