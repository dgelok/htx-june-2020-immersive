import React, { Component } from 'react';

class App extends Component {

  //instanace variables
    constructor() {
        
        super()
        // creating state

        this.state = {
          txt: "this is a text value",
          count: 0
        }

    }

    handleClick = () => {
      console.log("Button was clicked");
      console.log(`${Date.now()}`);
      // this.state.count = this.state.count + 1;

      this.setState({
        count: this.state.count + 1
      })

      console.log(this.state.count)
    }

  render() {
    return (
      <> 
          <h1>{this.state.txt}</h1>
          <br />

          <button onClick={this.handleClick}>Click Me {this.state.count}</button>
      </>
    )
  }
}

export default App
