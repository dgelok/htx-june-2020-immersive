
const promise = require('bluebird'); // promise library 

let initOptions = {
    promiseLib: promise
}

let config = {
    host: 'localhost',
    port: 5432,
    database: 'res2020',
    user: 'postgres'
}

let pgp = require('pg-promise')(initOptions);

let db = pgp(config)

module.exports = db;