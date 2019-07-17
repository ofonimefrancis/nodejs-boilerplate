import bluebird from 'bluebird';

import config from '../../config';


const initOptions = {
    promiseLib: bluebird
};

const pgpromise = require('pg-promise')(initOptions);
const test_db_name = "nodejs-boilerplate";

const connectionString = (process.env.NODE_ENV === 'test') ? `postgres://localhost:5432/${test_db_name}` : config.DATABASE_URL;

const db = pgpromise(connectionString);

export default db;