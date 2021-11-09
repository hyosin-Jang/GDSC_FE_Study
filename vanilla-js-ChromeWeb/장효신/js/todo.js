const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");
const percent = document.querySelector("#percent h2:first-child");
const percentTodo = document.querySelector("#percent h2:last-child");
const TODO_KEYS = "todos";
const CLICK = "click";

let toDos = [];

function deleteTodo(event) {
  const li = event.target.parentElement;

  if (li.classList.contains(CLICK)) {
    clickLength--;
  }
  li.remove();

  toDos = toDos.filter(item => item.id !== parseInt(li.id));
  saveToDos();

  allLength--;
  if (toDos.length === 0) {
    toDoList.classList.add("hidden");
  }
  paintPercent();
}

function checkTodo(event) {
  const li = event.target.parentElement;

  li.classList.toggle(CLICK);

  toDos.map(item => {
    if (item.id === parseInt(li.id)) {
      item.check = !item.check;
      if (item.check) {
        clickLength++;
      } else {
        clickLength--;
      }
    }
  });
  paintPercent();
  console.log(clickLength);
  saveToDos();
}

function paintPercent() {
  percent.innerText = `${clickLength}/${allLength}`;
  percentTodo.innerText = Math.round((clickLength / allLength) * 100) + "%";
  console.log(toDos.length);
  console.log(toDos);
  if (toDos.length === 0) {
    percent.innerText = "";
    percentTodo.innerText = "";
  }
}

let clickLength = 0;
let allLength = 0;

function paintToDo(newTodo) {
  allLength++;
  const li = document.createElement("li");
  li.id = newTodo.id;

  // 초기값 설정
  if (newTodo.check === true) {
    li.classList.toggle(CLICK);
    clickLength++;
  }
  const span = document.createElement("span");
  const deleteButton = document.createElement("button");
  const checkButton = document.createElement("button");

  checkButton.innerText = "✅";
  deleteButton.innerText = "❌";

  checkButton.addEventListener("click", checkTodo);
  deleteButton.addEventListener("click", deleteTodo);

  paintPercent();

  // 체크버튼 - 텍스트 - 삭제버튼 순서
  li.appendChild(checkButton);
  li.appendChild(span);
  li.appendChild(deleteButton);

  span.innerText = newTodo.text;
  toDoList.classList.remove("hidden");
  console.log("length", toDos.length);

  toDoList.appendChild(li);
}

function saveToDos() {
  // 배열 => 객체로 저장
  localStorage.setItem(TODO_KEYS, JSON.stringify(toDos));
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
    check: false
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedTodos = localStorage.getItem(TODO_KEYS);

// savedTodos !== null
if (savedTodos) {
  const parsedTodos = JSON.parse(savedTodos);

  // 초기 길이 설정
  toDos = parsedTodos;
  console.log(toDos.length);
  parsedTodos.forEach(paintToDo);
}
