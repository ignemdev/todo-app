//Imports
import { slideToRightFadeOut } from "./animation.js";

//elements
const addTodoInput = document.querySelector("#add-todo-input");
const todoContainer = document.querySelector("#todo-container");

//logic
const getTodoItem = (todo) => {
  const todoItemElement = document.createElement("li");
  todoItemElement.classList.add("todo-item");
  todoItemElement.innerHTML = `<span class="delete-item"><i class="fa fa-trash" aria-hidden="true"></i></span> ${todo}`;
  return todoItemElement;
};

const addTodo = ({ which, target }) => {
  if (which !== 13) return;

  const newTodo = target.value;
  const newTodoItem = getTodoItem(newTodo);
  target.value = "";

  todoContainer.appendChild(newTodoItem);
};

const deleteTodo = (e) => {
  const { target } = e;
  if (!target.closest(".delete-item")) return;

  const todoItem = target.closest(".todo-item");

  slideToRightFadeOut(todoItem, () => todoItem.remove());
  e.stopPropagation();
};

const toggleTodoItem = ({ target }) => {
  if (!target.classList.contains("todo-item")) return;

  target.classList.toggle("checked");
};

// listeners
addTodoInput.addEventListener("keydown", addTodo);
todoContainer.addEventListener("click", deleteTodo);
todoContainer.addEventListener("click", toggleTodoItem);

//delete todos
// $("ul").on("click", "span", function (e) {
//   $(this)
//     .parent()
//     .fadeOut(1000, function () {
//       $(this).remove();
//     });
//   e.stopPropagation();
// });
