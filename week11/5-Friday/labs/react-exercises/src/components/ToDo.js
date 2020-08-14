import React, { Component } from 'react'
import '../App.css'

class ToDo extends Component {

    constructor() {
        super();
        this.state = {
            todolist : [],
            newTask : ""
        }
    }

    updateNew = (e) =>{
        this.setState({
            newTask : e.target.value
        })
    }

    addButton = (e) =>{
        let newlist = this.state.todolist;
        newlist.push(this.state.newTask)
        console.log("Clicked the add button")
        this.setState({
            todolist : newlist,
            newTask : ""
        })
        console.log(this.state.todolist);
        let inputbox = document.getElementById("inputbox");
        inputbox.value = "";
        this.render();

    }

    delItem = (e) =>{
        let mynum = e.target.id;
        let delList = this.state.todolist;
        delList.splice(mynum,1)
        this.setState({
            todolist: delList
        });
        this.render();
    }




  render() {

    let n = this.state.todolist.map((item, index) =>{
        return <li key={index}>
            {item}
            <button id={index} onClick={this.delItem}></button>
        </li>
    })

    return (
      <>
        <div className="App">
            <div className="todo-form">
                <input id="inputbox" type="text" onChange={this.updateNew}/>
                <button onClick={this.addButton}>Add Task</button>
                <br />
                <ul>
                    {n}
                    
                </ul>
            </div>
        </div>
      </>
    )
  }
}

export default ToDo
