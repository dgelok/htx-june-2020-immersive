import React, { Component } from 'react'
import Hook from './Hook'
class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       count : 0,
       title: "Class Based Components",
       arr: [1,2,3,4,5,6,7],
       add: 0
    }
  }

  handleButton = () =>{
    this.setState({
      add: this.state.add + 10
    })
  }
  handleClick = () =>{

    this.setState({
      count: this.state.count + 1
    })
  }
  

  componentDidMount = async () => {

    try{
      let url = "https://randomuser.me/api";
      let response = await fetch(url);
      let result = await response.json();
      console.log(result.results)
      this.setState({
        picURL: result.results[0].picture.large
      })
    }
    catch {
      console.log("problem with the try/catch")
    }
    

  }
  
  render() {

    const {count, title, arr, add} = this.state
    return (
      <>
        <h1>{title}</h1>
        <img src={this.state.picURL} height="200px"/>
        {count}
        <br />
        {arr.map(ar=>ar*3)}
        <br />
        <button onClick={this.handleClick}>Click</button>
        <br />
        <br />
        <br />
        <button onClick={this.handleButton}>Add Me (class)!</button>
        {add}
        <Hook />
      </>
    )
  }
}

export default App
