import appState from "../data/appState";

const main = document.querySelector("main");

function renderTodos(){
    main.innerHTML= "";

    const project = appState.getCurrentProject();
    if (!project) return;

    const todos = project.getTodos();

    todos.forEach(todo => {
        const todoItem = document.createElement("div");
        todoItem.textContent = todo.title;

        main.appendChild(todoItem);
    });

}


export default renderTodos;