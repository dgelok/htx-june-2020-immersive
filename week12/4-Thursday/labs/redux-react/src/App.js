import React, { Component } from 'react'
// connect will connect to the provider, which connects to redux.
import { connect } from 'react-redux'
import increaseAction from './actions/increaseAction'
import decreaseAction from './actions/decreaseAction'

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       title: "Counter Reducer"
    }
  }
  
  render() {
    return (
      <>
        <h1>{this.state.title}</h1>

        <h1>{this.props.counter}</h1>

        <button onClick={this.props.onIncreaseClick}>Increase</button>
        <button onClick={this.props.onDecreaseClick}>Decrease</button>
      </>
    )
  }
}

// state is global
let mapStateToProps = (state) =>{

  // counter is local (props)
  return {
    counter: state.count
  }
}

let mapDispatchToProps = (dispatch) =>{
  return {
    onIncreaseClick : ()=>dispatch(increaseAction),
    onDecreaseClick : ()=>dispatch(decreaseAction)
  }
}


// connect is a H.O.C
// Connect takes a component and returns a new one that is connected to Redux.
export default connect(mapStateToProps, mapDispatchToProps)(App)
