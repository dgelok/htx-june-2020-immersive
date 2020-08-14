import React from 'react'

const Blogs = (props) => {
  return (
    <>
      Blogs
      <br /><br /><br />
      <h2>{props.match.params.blogsID}</h2>

      {props.location.pathname}
    </>
  )
}

export default Blogs
