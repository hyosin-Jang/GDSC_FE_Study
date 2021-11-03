const toDoForm=document.getElementById("todo-form");
const toDoInput=document.querySelector("#todo-form input");
const ToDoList=document.getElementById("todo-list");


const TODOS_KEY="todos";
const TODOS_DONE_KEY="todo_done";
let ToDos=[]; /*start with empty todo elements */
let ToDos_Done=[];

function saveToDos(){
  
  localStorage.setItem("TODOS_KEY",JSON.stringify(ToDos)); 
  /*save todo element in localstorage as text (formed like object)*/
}


function deleteTodo(event){
  const delete_li=event.target.parentElement; /*get li component from event that user's delete click*/
  delete_li.remove();
  ToDos=ToDos.filter(ToDo=>ToDo.id!=parseInt(delete_li.id));
  saveToDos();
  
}

function getChecked(check_li){
  const yet_checked=document.getElementById(check_li);
  yet_checked.classList.add("check")
}

function checkTodo(event){
  const check_li=event.target.parentElement;
  check_li.classList.add("check");
  ToDos_Done.push(check_li.id);
  localStorage.setItem("TODOS_DONE_KEY",JSON.stringify(ToDos_Done)); 


}

function paintToDo(newTodoObj){
 const todo_li=document.createElement("li"); /*create li HTML tag*/
 todo_li.id=newTodoObj.id;/* li tag attribution id is same with todo id*/
 const todo_check=document.createElement("button"); /*create button HTML tag*/
 todo_check.innerText="💙";
 todo_check.addEventListener("click",checkTodo);
 const todo_span=document.createElement("span"); /*create span HTML tag */
 todo_span.innerText=newTodoObj.text; /*show newTodo value in span*/

 const todo_delete=document.createElement("button"); /*create button HTML tag*/
 todo_delete.innerText="➖";
 todo_delete.addEventListener("click",deleteTodo);

 todo_li.appendChild(todo_check).classList.add("todo_check");/*make check button tag go inside of li tag*/
 todo_li.appendChild(todo_span).classList.add("todo_text"); ; /*make span tag go inside of li tag*/
 todo_li.appendChild(todo_delete).classList.add("todo_delete"); /*make delete button tag go inside of li tag*/
 
 ToDoList.appendChild(todo_li);

}


function handleTodoSubmit(event){
  event.preventDefault();
  const newTodo=toDoInput.value; /* get input value*/
  toDoInput.value=""; /*make input form empty after submit*/
  const newTodoObj={ /*create todo obj {id : todo}*/
    text:newTodo,
    id:Date.now()
  }
  ToDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit",handleTodoSubmit);

/*load todo element*/
const savedToDos=localStorage.getItem("TODOS_KEY");
const doneToDos=localStorage.getItem("TODOS_DONE_KEY");

if (savedToDos!=null){ /*if todo already exist, before you enter*/
  const parsedToDos=JSON.parse(savedToDos);
  ToDos=parsedToDos; /*get already entered todo element*/
  parsedToDos.forEach(paintToDo); /*display*/
}

if (doneToDos!=null){ /*if todo already exist, before you enter*/
  const parsed_doneToDos=JSON.parse(doneToDos);
  ToDos_Done=parsed_doneToDos; /*get already entered todo element*/
  parsed_doneToDos.forEach(getChecked)}