import {verifyUserToken, verifyHomestayToken} from "../service/AuthService";
import { GeneralError } from "../helpers/GeneralError";
export const authenticateUser = function (req, res, next) {
    try {
        const bearerHeader = req.headers['authorization'];
        if(typeof bearerHeader === 'undefined') {
            throw new GeneralError('Authorization not supplied', 401);
        }
        
        const token = bearerHeader.split(' ')[1];
        if (!verifyUserToken(token)) {
            throw new GeneralError('Not Authorized', 401);
        }
    } catch (err) {
        next(err);
    }
};

export const authenticateHomestay = function (req, res, next) {
    try {
        const bearerHeader = req.headers['authorization'];
        if(typeof bearerHeader === 'undefined') {
            throw new GeneralError('Authorization not supplied', 401);
        }
        
        const token = bearerHeader.split(' ')[1];
        if (!verifyHomestayToken(token)) {
            throw new GeneralError('Not Authorized', 401);
        }
    } catch (err) {
        next(err);
    }
};
