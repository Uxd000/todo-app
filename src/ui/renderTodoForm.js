import appState from "../data/appState";
import createTodo from "../data/todo";
import renderTodos from "./renderTodos";

const main = document.querySelector("main");


function renderTodoForm(){

    const form = document.createElement("form");

    const titleInput = document.createElement("input");
    titleInput.placeholder = "Todo title";
    titleInput.required = true;

    const descriptionInput = document.createElement("input");
    descriptionInput.placeholder = "Description";

    const dateInput = document.createElement("input");
    dateInput.type = "date";

    const prioritySelect = document.createElement("select");

    ["low", "medium", "high"].forEach(level => {
        const option = document.createElement("option");
        option.value = level;
        option.textContent = level;
        prioritySelect.appendChild(option);
    });

    const submitBtn = document.createElement("button");
    submitBtn.textContent = "Add Todo";

    form.append(
        titleInput,
        descriptionInput,
        dateInput,
        prioritySelect,
        submitBtn
    );

    main.prepend(form);


    form.addEventListener("submit", (e) => {
    e.preventDefault();

    const todo = createTodo(
        titleInput.value,
        descriptionInput.value,
        dateInput.value,
        prioritySelect.value
    );

    appState.addTodoToCurrentProject(todo);
    renderTodos();
    form.reset();
    });

}

export default renderTodoForm;


