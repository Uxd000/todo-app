import createProject from "./project.js";
import storage from "../storage/storage.js";
import createTodo from "./todo.js";

let projects= [];
let currentProject = null;

function initialize() {
  const storedProjects = storage.load();

  if (!storedProjects || storedProjects.length === 0) {
    const inbox = createProject("Inbox");
    projects = [inbox];
    currentProject = inbox;
    storage.save(projects);
    return;
  }

  projects = storedProjects.map((projectData) => {
    const project = createProject(projectData.name);

    const todos = projectData.todos || [];
    todos.forEach((todoData) => {
      const todo = createTodo(
        todoData.title,
        todoData.description,
        todoData.dueDate,
        todoData.priority
      );

      if (todoData.completed) {
        todo.toggleCompleted();
      }

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

function addTodoToCurrentProject(todo){
    if(!currentProject) return;
    currentProject.addTodo(todo);
    storage.save(projects);

}

function removeTodoFromCurrentProject(index){
    if(!currentProject) return;
    currentProject.removeTodo(index);
    storage.save(projects);
}

function toggleTodoCompletion(index) {
    if (!currentProject) return;

    const todos = currentProject.getTodos();
    todos[index].toggleCompleted();
    storage.save(projects);
}


export default{

    initialize,
    addProject,
    getProjects,
    setCurrentProject,
    getCurrentProject,
    addTodoToCurrentProject,
    removeTodoFromCurrentProject,
    toggleTodoCompletion,

};
