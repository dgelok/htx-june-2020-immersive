import React from 'react'
import {useSelector} from 'react-redux'
import AddProduct from './AddProduct'
import DeleteProduct from './DeleteProduct'
import {Container} from 'react-bootstrap'

const Cart = () => {

    const products = useSelector(state => state.cart)
    const totalCost = useSelector(state => state.totalCost)
  

    
    return (
    <>
    <Container>
      <h1>Shopping Cart</h1>

      <h3>Total: ${totalCost}</h3>
      {products.map((p, index) =>{
          return <li key={index}>{p.productName} - ${p.price} - <DeleteProduct product={p}/></li>
      })}
      <br />
      <br />
      <AddProduct />
    </Container>
    </>
  )
}

export default Cart
