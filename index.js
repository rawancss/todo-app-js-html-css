const todolist = document.querySelector('.todoslist');
const addbtn = document.querySelector('#addbtn');
const todoinput = document.querySelector('#enter');

const todos = [
  
];

// display todo
function displaytodo(todos) {
    todolist.innerHTML = '';
    if (todos.length === 0) {
        console.log('no todos found');
    } else {
        for (let index = 0; index < todos.length; index++) {
            const todoitem = document.createElement("div");
            todoitem.classList.add('todo');

            // add checkbox
            const todocheckbox = document.createElement("input");
            todocheckbox.type = "checkbox";
            todoitem.appendChild(todocheckbox);

            // create and add description
            const tododescription = document.createElement("p");
            tododescription.textContent = todos[index].description;
            todoitem.appendChild(tododescription);

            // add delete button to todoitem
            const tododeletebutton = document.createElement("button");
            tododeletebutton.textContent = "delete";
            tododeletebutton.addEventListener('click', () => deletetodo(index))
            todoitem.appendChild(tododeletebutton);

            // add edit button to todoitem
            const todoeditbutton = document.createElement("button");
            todoeditbutton.textContent = "edit";
            todoitem.appendChild(todoeditbutton);



            // Update the todo counter
const counter = document.getElementById("counter");
counter.textContent = todos.length;
            todolist.appendChild(todoitem);
        }
    }
}

function addtodo() {
    const tododescription = todoinput.value.trim();
    const newtodo = {
        description: tododescription,
        completed: false
    }
    todos.push(newtodo);
    displaytodo(todos);
}

function updatetodo() {
    console.log('todo is update');
}

function deletetodo(index) {
    todos.splice(index, 1);
    displaytodo(todos);
}

addbtn.addEventListener("click", addtodo);

function download() {
    alert('download');
}

const downloadButton = document.getElementById("down");
downloadButton.addEventListener("click", download);


// display todo
function displaytodo() {
    todolist.innerHTML = '';
    if (todos.length === 0) {
        console.log('no todos found');
    } else {
        for (let index = 0; index < todos.length; index++) {
            const todoitem = document.createElement("div");
            todoitem.classList.add('todo');

            // add checkbox
            const todocheckbox = document.createElement("input");
            todocheckbox.type = "checkbox";
            todoitem.appendChild(todocheckbox);

            // create and add description
            const tododescription = document.createElement("p");
            tododescription.textContent = todos[index].description;
            todoitem.appendChild(tododescription);

            // add delete button to todoitem
            const tododeletebutton = document.createElement("button");
            tododeletebutton.textContent = "delete";
            tododeletebutton.addEventListener('click', () => deletetodo(index))
            todoitem.appendChild(tododeletebutton);

            // add edit button to todoitem
            const todoeditbutton = document.createElement("button");
            todoeditbutton.textContent = "edit";
            todoeditbutton.addEventListener('click', () => editTodo(index));
            todoitem.appendChild(todoeditbutton);

            todolist.appendChild(todoitem);
        }
    }
}

function addtodo() {
    const tododescription = todoinput.value.trim();
    const newtodo = {
        description: tododescription,
        completed: false
    }
    todos.push(newtodo);
    displaytodo();
}

function editTodo(index) {
    // Get the current description of the todo
    const currentDescription = todos[index].description;

    // Create an input field
    const todoinput = document.createElement("input");
    todoinput.type = "text";
    todoinput.value = currentDescription;

    // Create a save button
    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    saveButton.addEventListener('click', () => saveTodoDescription(index, todoinput.value));

    // Replace the description with the input field and save button
    const todoItem = todolist.children[index];
    const tododescription = todoItem.querySelector("p");
    tododescription.replaceWith(todoinput, saveButton);
}

function saveTodoDescription(index, newDescription) {
    todos[index].description = newDescription;
    displaytodo();
}

// Rest of your code...