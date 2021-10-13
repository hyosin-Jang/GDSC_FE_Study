const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");
const percent = document.querySelector("#percent h2:first-child");
const percentTodo = document.querySelector("#percent h2:last-child");
const TODO_KEYS = "todos";

let toDos = [];

/**
 * @function
 * 1. 1, 0을 localStorage에 같이 저장한다. 1은 달성 완료인 것,
 *       0은 아직 달성하지 않은 상태이다.
 * 2. 현재 UI 옆에 체크 버튼을 클릭하면, 가로로 줄이 그어지고 (css변경)
 *    check 값이 0에서 1로 바뀌며, 달성률을 계산하는 함수가 업데이트 되고 (4/7)
 *    총 몇 퍼센트 달성했는지도 업데이트 된다.
 *
 * -----------------------
 *  구현 계획:
 * 1. 체크 버튼을 만들자
 * 2. 체크 버튼의 css를 토글하자
 * 3. 토글한 li를 현재 배열에 업데이트하자
 */
function deleteTodo(event) {
  const li = event.target.parentElement;

  if (li.classList.contains("click")) {
    clickLength--;
  }
  li.remove();

  toDos = toDos.filter(item => item.id !== parseInt(li.id));
  saveToDos();

  allLength--;
  paintPercent();
}

function checkTodo(event) {
  const li = event.target.parentElement;

  li.classList.toggle("click");

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
    li.classList.toggle("click");
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
