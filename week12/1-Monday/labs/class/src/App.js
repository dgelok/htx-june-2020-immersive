import React, { Component } from 'react';
import Loading from './loading';
import Child from './Child';


class App extends Component {
  
  constructor(props) {
    console.log("this is the constructor")
    super(props)
  
    this.state = {
      isLoaded: false,
      sendingChildData: 4,
      loadChild: true
    }
  }
  
  componentWillMount = () => {
    console.log("this is the componentWillMount")
  }
  

  componentDidMount = () => {
    console.log("this is the componentDidMount");

    // pretend API call 
    setTimeout(()=>{

      this.setState({
        isLoaded: true,
        sendingChildData: 2
      })
    }, 3000);


    
  }
  
  handleClick = () =>{
    
    this.setState({
      loadChild: !this.state.loadChild
    })
  }
  
  render() {
    console.log("this is the render")
    if (!this.state.isLoaded) {
      return <Loading />
    }
    else {
      return (
        <>
          Home Page

          {/* <Child data={4}/> */}
          {this.state.loadChild ? <Child data={4}/> : null}

          <br />
          <br />
          <button onClick={this.handleClick}>Click</button>
        </>
      )
    }
    
  }
}

export default App
