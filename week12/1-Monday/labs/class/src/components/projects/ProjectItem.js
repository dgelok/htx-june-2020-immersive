import React from 'react'

// project title, plus delete button
const ProjectItem = (props) => {
  return (
    <>
      <div>
        <li>
          <span>{props.project.title}</span>

          {props.project.category}

          <a href="#" onClick={()=>props.onDelete(props.project.id)}>X</a>
        </li>
      </div>
    </>
  )
}

export default ProjectItem
