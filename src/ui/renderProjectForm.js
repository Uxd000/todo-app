import appState from "../data/appState.js";
import renderProjects from "./renderProjects.js";
import renderTodos from "./renderTodos.js";

const sidebar = document.querySelector("aside");

function renderProjectsForm(){
 
    const form = document.createElement("form");

    const input = document.createElement("input");
    input.placeholder = "New project name";
    input.required = true;

    const button = document.createElement("button");
    button.textContent = "Add Project";

    form.append(input, button);

    form.addEventListener("submit", (e) => {
    e.preventDefault();

    const project = appState.addProject(input.value);
    appState.setCurrentProject(project);

    renderProjects();
    renderTodos();

    form.reset();
  });

    sidebar.prepend(form);

}

export default renderProjectsForm;