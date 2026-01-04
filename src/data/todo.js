function createTodo(title, description, dueDate, priority) {
  let completed = false;

  function toggleCompleted() {
    completed = !completed;
  }

  return {
    title,
    description,
    dueDate,
    priority,
    completed,
    toggleCompleted,
  };
}

export default createTodo;
