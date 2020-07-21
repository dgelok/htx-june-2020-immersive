
const express = require('express');
const router = express.Router();
const dataFile = require('../data/data.json')

// displays feedback form from feedback.ejs

router.get('/feedback', (req, res)=>{
    
    // make sure you send the data needed to render
    // maxlist (header)
    // pageTitle (head)
    res.render('feedback.ejs', {
        maxList: dataFile.speakers,
        pageTitle: "Feedback Form",
        pageID: "feedback",
        artwork: []
    })
})


module.exports = router