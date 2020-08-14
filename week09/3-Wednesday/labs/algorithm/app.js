const pbkdf2 = require("pbkdf2");
const crypto = require('crypto');

let password = "password123";

// password + salt => crypto algorithm => store in DB

let salt = crypto.randomBytes(20).toString('hex')

// console.log(salt)

// hash password + salt

let key = pbkdf2.pbkdf2Sync(password, salt, 3600, 256, 'sha256')

let hash = key.toString('hex');

// console.log(hash)

let stored_Pass = `pbkdf2_sha256$3600$${salt}$${hash}`

///////////////////
// Logging back in

let pass_parts = stored_Pass.split('$');

// console.log(pass_parts);
let newPassword = "password123";
let keyNewLogin = pbkdf2.pbkdf2Sync(
    newPassword, 
    pass_parts[2],
    parseInt(pass_parts[1]),
    256,
    'sha256'
)

// console.log(keyNewLogin);

let hashNewLogin = keyNewLogin.toString('hex');
// console.log(hashNewLogin)

if (hashNewLogin == pass_parts[3]) {
    console.log("Passwords Match!")
} else {
    console.log("It didn't match")
}