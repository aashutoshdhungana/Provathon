import db from "../models/index";
import * as bcrypt from "bcrypt";
import { generateUserToken } from "./AuthService";
import { GeneralError, BadRequestError } from "../helpers/GeneralError";

const User = db.User;

export async function loginAsync(email, password) {
  try {
    let validUser = await getUserByEmail(email);
    if (validUser === null) {
      throw new GeneralError("User not registered", 401);
    }

    if (!bcrypt.compareSync(password, validUser.password)) {
      throw new GeneralError("Password donot Match", 401);
    }

    let token = generateUserToken(validUser.id);

    delete validUser.dataValues.password;
    let response = {
      ...validUser.dataValues,
      role: 0,
      token,
    };
    return response;
  } catch (err) {
    throw err;
  }
}

export async function registerAsync(userData) {
  try {
    console.log(`Verigying if user with ${userData.email} exists...`);

    const existingUser = await getUserByEmail(userData.email);
    if (existingUser) {
      throw new BadRequestError("User already registered with the email");
    }

    userData.password = bcrypt.hashSync(userData.password, 10);
    let user = await User.build(userData);
    await user.save();
    return user;
  } catch (err) {
    throw err;
  }
}

async function getUserByEmail(email) {
  try {
    let user = await User.findOne({ where: { email: email } });
    return user;
  } catch (err) {
    throw err;
  }
}
