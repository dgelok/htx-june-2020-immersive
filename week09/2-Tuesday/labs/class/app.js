const express = require('express');
const app = express();
const PORT = 3000;
const db = require('./models');
const { sequelize } = require('./models');


app.use(express.static('public'));
app.set('view engine', 'ejs');



db.player.findAll({
    include : [{model: db.team,
            where: {name: 'Texans'
        }}]})
.then(results =>{
    results.forEach(player=>{
        console.log(`${player.firstname} ${player.lastname} ${player.team.name}`);
    })
})

// db.user.findAll()
// .then(results =>{
//     results.forEach(record=>{
//         console.log(`${record.firstname} ${record.lastname}`)
//     })
// })

// db.user.findByPk(5)
// .then(user =>{
//     console.log(user)
// })

// db.user.findAll({where: {createdAt: '2020-07-28T18:34:43.208Z'}})
// .then(results=>{
//     results.forEach(record=>{
//         console.log(record.firstname, record.lastname)
//     })
// })

// db.sequelize.query('SELECT * FROM users', {type: sequelize.QueryTypes.SELECT})
// .then(results =>{
//     console.log(results)
// })

// db.user.update({
//     email:"BBEEEEFFFF@BEEFFEY.fjj"
// },
// {
//     where: {
//         firstname: 'John'
//     }
// })
// .then(result =>{
//     console.log(result)
// })

// db.user.destroy({where: {id:2}})
// .then(rowDeleted =>{
//     console.log(rowDeleted)
// })
// db.user.destroy({where: {firstname: "Dan"}})
// .then(rowDeleted =>{
//     console.log(rowDeleted)
// })

// db.team.create(
//     {
//         name: 'Texans',
//         location: 'Texas'
//     }
// )
// db.team.create(
//     {
//         name: '49ers',
//         location: 'San Francisco'
//     }
// )
// db.team.create(
//     {
//         name: 'Bears',
//         location: 'Chicago'
//     }
// )

// db.player.create(
//     {
//         firstname: 'JJ',
//         lastname: 'Watt',
//         age: '30',
//         teamID: 1
//     }
// )
// db.player.create(
//     {
//         firstname: 'DeShaun',
//         lastname: 'Watson',
//         age: '23',
//         teamID: 1
//     }
// )

// db.player.create(
//     {
//         firstname: 'Dak',
//         lastname: 'Prescott',
//         age: '25',
//         teamID: 2
//     }
// )

// db.player.create(
//     {
//         firstname: 'Mitch',
//         lastname: 'Trabiski',
//         age: '26',
//         teamID: 2
//     })
// db.player.create(
//     {
//         firstname: 'Whitney',
//         lastname: 'Mercilus',
//         age: '26',
//         teamID: 3
//     },
// )




// db.user.create({
//     firstname: "Dan",
//     lastname: "Gelok",
//     email: "dgelok@protonmail.com"
// })

// db.user.create({
//     firstname: "Cainan",
//     lastname: "Barboza",
//     email: "Cainan@protonmail.com"
// })

// db.user.create({
//     firstname: "Michael",
//     lastname: "Cortez",
//     email: "Michael@protonmail.com"
// })


// app.listen(PORT, ()=>{
//     console.log(`Listening on port ${PORT}`);
// })