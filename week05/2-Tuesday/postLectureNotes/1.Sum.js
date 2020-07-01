// Create a function sum() that will sum all arguments passed to it.
// Quantity of the arguments is unknown.

let sum = (...args) => {
    sum = args.reduce((acc, elem) => acc+=elem)
    return sum;
    // for (let arg of args) {
    //     n += arg
    // }
}

console.log(sum(1,3));
console.log(sum(10, 20, 5));

