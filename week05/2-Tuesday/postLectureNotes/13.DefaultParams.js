/*

Check the presence of the function parameters 

Throw Error when function square() is called without arguments.

Create new function and use it as a default parameter. 

*/

// var missingArg = () => {
//     throw new Error('Function square requires an argument')
// }
// var square = ( a = missingArg() ) => {
//     console.log(a * a);
//     return a*a;
// }

// square(10)
// // 100 

// square();
//BEFORE: NaN
//AFTER: Uncaught Error: Function square requrires an agrument

var missingArg = ()=>{
    throw new Error('Function square requires an argument')
}
var square = (a = missingArg()) => {
    console.log(a * a);
    return a * a;
}
square()
// 100 
// console.log(square(9));