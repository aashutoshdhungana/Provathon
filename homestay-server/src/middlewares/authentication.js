import { verifyToken} from "../service/authService";
import { GeneralError } from "../helpers/GeneralError";
export const authenticate = function (req, res, next) {
    try {
        const bearerHeader = req.headers['authorization'];
        if(typeof bearerHeader === 'undefined') {
            throw new GeneralError('Authorization not supplied', 401);
        }
        
        const token = bearerHeader.split(' ')[1];
        if (!verifyToken(token)) {
            throw new GeneralError('Not Authorized', 401);
        }
    } catch (err) {
        next(err);
    }
}
