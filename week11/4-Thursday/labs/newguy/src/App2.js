import React, { Component } from 'react'

class App extends Component {
  render() {

    let people = ['Dan', 'Michael', 'RJ', 'Cainan', 'Micah', 'Woody', 'Jeremy', 'Chris']
    return (
      <>
        {
          people.map((person, index) =>{
            return <li>{person}</li>
          })

        }
      </>
    )
  }
}

export default App
