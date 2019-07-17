import jwt from 'jsonwebtoken';
import TokenGenerator from '../utils/token.generator';
import config from '../../config/index';

const RefreshTokenGenerator = new TokenGenerator();

class TokenServerService {
    issueToken(payload) {
        const options = { expiresIn: 60 * 60 * 48 };

        return jwt.sign(
            payload,
            config.JWT_SECRET,
            options
        );
    }

    refreshToken() {
        return RefreshTokenGenerator.generate(100, { specialChars: false });
    }
}

export default TokenServerService;