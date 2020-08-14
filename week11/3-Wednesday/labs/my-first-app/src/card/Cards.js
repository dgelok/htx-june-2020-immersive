import React, { Component } from 'react'
import CardStyle from './CardStyle'
import {Row} from 'react-bootstrap'
import data from './cardData'

class Card extends Component {
  render() {

    console.log(data)
    
    let cardsArr = data.map(card =>{
      return <CardStyle buttontext={card.buttonText} title={card.title} text={card.text}/>
    })
    
    return (
      <>
        <Row >
            
            {cardsArr}
            
        </Row>
      </>
    )
  }
}

export default Card
