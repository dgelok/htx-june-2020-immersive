const express = require('express');
const app = express();
const jwt = require('jwt-simple'); // creates our json web token (j.w.t.)


app.use(require('./routes/authentication'))


// ===== Don't need this because it'll be handled via react =====
// app.get('/', (req,res)=>{
//     res.send("Home page")
// })

app.listen(3001, ()=>{
    console.log("listening on 3001. SERVER ON THIS ONE")
})




// user info from login form
// let userInfo = {
//     id: "12345",
//     username: "Dan",
//     email: "DontPutEmailsInHere@email.com"
// }
// let secret = "as;lkdjfalsdkjf"

// let token = (user) =>{
//     let timestamp = new Date().getTime();
//     return jwt.encode({
//         sub: user.id,
//         iat: timestamp,
//         name: user.username,
//         greet: "hi mom"
//     }, secret)
// }

// let tokenID = token(userInfo)

// console.log(jwt.decode(tokenID, secret))