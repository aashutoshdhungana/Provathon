import db from "../models/index";
import * as bcrypt from "bcrypt";
import { generateHomestayToken } from "./AuthService";
import { BadRequestError, GeneralError } from "../helpers/GeneralError";

let Homestay = db.Homestay;
let Room = db.Room;
let Service = db.Service;
let Food = db.Food;
let Attraction = db.Attraction;

/**
 * get homestay by email
 * @param {string} email
 * @returns sequelize instance if found else null
 */
async function getHomestayAccountByEmail(email) {
  try {
    let user = await Homestay.findOne({ where: { email } });
    return user;
  } catch (err) {
    throw err;
  }
}

/**
 * get homestay by id
 * @param {uuid} id
 * @returns
 */
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

/**
 * login as host
 * @param {object} req
 * @returns
 */
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

    validUser.password = undefined;

    return {
      ...validUser.dataValues,
      role: "1",
      token,
    };
  } catch (err) {
    throw err;
  }
}

/**
 * create new homestay
 * @param {object} homestayData
 * @returns object containing basic info of homestay
 */
export async function registerHomestayAsync(homestayData) {
  let {
    email,
    password,
    title,
    description,
    location,
    phoneNum,
    photos,
    coverPhoto,
    services: servicedata,
    attractions: attractiondata,
    foods: fooddata,
    rooms: roomdata,
  } = homestayData;

  console.log(servicedata);

  let rooms = [];
  let services = [];
  let foods = [];
  let attractions = [];

  try {
    if (!getByEmail(email)) {
      throw new BadRequestError("Homestay already registered with this email");
    }

    // insert into homestay table
    password = bcrypt.hashSync(password, 10);
    let homestay = await Homestay.create({
      email,
      password,
      title,
      description,
      location,
      phoneNum,
    });

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

    await homestay.setRooms(rooms);
    await homestay.setAttractions(attractions);
    await homestay.setServices(services);
    await homestay.setFood(foods);

    return homestay;
  } catch (err) {
    throw err;
  }
}
