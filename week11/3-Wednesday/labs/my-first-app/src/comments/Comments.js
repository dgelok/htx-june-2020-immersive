import React, { Component } from 'react'
import CommentStyle from './CommentStyle'
import data from './commentdata'
import { Row } from 'react-bootstrap'

class Comments extends Component {
  render() {

    let commentsData = data.map(comment =>{
        return <CommentStyle name={comment.name} text={comment.description} img={comment.img}/>
    })
    return (
      <>
        
            {commentsData}
        
      </>
    )
  }
}

export default Comments
