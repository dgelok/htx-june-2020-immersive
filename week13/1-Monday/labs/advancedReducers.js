// let state = {

//     student:  {
//         name: "Dan",
//         city: "Houston"
//     },
//     campus: {
//         school: {
//             name: "DigitalCrafts",
//             info: {
//                 city: "Houston",
//                 state: "Texas",
//                 type: "Bootcamp"
//             }
//         }
//     }
// }

// let newState = {
//     ...state,
//     campus: {
//         ...state.campus,
//         school: {
//             ...state.campus.school,
//             info: {
//                 ...state.campus.school.info,
//                 city: "Atlanta",
//                 state: "Georgia"
//             }
//         }
//     }
// }
// console.log(state.campus.school.info, newState.campus.school.info)


// let state = {
//     houses: {
//         gryffindor: {
//             points: 15
//         },
//         ravenclaw: {
//             points: 18
//         },
//         hufflepuff: {
//             points: 7
//         },
//         slytherin: {
//             points: 5
//         }
//     }
// }

// let key = "ravenclaw"
// let newState = {
//     ...state,
//     houses: {
//         ...state.houses,
//         [key]: {
//             ...state.houses[key],
//             points: state.houses[key].points + 3
//         }
//     }
// }
// console.log(state.houses.ravenclaw, newState.houses.ravenclaw)


// let state = [1,2,3];
// let newState = [...state, 4, 5]

// console.log(state, newState)

// let state = [1, 2, "X", 4];

// let newState = state.map(n =>{
//     if (n !== "X") {
//         return n;
//     } else {
//         return 3
//     }
// })

// console.log(newState)

// let state = [1,2, "X", 4];

// let newArr = state.filter(n =>{
//     return n !== "X"
// })

// console.log(newArr)

