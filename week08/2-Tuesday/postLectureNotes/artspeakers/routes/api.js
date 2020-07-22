const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
const fs = require('fs')

// read feedback.json
const feedbackData = require('../data/feedback.json') // this is an array

// send data back as JSON object to client
router.get('/api', (req, res)=>{

    res.json(feedbackData);

})

// write data to JSON file
// read submitted data off of the header file
// router.post()
// have to install body-parser to read data from the header
// body-parser puts body obj on req object

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));

router.post('/api', (req, res) => {
    
    console.log(req.body)

    feedbackData.unshift(req.body)
    let newdata = JSON.stringify(feedbackData)
    fs.writeFile('./data/feedback.json', newdata, 'utf-8', (err)=>{
        console.log(err)
    })
    res.json(feedbackData)

})


router.delete('/api/:ID', (req, res)=>{


    feedbackData.splice(req.params.ID, 1)
    // write file again (fs.writeFile)
    let newfile = JSON.stringify(feedbackData)
    fs.writeFile('./data/feedback.json', newfile, 'utf-8', (err)=>{
        console.log(err)
    })
    // resend json (res.json )
    res.json(feedbackData)

})

module.exports = router;