const express = require('express')
const app = express()
const PORT = 3000

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(express.static('public'))

app.use(require('./routes/index'))

app.get('/aboutus', (req, res)=>{
    res.send("about us page")
})
app.get('/FAQ', (req, res)=>{
    res.send("FAQ page")
})
app.get('*', (req, res)=>{
    res.send("Catchall page")
})


app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
})

