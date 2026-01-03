import createProject from "./project.js";
import storage from "../storage/storage.js";
import createTodo from "./todo.js";

let projects= [];
let currentProject = null;

function initialize() {
  const savedProjects = storage.load();

  if (!savedProjects || savedProjects.length === 0) {
    const inbox = createProject("Inbox");
    projects = [inbox];
    currentProject = inbox;
    storage.save(projects);
    return;
  }

  projects = savedProjects.map(projectData => {
    const project = createProject(projectData.name);

    const todos = projectData.todos || [];

    todos.forEach(todoData => {
        const todo = createTodo(
            todoData.title,
            todoData.description,
            todoData.dueDate,
            todoData.priority
        );
        todo.completed = todoData.completed;
        project.addTodo(todo);
    });

    return project;
  });

  currentProject = projects[0];
}

function addProject(name){
    const project = createProject(name);
    projects.push(project);
    storage.save(projects);
    return project;
}

function getProjects(){
    return projects;
}

function setCurrentProject(project){
    currentProject=project;
}

function getCurrentProject(){
    return currentProject;
}

function addTodoFromCurrentProject(todo){
    if(!currentProject) return;
    currentProject.addTodo(todo);
    storage.save(projects);

}

function removeTodoFromCurrentProject(index){
    if(!currentProject) return;
    currentProject.removeTodo(index);
    storage.save(projects);
}

export default{

    initialize,
    addProject,
    getProjects,
    setCurrentProject,
    getCurrentProject,
    addTodoFromCurrentProject,
    removeTodoFromCurrentProject,
    

};
