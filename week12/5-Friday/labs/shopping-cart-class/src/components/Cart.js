import React from 'react'
import {useSelector} from 'react-redux'
import AddProduct from './AddProduct'
import DeleteProduct from './DeleteProduct'


const Cart = () => {

    const products = useSelector(state => state.cart)
    const totalCost = useSelector(state => state.totalCost)
  

    
    return (
    <>
      <h1>Shopping Cart</h1>

      <h3>Total: ${totalCost}</h3>
      {products.map(p =>{
          return <li>{p.productName} - ${p.price} - <DeleteProduct product={p}/></li>
      })}
      <br />
      <br />
      <AddProduct />
    </>
  )
}

export default Cart
