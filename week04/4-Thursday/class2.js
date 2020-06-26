// var arr = [10,22,33,44,50000]

// arr.forEach(function (arrVal, index){
//     console.log(index, arrVal)
// })


var names = ["dan", "michael", "micah", "chris", "cainan", "jeremy", "woody", "RJ"]

// var newArray = arr.map(function(arrValue){

//     return arrVal
// })

// console.log(newArray)

var greetingsArr = names.map(function(name){
    return `Hello ${name}, how are you?`
})

console.log(greetingsArr)