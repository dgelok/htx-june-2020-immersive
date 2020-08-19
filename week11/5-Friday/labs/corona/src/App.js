import React, { Component } from 'react'
import MyChart from './MyChart'

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
    
    this.setState({
      states : results
    })

  }
  
  handleChange = (e) => {
    this.setState({
      searchTerms : e.target.value
    })
  }

  render() {

    let {states, searchTerms} = {...this.state}

    let filteredList = states.filter(state =>{
      return state.state.toLowerCase().includes(searchTerms.toLowerCase())
    })

    let stateInfo = filteredList.map((state, index) =>{
      return <div key={index}>
        <h1>{state.state}</h1>
        <h4>Coronavirus Cases: {state.cases}</h4>
        <p>Active Cases: {state.active}</p>
        <p>Deaths: {state.deaths}</p>
        <p>Deaths per Million: {state.deathsPerOneMillion}</p>
      </div>
    })

    return (
      <>
        <input type="text" onChange={this.handleChange}/> <br />
        <MyChart />
        {/* {searchTerms} */}
        {stateInfo}
      </>
    )
  }
}

export default App
