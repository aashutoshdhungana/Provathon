import { GeneralError } from "../helpers/GeneralError";
import db from "../models/index";

const { Users, Bookmark, Review, Homestay } = db;

export async function getBookmarksByUserId(userId) {
  try {
    let bookMarkList = await Bookmark.findAll({
      where: {
        userId: userId,
      },

      include: [
        {
          model: Homestay,
        },
      ],
    });
    return bookMarkList;
  } catch (err) {
    throw err;
  }
}

export async function addBookMarks(bookMarkData) {
  try {
    let bookmark = await Bookmark.create(bookMarkData);
    return bookmark;
  } catch (err) {
    throw err;
  }
}

export async function insertReview(reviewData) {
  try {
    if (!isCheckedIn(reviewData.userId, reviewData.homestayId)) {
      throw GeneralError("User not Checked In", 400);
    }

    let review = await Review.create(reviewData);
    return review;
  } catch (err) {
    throw err;
  }
}

export function createCheckin(checkInData) {
  try {
    let checkIn = CheckIn.create(checkInData);
    return checkIn;
  } catch (err) {
    throw err;
  }
}

async function isCheckedIn(userId, homestayId) {
  try {
    let { count, rows } = await CheckIn.findAndCountAll({
      where: { userId, homestayId, isVerified: false },
    });
    if (count > 0) {
      return true;
    }
  } catch (err) {
    return false;
  }
}
