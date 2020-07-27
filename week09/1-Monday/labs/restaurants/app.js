const express = require('express');
const app = express();


//views
app.set('view engine', 'ejs')

//public folder
app.use(express.static('public'));

//routes
app.use(require('./routes/dishes')); // list of menu items
app.use(require('./routes/newdish')); //form to enter new dish 

app.listen(3000, ()=>{
    console.log('listening on port 3000')
})