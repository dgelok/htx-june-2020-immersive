import React, { Component } from 'react'

class ChildList extends Component {
    
  render() {
      
    return (
      <>
        Child List <br />

        {this.props.num.map(name =>{

            return <h2>{name}</h2>
        })}
      </>
    )
  }         
}

export default ChildList
