// display dishes

const express = require('express');
const router = express.Router();
const db = require('../models/database') // db instance 

// display all the dishes
// go to db and make a query

router.get('/dishes', (req, res)=>{
    

    db.query(`SELECT * FROM dishes`)
    .then((results)=>{

        //pass results (array of objects to ejs file)
        res.render('dishes', {
            dishes: results
        })
    })
    .catch((err)=>{
        res.send(err)
    })
});



module.exports = router