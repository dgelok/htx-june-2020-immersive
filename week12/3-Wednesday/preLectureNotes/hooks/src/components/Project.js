import React, {useState, useEffect} from 'react'
import ProjectItem from './ProjectItem'


const Project = (props) => {
  return (
    <>
      <h3>Project </h3>
       
      {props.projects.map(project=>{
          return <ProjectItem key={project.id} project={project} delete={props.delete}/>
      })}
     
     

    </>
  )
}

export default Project
