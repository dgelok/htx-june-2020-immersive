// ***Object Destructuring
/* 
Declare mult() function that will multiply values of the x,y,z 
fields of the passed object
*/
// var obj = {
//     x: 5,
//     y: 20,
//     z: 3
// }

// function mult (obj) {
//     var {x, y, z} = obj;
//     return x * y * z
// }

// console.log(mult(obj));
//300


/*
Create shortPerson() function that will destructure each person object.
Sample result:
{n: "Mike", c: "Spain", a: 23, p:100}

If input object doesn't have postsQuantitiy field it should get default value 0.
*/
function person (obj) {
    var {name: n, info: {}, postsQuantity} = obj;
    // var {c, a} = i;
    console.log(name, info, postsQuantity)
}

var person1 = {
    name: "Mike",
    info: {
        country: "Spain",
        age: 23
    },
    postsQuantity: 100
}

var person2 = {
    name: "Alice",
    info: {
        country: "Italy",
        age: 25
    }
}

// console.log(person(person1))
// console.log(person(person2))

person(person1)