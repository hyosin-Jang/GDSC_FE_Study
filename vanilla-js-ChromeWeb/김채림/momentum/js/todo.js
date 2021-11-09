const todoForm=document.getElementById("todo-form");
const todoInput=todoForm.querySelector("input");
const todoList=document.getElementById("todo-list");
let toDos=[];
let TODOS_KEY="todos";

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event){
    const li=event.target.parentElement;//button의 부모는 span
    li.remove();
    toDos=toDos.filter(toDo=>toDo.id!==parseInt(li.id));
    saveToDos();
}
function changeTodo(event){
    const li=event.target.parentElement;
    li.classList.add("checked");
    
}

function paintToDo(newTodo){
    const li=document.createElement("li");// html에 li생성
    li.id=newTodo.id;
    const span=document.createElement("span");
    span.innerText=newTodo.text;
    const erasebutton=document.createElement("button");
    const donebutton=document.createElement("button");
    donebutton.innerText="✔";
    erasebutton.innerText="✖️";
    erasebutton.classList.add("toDoList_Erase");
    donebutton.classList.add("toDoList_Done");
    erasebutton.addEventListener("click",deleteTodo);
    donebutton.addEventListener("click", changeTodo);
    li.appendChild(span);
    li.appendChild(donebutton);
    li.appendChild(erasebutton);
    li.classList.add("toDoList_element");
    todoList.appendChild(li);
}
function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo=todoInput.value;
    console.log(todoInput.value="");
    const newTodoObj={
        text:newTodo,
        id:Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}
todoForm.addEventListener("submit", handleToDoSubmit);


const saveToDo=localStorage.getItem(TODOS_KEY);
if(saveToDo!==null){
    const parsedToDos=JSON.parse(saveToDo);
    toDos=parsedToDos;
    parsedToDos.forEach(paintToDo); 
}