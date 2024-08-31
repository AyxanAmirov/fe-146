const todoForm = document.querySelector("#formElement");
const addTodoInput = document.querySelector("#getinput");
const todoBody = document.querySelector(".todo-list");
const removeAllTodo = document.querySelectorAll(".btn")[1];
const searchTodo = document.querySelector("#searchTodo");
let todos = [];

todoForm.addEventListener("submit", addTodo);
removeAllTodo.addEventListener("click", removeTodos);
window.addEventListener("DOMContentLoaded", addAllTodos);
searchTodo.addEventListener("keyup", search);

function search() {
  const listElement = document.querySelectorAll(".list-element");

  listElement.forEach((li) => {
    if (li.textContent.toLowerCase().includes(searchTodo.value.toLowerCase())) {
      li.style.display = "block";
    } else {
      li.style.display = "none";
    }
  });
}

function addTodo(e) {
  if (addTodoInput.value.trim() == "" || addTodoInput.value.trim() == null) {
    alert("dəyər daxil edin");
  } else {
    addTodoUi(addTodoInput.value);
    addTodoStorage(addTodoInput.value);
    addTodoInput.value = "";
  }
  e.preventDefault();
}

function addTodoUi(todo) {
  //create element (üsul 1)
  //   let li = document.createElement("li");
  //   li.textContent = addTodoInput.value;
  //   li.className = "list-element";
  //   let a = document.createElement("a");
  //   a.href = "#";
  //   a.className = "remove-btn";
  //   let i = document.createElement("i");
  //   i.classList = "fa-solid fa-xmark icon-hover";
  //   a.appendChild(i);
  //   li.appendChild(a);
  //   todoBody.appendChild(li)

  //inner html (üsul 2 məsləhət görülən)

  todoBody.innerHTML += `
           <li class="list-element">
              ${todo}
              <a href="#!" class="remove-btn" onclick="removeTodoUi(this)">
                <i class="fa-solid fa-xmark icon-hover"></i>
              </a>
            </li>
     `;
}
function addTodoStorage(todo) {
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function removeTodoUi(elem) {
  elem.parentElement.remove();
  removeTodoStorage(elem.parentElement.textContent);
}
function removeTodos() {
  todoBody.innerHTML = "";
  todos = [];
  localStorage.removeItem("todos");
}

function addAllTodos() {
  let allTodos = JSON.parse(localStorage.getItem("todos"));
  if (allTodos !== null) {
    todos = [...allTodos];
    todos.forEach((todo) => {
      addTodoUi(todo);
    });
  }
}


function removeTodoStorage(removedTodo) {
  todos = todos.filter(
    (todo) => todo.trim() !== removedTodo.trim()
  );
  localStorage.setItem("todos", JSON.stringify(todos));
}
