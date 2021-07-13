import db from "../models/index";
import * as bcrypt from "bcrypt";
import { generateHomestayToken } from "./AuthService";
import { GeneralError } from "../helpers/GeneralError";

let Homestay = db.Homestay;
let Room = db.Room;
let Service = db.Service;
let Food = db.Food;
let Attraction = db.Attraction;

export async function loginHomestayAsync(req) {
  try {
    let email = req.email,
      password = req.password;
    let validUser = await getHomestayAccountByEmail(email);
    if (validUser === null) {
      throw new GeneralError("Homestay not registered", 401);
    }

    if (!bcrypt.compareSync(password, validUser.password)) {
      throw new GeneralError("Password donot Match", 401);
    }

    let token = generateHomestayToken(validUser.homestayId);

    delete validUser.dataValues.password;
    let response = {
      ...validUser.dataValues,
      role: "1",
      token,
    };
    return response;
  } catch (err) {
    throw err;
  }
}

export async function registerHomestayAsync(homestayData) {
  try {
    let roomdata = homestayData.rooms;
    console.log(roomdata);
    let coverPhoto = homestayData.coverPhoto;
    let photos = homestayData.photos;
    let attractiondata = homestayData.attractions;
    let servicedata = homestayData.services;
    let fooddata = homestayData.foods;
    let userData = homestayData.userData;
    userData.password = bcrypt.hashSync(userData.password, 10);
    let rooms = [];
    let services = [];
    let foods = [];
    let attractions = [];
    for (let room of roomdata) {
      rooms.push(await Room.create(room));
    }

    for (let service of servicedata) {
      services.push(await Service.create(service));
    }

    for (let attraction of attractiondata) {
      attractions.push(await Attraction.create(attraction));
    }

    for (let food of fooddata) {
      foods.push(await Food.create(food));
    }
    let homestay = await Homestay.create(userData);
    await homestay.setRooms(rooms);
    await homestay.setAttractions(attractions);
    await homestay.setServices(services);
    await homestay.setFood(foods);
    return homestay;
  } catch (err) {
    throw err;
  }
}

async function getHomestayAccountByEmail(email) {
  try {
    let user = await Homestay.findOne({ where: { email: email } });
    return user;
  } catch (err) {
    throw err;
  }
}

export async function getHomestayByIdAsync(id) {
  try {
    let homestay = await Homestay.findOne({
      where: { homestayId: id },
      include: [
        {
          model: Room,
          as: "Rooms",
        },
        {
          model: Food,
          as: "Food",
        },
        {
          model: Attraction,
          as: "Attractions",
        },
        {
          model: Service,
          as: "Services",
        },
        {
          model: Review,
          as: "Reviews",
        },
      ],
    });
    delete homestay.dataValues.password;
    return homestay.dataValues;
  } catch (err) {
    throw err;
  }
}
