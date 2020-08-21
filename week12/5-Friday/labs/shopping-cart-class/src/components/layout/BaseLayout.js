import React from 'react'
import { Link } from 'react-router-dom'

const BaseLayout = (props) => {
  return (
    <>
      {props.children}
      <Link to="/" >Home</Link>
      <Link to="/cart" >Cart</Link>
    </>
  )
}

export default BaseLayout
