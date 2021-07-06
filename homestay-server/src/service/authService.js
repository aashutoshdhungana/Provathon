import jwt from 'jsonwebtoken';
const config = require('../settings');
const secret = config.secret;
export const generateToken = function (userId) {
    const options = {
        algorithm: 'HS256',
        expiresIn: "1d",
        issuer: 'KNAP'
    };
    const payload = {
        userId
    };

    const token = jwt.sign(payload, secret, options)
    return token;
}

export const verifyToken = function (token) {
    try {
        const options = {
            algorithm: 'HS256',
            issuer: 'KNAP'
        }
        const validity = jwt.verify(token, secret, options);
        if (validity !== null) {
            return true;
        }
    } catch (err) {
        return false;
    }
    
}