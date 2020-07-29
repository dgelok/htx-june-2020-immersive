
var addButton = document.getElementById('addButton');
let todos = document.getElementById('todoList');

(()=>{

    fetch('/api')
    .then(result => result.json())
    .then(data =>{
        let html = "";
        data.forEach(todo =>{
            html += createItemDom(todo.description, todo.id)
        })
        todos.innerHTML = html;
    })
    .catch(error =>{
        console.log(error)
    })
})()

addButton.addEventListener('click', (e)=>{

    fetch('/api', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            description: document.getElementById('itemInput').value
        })
    })
    .then(results => results.json())
    .then(data =>{
        // update DOM with all todos, incl. the new one
        let todos = document.getElementById('todoList')
        let html = "";
        data.forEach(todo =>{
            html += createItemDom(todo.description, todo.id)
        })

        todos.innerHTML = html; 
    })
})

//function to change the dom of the list of todo list
var createItemDom = (description, id) => {

    let listItem = `<li>
    <label>${description}</label>

        <button id="${id.toString()}" class="btn btn-success">Update</button>
        <button id="${id.toString()}" class="btn btn-danger">Delete</button>
    </li>`

    return listItem;
}