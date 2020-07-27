// promise library we'll pass to pg-promise
const promise = require('bluebird');
let initOptions = {
    promiseLib: promise
}

let config = {
    host: 'localhost',
    port: 5432,
    database: 'cohort2020v1',
    user: 'postgres'
}

let pgp = require('pg-promise')(initOptions);

// db object - allows us to perform CRUD ops on database
const db = pgp(config);

//db objects - methods

// db.none(`INSERT INTO students VALUES (DEFAULT, 'Dan', 'Gelok';`)
// .then(()=>{
//     console.log('record was inserted')
// })

// db.query('SELECT studentname FROM students')
// .then((result)=>{
//     // results = array of objects, each one of which would be a row
//     console.log(result)

//     // result.forEach(student =>{
//     //     console.log(student.names)
//     // })
// })

// db.result(`INSERT INTO students (VALUES (DEFAULT, 'John', 'john@me.com', 'johnk', 10, 'M', '2020-07-23', 'TRUE')`)
// .then((response)=>{
//     console.log(response);
// })
// .catch((err)=>{
//     console.log(err);
// })

// db.none("INSERT INTO users (email, isActive) VALUES ($1, $2);", [
//     "john@email.com",
//     true,
//   ]);

pgp.end() 