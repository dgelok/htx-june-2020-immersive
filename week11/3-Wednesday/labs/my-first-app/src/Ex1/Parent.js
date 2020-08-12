import React from 'react';
import Child from './Child.js'

const Parent = (props) => {
  return (
    <>
      <h1>I'm a parent! My name is {props.name}.</h1>
      <Child name="Kim"/>

    </>
  )
}

export default Parent
