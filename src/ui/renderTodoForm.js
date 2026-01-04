import appState from "../data/appState";
import createTodo from "../data/todo";
import renderTodos from "./renderTodos";

function renderTodoForm() {
  const container = document.querySelector("#todo-form");
  if (!container) return;

  container.innerHTML = "";

  const form = document.createElement("form");

  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.placeholder = "Todo title";
  titleInput.required = true;

  const descInput = document.createElement("input");
  descInput.type = "text";
  descInput.placeholder = "Description";

  const dateInput = document.createElement("input");
  dateInput.type = "date";

  const prioritySelect = document.createElement("select");
  ["low", "medium", "high"].forEach((level) => {
    const option = document.createElement("option");
    option.value = level;
    option.textContent = level;
    prioritySelect.appendChild(option);
  });

  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.textContent = "Add Todo";

  form.append(
    titleInput,
    descInput,
    dateInput,
    prioritySelect,
    submitBtn
  );

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const todo = createTodo(
      titleInput.value,
      descInput.value,
      dateInput.value,
      prioritySelect.value
    );

    appState.addTodoToCurrentProject(todo);
    renderTodos();
    form.reset();
  });

  container.appendChild(form);
}

export default renderTodoForm;
