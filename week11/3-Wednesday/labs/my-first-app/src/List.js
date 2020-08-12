import React, { Component } from 'react'
import ChildList from './ChildList.js'

class List extends Component {
  
    render() {
        let myList = ["michael", "micah", "woody"]
    
        return (
        <>
            This is text from the parent class (List).
            <ChildList num={myList}/> 
        </>
        )
    }
}

export default List
