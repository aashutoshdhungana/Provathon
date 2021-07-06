import jwt from 'jsonwebtoken';
const config = require('../settings');
const secret = config.secret;
export const generateUserToken = function (userId) {
    const options = {
        algorithm: 'HS256',
        expiresIn: "1d",
        issuer: 'KNAP',
        audience: 'USER',
    };
    const payload = {
        userId
    };

    const token = jwt.sign(payload, secret, options)
    return token;
}

export const generateHomestayToken = function (homestayId) {
    const options = {
        algorithm: 'HS256',
        expiresIn: "1d",
        issuer: 'KNAP',
        audience: 'HOMESTAY',
    };
    const payload = {
        homestayId
    };

    const token = jwt.sign(payload, secret, options)
    return token;
};

export const verifyUserToken = function (token) {
        const options = {
            algorithm: 'HS256',
            issuer: 'KNAP',
            audience: 'USER'
        }
        const validity = jwt.verify(token, secret, options);
        if (validity !== null) {
            return true;
        }
}

export const verifyHomestayToken = function (token) {
    try {
        const options = {
            algorithm: 'HS256',
            issuer: 'KNAP',
            audience: 'HOMESTAY'
        }
        const validity = jwt.verify(token, secret, options);
        if (validity !== null) {
            return true;
        }
    } catch (err) {
        return err;
    }   
}