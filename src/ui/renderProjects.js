import appState from "../data/appState.js";
import renderTodos from "./renderTodos.js";

const projectList = document.querySelector("#project-list");

function renderProjects() {
  projectList.innerHTML = "";

  const projects = appState.getProjects();
  const currentProject = appState.getCurrentProject();

  projects.forEach((project) => {
    const projectItem = document.createElement("div");
    projectItem.textContent = project.name;
    projectItem.classList.add("project-item");

    if (project === currentProject) {
      projectItem.classList.add("active-project");
    }

    projectItem.addEventListener("click", () => {
      appState.setCurrentProject(project);
      renderProjects();
      renderTodos();
    });

    projectList.appendChild(projectItem);
  });
}

export default renderProjects;
