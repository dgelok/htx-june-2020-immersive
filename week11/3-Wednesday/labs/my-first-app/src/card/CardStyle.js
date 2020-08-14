import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';

const CardStyle = (props) => {
  
    // let cardsTotal = props.data.map(card =>{

        

        // })
        return <Col md={4} >
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.text}
                </Card.Text>
                <Button variant="primary">{props.buttonTitle}</Button>
            </Card.Body>
        </Card>
    </Col>
}

export default CardStyle
