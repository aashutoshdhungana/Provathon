import {verifyUserToken, verifyHomestayToken} from "../service/AuthService";
import { GeneralError } from "../helpers/GeneralError";
export const authenticateUser = function (req, res, next) {
    try {
        const bearerHeader = req.headers['authorization'];
        if(typeof bearerHeader === 'undefined') {
            throw new GeneralError('Authorization not supplied', 401);
        }
        
        const token = bearerHeader.split(' ')[1];
        let decoded = verifyUserToken(token);
        if (decoded === null) {
            throw new GeneralError('Not Authorized', 401);
        }
        req.userId = decoded.userId;
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
        let decoded = verifyHomestayToken(token);
        if (decoded === null) {
            throw new GeneralError('Not Authorized', 401);
        }
        req.userId = decode.userId;
    } catch (err) {
        next(err);
    }
};
