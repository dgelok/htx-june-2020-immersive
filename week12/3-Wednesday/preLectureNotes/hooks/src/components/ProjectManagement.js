import React, {useState, useEffect} from 'react'
import AddProject from './AddProject'
import Project from './Project'
import {v1 as uuidv1} from 'uuid'

const ProjectManagement = () => {

    const [projects, setProjects] = useState([])

    let addProject = (project) =>{
        let newProjects = [...projects, project]
        setProjects(newProjects)
    }

    let deleteProject = (id) =>{
        let oldProjects = [...projects];
        let index = oldProjects.filter(p =>{
            return p.id == id
        });

        oldProjects.splice(index, 1);
        setProjects(oldProjects)
    }
    useEffect(() =>{
       let starterArr = [
        {
            id: uuidv1(),
            title: "Javascript",
            category: 'Front-End'
        },
        {
            id: uuidv1(),
            title: "Node",
            category: 'Back-End'
        },
        {
            id: uuidv1(),
            title: "React",
            category: 'Front-End'
        }
    ];
    setProjects(starterArr);
    console.log({projects})
    }, [])

    return (
        <>
        <h1>Project MANAGEMENT</h1>
        
        <AddProject addProject={addProject}/>
        <Project projects={projects} delete={deleteProject}/>
        </>
    )
}

export default ProjectManagement
