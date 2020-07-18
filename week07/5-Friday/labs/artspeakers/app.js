const express = require('express');
const app = express();

// ejs
app.set('view engine', 'ejs')
app.set('views', 'views')

// public
app.use(express.static('public'))

// routes
app.use(require('./routes/index'))
app.use(require('./routes/speakers'))


app.listen(777, () => {
    console.log("listening on port 777")
})