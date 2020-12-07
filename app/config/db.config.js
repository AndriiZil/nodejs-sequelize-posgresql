const { error } = require('dotenv').config();

if (error) {
    throw new Error('".env" file should be provided.');
}

const { PASSWORD, DB, PG_USER, HOST } = process.env;

module.exports = {
    HOST: HOST,
    USER: PG_USER,
    PASSWORD: PASSWORD,
    DB: DB,
    dialect: 'postgres',
    pool: {
        max: 5, // maximum number of connection in pool
        min: 0, // minimum number of connection in pool
        acquire: 30000, // maximum time, in milliseconds, that pool will try to get connection before throwing error
        idle: 10000 // maximum time, in milliseconds, that a connection can be idle before being released
    }
};
