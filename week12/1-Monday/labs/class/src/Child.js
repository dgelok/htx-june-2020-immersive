
import React, { Component } from 'react'

class Child extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }

    // shouldComponentUpdate = (nextProps, nextState) => {
    //     // nextProps are receiving props
    //     console.log(`incoming prop is: ${nextProps.data} ${this.props.data}`)
    //     return (nextProps.data < 6)
    // }
        
    componentWillUnmount = () => {
      console.log('component will unmount')
    }
    
    render() {
        return (
        <>
          <h1>{this.props.data} </h1> 
        </>
        )
    }
}

export default Child
