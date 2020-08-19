import React from 'react'
import ProjectItem from "./ProjectItem"

// Show a list of project items
const Project = (props) => {

  let projectsArr = props.projects.map(project =>{
    return <ProjectItem project={project} onDelete={props.onDelete}/>
  })
  return (
    <>
      Projectsc
      {projectsArr}
    </>
  )
}

export default Project
