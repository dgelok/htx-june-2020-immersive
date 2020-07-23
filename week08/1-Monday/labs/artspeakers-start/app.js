const express = require('express');
const app = express();

// link to public
app.use(express.static('public'))

//link to views folder
app.set('view engine', 'ejs')
app.set('views', 'views')

// create routes
app.use(require('./routes/index'))
app.use(require('./routes/speakers'))




app.listen(3000, ()=>{
    console.log("listening on port 3000")
})