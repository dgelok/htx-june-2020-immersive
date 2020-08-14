const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const session = require('express-session');

app.use(session({
    secret: 'my dog likes chicken',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false,
        maxAge: 14*24*60*60*1000
    }
}));

app.get('/', (req, res)=>{

    let name = "veronica"
    req.session.someAttribute = "Here it is"
    req.session.name = "DANIEL"
    res.send("Hello World")
})

app.get('/about', (req, res)=>{

    let val = req.session.name
    res.send(`About Us${val}`)
})

app.listen(3000, ()=>{
    console.log('listening on port 3000')
});