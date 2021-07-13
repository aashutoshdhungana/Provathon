import { bool } from "joi";
import { BadRequestError, GeneralError } from "../helpers/GeneralError";
import db from "../models/index";

const { Users, Bookmark, Review, Homestay } = db;

export async function getBookmarksByUserId(userId) {
  try {
    let bookMarkList = await Bookmark.findAll({
      where: {
        userId,
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

export async function addBookMarks(userId, bookmarkData) {
  try {
    console.log(`adding for ${userId} ${bookmarkData.homestayId}`);
    let [bookmark, didCreate] = await Bookmark.findOrCreate({
      where: {
        ...bookmarkData,
        userId,
      },
      default: {
        ...bookmarkData,
        userId,
      },
    });
    return bookmark;
  } catch (err) {
    throw err;
  }
}

export async function removeBookmark(userId, bookmarkId) {
  console.log(`finding bookmark ${userId} ${bookmarkId} `);
  try {
    //check if bookmark exists
    const bookmark = await Bookmark.findOne({
      where: {
        bookmarkId,
        userId,
      },
    });

    if (!bookmark) {
      throw new BadRequestError("Bookmark does not exists");
    }

    await bookmark.destroy();
  } catch (err) {
    throw err;
  }
  return {
    message: "bookmark  deleted!",
  };
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
