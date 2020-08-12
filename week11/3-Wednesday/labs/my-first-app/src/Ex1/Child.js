import React from 'react'
import Grandchild from './Grandchild.js';

const Child = (props) => {
  return (
    <>
      <h2>I'm a Child! my name is {props.name}</h2>
      <Grandchild name="Daniel"/>
    </>
  )
}

export default Child
