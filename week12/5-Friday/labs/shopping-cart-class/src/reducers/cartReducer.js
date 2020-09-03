import { v1 as uuidv1} from 'uuid'

const initialState = {
    totalCost: 2,
    cart: [
        {
            id: uuidv1(),
            productName: 'orange',
            price: 2
        }
    ]
}

let convert = (x) =>{
    return Number.parseFloat(x).toFixed(2)
}
const cartReducer = (state=initialState, action) => {

    switch (action.type) {
        case "ADD":
            let cost = state.totalCost + parseFloat(action.product.price);
            let newcost = convert(cost);
            console.log(newcost)
            return {
                ...state,
                totalCost: newcost,
                cart: state.cart.concat(action.product)
            }
        case "DELETE":

            let newCart = state.cart.filter(p => {
                return (p.id !== action.product.id)
            })
            return {
                ...state,
                totalCost: state.totalCost - parseFloat(action.product.price),
                cart: newCart
            }
        default :
            return state;
    
    }
}

export default cartReducer