import db from '../models/index';
import * as bcrypt from 'bcrypt';
import { generateHomestayToken } from './AuthService';
import { GeneralError} from '../helpers/GeneralError';

const Homestay = db.Homestay;

export async function loginHomestayAsyc (email, password) {
    try {
        let validUser = await getHomestayByEmail(email);
        if (validUser === null) {
            throw new GeneralError('Homestay not registered', 401);
        }

        if (!bcrypt.compareSync(password, validUser.password)) {
            throw new GeneralError('Password donot Match', 401);
        }

        let token = generateHomestayToken(validUser.homestayId);

        delete validUser.dataValues.password;
        let response = {
            ...validUser.dataValues,
            role: '1',
            token
        }
        console.log(response);
        return response;
    } catch(err) {
        throw err;
    }
};

export async function registerHomestayAsync (homestayData) {
    try {
        let rooms = homestayData.rooms;
        let coverPhoto = homestayData.coverPhoto;
        let photos = homestayData.photos;
        let attractions = homestayData.attractions;
        let services = homestayData.services;
        let userData = homestayData.AccountData;
        userData.password = bcrypt.hashSync(userData.password, 10);
        let user = await Homestay.build(userData);
        await user.save();
        return user;
    } catch(err) {
        throw err;
    }
};

async function getHomestayByEmail(email) {
    try {
        let user = await Homestay.findOne({where: {email: email}});
        return user;
    } catch (err) {
        throw err;
    }
}