import passport from 'passport';
import async from 'async';
import url from '../../../utils/current.urls';
import Response from '../../../utils/responses';
import config from '../../../../config/index';
import TokenServer from './user.token.service';

import db from '../../../utils/connect';
import sqlQuery from '../../../queries/users/users.auth';


const Token = new TokenServer();
let ResponseHandler = new Response(config.DOMAIN);
exports.signin = (req, res, next) => {}

exports.signout = (req, res) => {};