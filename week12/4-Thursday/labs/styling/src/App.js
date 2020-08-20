import React from 'react'
import {Div, StyledButton} from "./components/styles.js"


const App = () => {
  return (
    <>
      <p style={styles.myDivStyle}>This is an inline style</p>
      <p style={styles.newStyle}>This is an inline style</p>
      <StyledButton>Hello there</StyledButton>
    </>
  )
}

const styles = {
  myDivStyle: {
    backgroundColor: 'blue',
    fontSize: '50px',
  },
  newStyle: {
    backgroundColor: 'pink',
    fontSize: '30px',
  }
}

export default App
