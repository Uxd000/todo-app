import "./style.css";
import appState from "./data/appState.js";
import createTodo from "./data/todo.js";
import renderProjects from "./ui/renderProjects.js";
import renderTodos from "./ui/renderTodos.js";

appState.initialize();
renderProjects();
renderTodos();

const todo = createTodo("Persistence works", "Saved forever", "2026-01-20", "high");
appState.addTodoFromCurrentProject(todo);

console.log(appState.getCurrentProject().getTodos());

console.log("ToDo App webpack is working");
