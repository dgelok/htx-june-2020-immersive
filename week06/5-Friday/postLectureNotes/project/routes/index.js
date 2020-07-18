let express = require('express')
let router = express.Router();


router.get('/', (req, res)=>{
    // res.send(
    //     `<link rel="stylesheet" href="/styles.css"
    // <h1 class="highlight">Front Page</h1>
    // `)

    let pictures = [
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.wrs.com.sg%2Fcontent%2Fdam%2Fwrs%2Fsingapore-zoo%2Fanimals%2Fsignpost%2F1x1%2Fproboscis-monkey-1X1.jpg&f=1&nofb=1",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FRlZzEgmoNhw%2Fhqdefault.jpg&f=1&nofb=1",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.arstechnica.net%2Fwp-content%2Fuploads%2F2014%2F05%2FIMG_7969-Version-2.jpg&f=1&nofb=1",
    ]

    let names = [
        "woody",
        "RJ",
        "Chris",
        "Michael",
        "Micah",
        "Dan",
        "Cainan",
        "Jeremy"
    ]

    let cities = [
        "atlanta",
        "houston",
        "seattle",
        "miami",
        "las vegas"
    ]

    res.render('index', {
        firstName: "Dan",
        lastName: "Gelok",
        pic: pictures,
        name: names,
        cities: cities
    })
})

module.exports = router