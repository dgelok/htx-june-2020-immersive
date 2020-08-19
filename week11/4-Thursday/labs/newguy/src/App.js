import React, { Component } from 'react'

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      states : [],
      searchTerms : ""
    }
  }

  componentDidMount = async () => {
    let url = "https://corona.lmao.ninja/v2/states";
    let response = await fetch(url);
    let results = await response.json();
    

  }
  
  render() {
    return (
      <>
        nothing here
      </>
    )
  }
}

export default App
