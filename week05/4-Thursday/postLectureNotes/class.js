

// fetch('restaurant')
// .then((result) => result.json())
// .then((restaurantData)=>{

//     fetch()
//     .then()
//     .then()
// })

// let promise = new Promise((resolve, reject)=>{
//     if (false) {
//         setTimeout(() => {
//             console.log("success")
//             resolve("Successful completion")
//         }, 1000)
//     }
//     else {
//         reject("something went wrong")
//     }
// });


// promise.then((result) => {
    
//     console.log(result)
// })

// promise.catch((error) => {
//     console.log(error)
// })

let p1 = fetch("https://jsonplaceholder.typicode.com/photos")
let p2 = fetch("https://jsonplaceholder.typicode.com/todos")
Promise.all([p1, p2])
.then((resp)=> {

})