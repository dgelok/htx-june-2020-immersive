import React from 'react'
import {Card, Button} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import {addProduct} from '../actions/cartActions'


const ProductCard = ({ product }) => {

    const dispatch = useDispatch();

    let handleSubmit = (e) =>{
        e.preventDefault();
        let newProduct = {
            id: product.id,
            productName: product.name,
            price: product.price,
        }
        // console.log(newProduct)
        dispatch(addProduct(newProduct))
    }
  return (
    <>
        <div className="col-4 col-md-3 m-3" styles="height:200px">
            <Card style={{ width: '200px' }}>
                <Card.Img variant="top" src={product.imageURL} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">${product.price}</Card.Subtitle>
                    <Card.Text>
                    {product.description}
                    </Card.Text>
                    <Button variant="primary" onClick={handleSubmit}>Add to Cart</Button>
                </Card.Body>
            </Card>
        </div>
    </>
  )
}

export default ProductCard
