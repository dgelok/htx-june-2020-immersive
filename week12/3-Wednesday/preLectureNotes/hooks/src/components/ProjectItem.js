import React, {useState, useEffect} from 'react'

const ProjectItem = (props) => {
  return (
    <>
      {props.project.title} {props.project.category}
      <a href="#" onClick={()=>props.delete(props.project.id)}>X</a> <br />
    </>
  )
}

export default ProjectItem
