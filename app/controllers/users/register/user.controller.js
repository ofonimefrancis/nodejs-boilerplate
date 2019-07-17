import Q from 'q';
import _ from 'lodash';
import crypto from 'crypto';
import moment from 'moment';
import bcryptjs from 'bcryptjs';
import db from '../../../utils/connect';
import config from '../../../../config';
import sqlQuery from '../../../queries/users/register';

class User {
    addNewUser(data) {

        let deferred = Q.defer();
        //TODO: Add logic here
        return deferred.promise;
    }

    checkUserExists(email) {
        let deferred = Q.defer();
        //TODO: Add logic here
        return deferred.promise;
    }

    updateUser(data) {
        let deferred = Q.defer();
        //TODO: Add logic here
        return deferred.promise;
    }
    saltPassword(password, access_key) {
        let salt = bcryptjs.genSaltSync(10);
        let hashedPassword = crypto.pbkdf2Sync(password, salt, 10000, 40, 'sha512').toString('base64');
        let hashedAccess = crypto.pbkdf2Sync(access_key, salt, 10000, 40, 'sha512').toString('base64');
        return {
            salt,
            hashedPassword,
            hashedAccess
        };
    }
}

export default User;