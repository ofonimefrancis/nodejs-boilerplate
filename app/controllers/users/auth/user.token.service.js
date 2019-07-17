import moment from 'moment';
import crypto from 'crypto';
import bcrypt from 'bcryptjs';
import Q from 'q';
import db from '../../../utils/connect';
import config from '../../../../config';
import sqlQuery from '../../../queries/users/users.auth';
import TokenServerService from '../../../services/tokenServerService';


const TokenService = new TokenServerService();

class Token {
  generateAccessToken(user) {
    return TokenService.issueToken(user);
  }

  getUserDetails(user_id) {
    const deferred = Q.defer();

    db.oneOrNone(sqlQuery.getUserById, user_id)
      .then((result) => {

        logger.info('Get-User-Details-Successful ', { serviceName: config.serviceName, routeName: 'Get user' });
        deferred.resolve(result);
      })
      .catch((error) => {
        console.log(error)
        logger.error("Get-User-Details-Error " + error, { serviceName: config.serviceName, routeName: 'Reset Password' });
        deferred.reject(error);
      });
    return deferred.promise;
  }

  checkIfUserExists(email) {
    const deferred = Q.defer();

    db.one(sqlQuery.getUserByEmailSql, email)
      .then((result) => {
        deferred.resolve(result);
      })
      .catch((error) => {
        logger.error("Check-If-User-Exists " + error, { serviceName: config.serviceName, routeName: 'Reset Password' });
        deferred.reject(error);
      })
    return deferred.promise;
  }

  generatePasswordSalt(new_password) {
    let salt = bcrypt.genSaltSync(10);
    let hashed_password = crypto.pbkdf2Sync(new_password, salt, 10000, 40, 'sha512').toString('base64');
    return { salt, hashed_password: hashed_password }
  }
}

export default Token;