const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


var result = ages.some(function(arrVal){
    return arrVal < 60
})

console.log(result)


//filter out all ages > 35
// var youngAges = ages.filter(function(age){
//     return age < 35
// })
// console.log(youngAges)

//filter out all even numbers

// var ods = ages.filter(age => age%2==0)

// console.log(ods)
// var oddsOnly = ages.filter(function(age){
//     return (age % 2) != 0
// })
// console.log(oddsOnly)


// companies.forEach(function(arrValue){
//     console.log(arrValue)
// })

// for (var i = 0; i < companies.length; i++) {
//     console.log(companies[i])
// }

// var newCompanies = companies.map(function(arrVal){
//     arrVal.end = 2020;
//     return arrVal
// })
// console.log(newCompanies)

// companies.forEach(function(myel){
//     myel.end = 2020
//     // console.log(myel)
// })
// console.log(companies)

// var newAges = ages.map(function(arrayVal){
//     return arrayVal += 5

// })
// console.log(newAges)