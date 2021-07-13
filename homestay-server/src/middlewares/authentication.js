import { verify } from "jsonwebtoken";
import { GeneralError } from "../helpers/GeneralError";

import { verifyUserToken } from "../service/authService";

const config = require("../settings");
const secret = config.secret;

export const authenticate = function (req, res, next) {
  try {
    const bearerHeader = req.headers["authorization"];

    if (!bearerHeader) {
      throw new GeneralError("Authorization not supplied", 401);
    }

    if (!bearerHeader.startsWith("Bearer ")) {
      throw new GeneralError("Invlid token format!", 403);
    }

    const token = bearerHeader.split(" ")[1];

    let decoded = verify(token, secret);

    console.log(decoded);

    if (!decoded) {
      throw new GeneralError("Not Authorized", 401);
    }

    next();
  } catch (err) {
    next(err);
  }
};
