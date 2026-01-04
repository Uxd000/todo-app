import appState from "../data/appState";

function renderTodos() {
  const container = document.querySelector("#todo-list");
  if (!container) return;

  container.innerHTML = "";

  const project = appState.getCurrentProject();
  if (!project) return;

  const todos = project.getTodos();

  todos.forEach((todo, index) => {
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;

    checkbox.addEventListener("change", () => {
      todo.toggleCompleted();
      renderTodos();
    });

    const title = document.createElement("span");
    title.textContent = todo.title;

    if (todo.completed) {
      title.style.textDecoration = "line-through";
    }

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "✖";

    deleteBtn.addEventListener("click", () => {
      project.removeTodo(index);
      renderTodos();
    });

    todoItem.append(checkbox, title, deleteBtn);
    container.appendChild(todoItem);
  });
}

export default renderTodos;
