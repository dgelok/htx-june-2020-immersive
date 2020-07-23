

const express = require('express');
const router = express.Router()
const dataFile = require('../data/data.json')

router.get('/', (req, res)=>{

    // code
    let pageSpeakers = dataFile.speakers;
    let pagePhotos = [];

    pageSpeakers.forEach((speaker) => {
        pagePhotos = pagePhotos.concat(speaker.artwork)
    })

    console.log(pagePhotos)

    res.render('index', {
        pageTitle : "Art Speakers",
        artwork : pagePhotos,
        pageID: 'home',
        maxlist: pageSpeakers
    })
})


module.exports = router

