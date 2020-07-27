// display form for us to enter in a new dish

const express = require('express');
const router = express.Router();
const db = require('../models/database')
const bodyParser = require('body-parser')

router.use(bodyParser.urlencoded({extended: false}));

// display our form
router.get('/newdish', (req, res)=>{
    
    db.query(`SELECT * FROM categories`)
    .then(results=>{

        res.render('newdish', {
            categories: results
        })
    })
    .catch(err=>{
        res.send(err);
    })
});


// grab form info from header of HTMl file, enter into database
router.post('/newdish', (req, res)=>{

    console.log(req.body)
    let name = req.body.title;
    let category = parseInt(req.body.category);
    let foodDescription = req.body.description;
    let price = parseInt(req.body.price);
    let imageURL = req.body.imageURL;

    // take form data 
    // insert record inside database

    db.none(`INSERT INTO dishes VALUES (DEFAULT, $1, $2, $3, $4, $5)`, [
        name,
        category,
        foodDescription,
        price,
        imageURL
    ])
    .then(()=>{
        res.redirect('/dishes')
    })
    .catch((err)=>{
        console.log(err)
    })
    // res.send('post')
})

module.exports = router