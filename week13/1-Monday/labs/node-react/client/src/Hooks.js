import React from 'react'
import {useState, useEffect} from 'react'


const Hooks = () => {

  const [data, setData] = useState([]);

  useEffect(()=>{
    
    try{
      fetch('./api')
      .then(result => result.json())
      .then(serverData =>{
        setData(serverData)
      })
    }
    catch{
      console.log('fetch failed')
    }
  
  }, []);

  return (
    <>
      <h1>Hooks Component</h1>
      {data.map(d =>{
        return <div>{d.username}</div>
      })}
    </>
  )
}

export default Hooks
