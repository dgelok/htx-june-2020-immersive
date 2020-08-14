const express = require('express');
const router = express.Router();
const db = require('../models')
const bcrypt = require('bcryptjs')



router.get('/login', (req, res) => {
    res.render('login')
})

router.post('/login', async (req, res) => {

    try {
        let username = req.body.username;
        let password = req.body.password;

        let results = await db.users.findAll({where: {username: username}})

        // results is an array of objects from DB.
        if (results.length > 0) {

            bcrypt.compare(password, results[0].password, (err, response)=>{

                if (response) {
                    req.session.username = username;
                    req.session.role = 1       
                    res.redirect('/')
                } 
                else {
                    res.redirect('/error')
                }
            })
        }
    }
    catch{
        res.redirect('/error')
    }
})

module.exports = router;
