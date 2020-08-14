import React from 'react'
import { Media } from 'react-bootstrap'

const CommentStyle = (props) => {
  return (
    <>
        <Media>
  <img
    width={64}
    height={64}
    className="mr-3"
    src={props.img}
    alt=""
  />
  <Media.Body>
    <h5>{props.name}</h5>
    <p>
      {props.text}
    </p>
  </Media.Body>
</Media>
    </>
  )
}

export default CommentStyle
