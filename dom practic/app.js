const todoForm = document.querySelector("#formElement");
const addTodoInput = document.querySelector("#getinput");
const todoBody = document.querySelector(".todo-list");
const removeAllTodo = document.querySelectorAll(".btn")[1]




todoForm.addEventListener("submit", addTodo);
removeAllTodo.addEventListener("click",removeTodos)

function addTodo(e) {
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
  if (addTodoInput.value.trim() == "" || addTodoInput.value.trim() == null) {
    alert("dəyər daxil edin");
  } else {
    todoBody.innerHTML += `
           <li class="list-element">
              ${addTodoInput.value}
              <a href="#!" class="remove-btn" onclick="removeTodoUi(this)">
                <i class="fa-solid fa-xmark icon-hover"></i>
              </a>
            </li>
     `;
    addTodoInput.value = "";
  }
  e.preventDefault();
}

function removeTodoUi(elem){
    elem.parentElement.remove()    
}
function removeTodos(){
    todoBody.innerHTML = ""
}





