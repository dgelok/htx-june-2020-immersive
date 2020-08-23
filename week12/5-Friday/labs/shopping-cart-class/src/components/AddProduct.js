import React from 'react'
import { Row } from 'react-bootstrap'
// import {useDispatch} from 'react-redux'
// import {addProduct} from '../actions/cartActions'
// import { v1 as uuidv1} from 'uuid'
import ProductCard from './ProductCard'
const dataFile = require('../data/data.json') 
let products = dataFile.products

const AddProduct = () => {

    // const dispatch = useDispatch();

    // let handleSubmit = (e) =>{
    //     e.preventDefault();
    //     let product = {
    //         id: uuidv1(),
    //         productName: e.target.name.value,
    //         price: e.target.price.value,
    //     }
    //     dispatch(addProduct(product))
    // }

    let productCards = products.map((p, index) =>{
        return <ProductCard key={index} product={p} />
    })

  return (
    <>

        <Row>
            {productCards}
        </Row>
        {/* old form */}
      {/* <form onSubmit={handleSubmit}>
        <input id="name" defaultValue="Product Name" type='text'></input>
        <input id="price" defaultValue="Price" type='text'></input>
        <input type="submit"></input>

      </form> */}
    </>
  )
}

export default AddProduct
