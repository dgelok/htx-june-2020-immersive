// Create a function sum() that will sum all arguments passed to it.
// Quantity of the arguments is unknown.

<<<<<<< HEAD
let sum = (...args) => {
    sum = args.reduce((acc, elem) => acc+=elem)
    return sum;
    // for (let arg of args) {
    //     n += arg
    // }
=======

let sum = (...args)=>{
    let sum = 0;

    sum = args.reduce((acc, elem) => acc + elem, 0);
    return sum;
>>>>>>> 95d847ef6ce4cccb7a543d24562b54b7322dc952
}

console.log(sum(1,3));
console.log(sum(10, 20, 5));

