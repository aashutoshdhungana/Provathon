import db from "../models/index";
import * as bcrypt from "bcrypt";
import { generateUserToken } from "./AuthService";
import { BadRequestError, UnAuthorizedError } from "../helpers/GeneralError";

const User = db.User;

async function getUserByEmail(email) {
  try {
    let user = await User.findOne({ where: { email: email } });
    return user;
  } catch (err) {
    throw err;
  }
}

/**
 *
 * @param {string} email
 * @param {string} password
 * @returns user detail with token if user found
 */
export async function loginAsync(email, password) {
  try {
    let validUser = await getUserByEmail(email);
    if (!validUser) {
      throw new UnAuthorizedError("User not registered");
    }

    if (!bcrypt.compareSync(password, validUser.password)) {
      throw new UnAuthorizedError("Password donot Match");
    }

    const payload = {
      id: validUser.userId,
    };

    let token = generateUserToken(payload);

    validUser.password = undefined;

    return {
      ...validUser.dataValues,
      role: 0,
      token,
    };
  } catch (err) {
    throw err;
  }
}

/**
 *
 * @param {object} userData
 * @returns creates user and returns user data
 */
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

    user.password = undefined;
    return user;
  } catch (err) {
    throw err;
  }
}

export async function updateProfile(userId, updates) {
  console.log(userId);
  let updatedUser;
  try {
    const user = await User.findOne({
      where: {
        userId,
      },
    });

    if (user) {
      updatedUser = await user.update({
        ...updates,
      });
    }

    return {
      message: "User Updated!",
    };
  } catch (err) {
    throw err;
  }
}
