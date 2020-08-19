import React, {useState, useEffect} from 'react'

const Hook = () => {
  
    const [count, setCount] = useState(0)
    const [title, setTitle] = useState("Hooks")
    const [arr, setArr] = useState([1,2,3,4,5,6,7])
    const [add, setAdd] = useState(0)
    const [imageURL, setImageURL] = useState("")


    useEffect(()=>{
        fetch("https://randomuser.me/api")
        .then(response => response.json())
        .then(data =>{
            let picURL = data.results[0].picture.large;
            setImageURL(picURL);
        })
    }, [])
    

    return (
    <>
        <h1>{title}</h1>
      {count}
      <br />
      <img src={imageURL} height="200px"/>
      <br />
      {arr.map(a=>a*3)}
      <button onClick={()=>{setArr([...arr, 1])}}>Push to array!</button>
      <br />
      <button onClick={()=>{setCount(count + 1)}}>Click - Hooks</button>
    
        <br />
        <button onClick={()=>{setAdd(add + 10)}}>Add Me (hook)!</button>
        {add}
    </>
  )
}

export default Hook
