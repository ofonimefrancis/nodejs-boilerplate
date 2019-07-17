import jwt from 'jsonwebtoken';
import Response from '../utils/responses';
import config from '../../config/index'


let ResponseHandler = new Response(config.DOMAIN);

let checkToken = (req, res, next) => {
    let token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase

    if (token) {
        if (token.startsWith('Bearer ')) {
            token = token.slice(7, token.length);
        }
        jwt.verify(token, process.env.NODEJS_BOILERPLATE_SECRET, (err, decoded) => {
            if (err) {
                logger.error("Token is not valid ", err);
                return res.status(400).json(ResponseHandler.error(
                    null,
                    1017,
                    'token is invalid',
                    400,
                    req.method))
            } else {
                logger.info("[checkToken-Error] Token is valid and decoded ");
                req.decoded = decoded;
                next();
            }
        })
    } else {
        logger.error("[checkToken-Error] Token is not Supplied ");
        return res.status(400).json(ResponseHandler.error(
            null,
            1018,
            'token is not provided',
            400,
            req.method))
    }
};

export default checkToken;