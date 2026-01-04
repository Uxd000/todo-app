import appState from "../data/appState.js";
import renderTodos from "./renderTodos.js";


const sidebar = document.querySelector("aside");

function renderProjects(){
    sidebar.innerHTML = "";

    const projects = appState.getProjects();

    projects.forEach(project => {
        const projectItems = document.createElement("div");
        projectItems.textContent=project.name;

        if(project === appState.getCurrentProject()){
            projectItems.classList.add("active-project");
        }

        projectItems.addEventListener("click", () => {

            appState.setCurrentProject(project);
            renderProjects();
            renderTodos();

        });

        sidebar.appendChild(projectItems);
    });
}

export default renderProjects;