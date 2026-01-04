import appState from "../data/appState";

const main = document.querySelector("main");

function renderTodos() {
    main.innerHTML = "";

    const project = appState.getCurrentProject();
    if (!project) return;

    const todos = project.getTodos();

    todos.forEach((todo, index) => {
        const todoItem = document.createElement("div");
        todoItem.classList.add("todo-item");

        const title = document.createElement("span");
        title.textContent = todo.title;

        if (todo.completed) {
            title.classList.add("completed");
        }

        title.addEventListener("click", () => {
            appState.toggleTodoCompletion(index);
            renderTodos();
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "✕";
        deleteBtn.classList.add("delete-btn");

        deleteBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            appState.removeTodoFromCurrentProject(index);
            renderTodos();
        });

    todoItem.append(title, deleteBtn);
    main.appendChild(todoItem);
    });
}

export default renderTodos;
