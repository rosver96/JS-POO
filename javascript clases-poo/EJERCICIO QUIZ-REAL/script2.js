class Task {
    constructor(name, opcion1, opcion2, opcion3, opcion4, respuesta) {
      this.name = name;
      this.opcion1 = opcion1;
      this.opcion2 = opcion2;
      this.opcion3 = opcion3;
      this.opcion4 = opcion4;
      this.respuesta = respuesta;
      this.completed = false;
    }
  
    toggleCompleted() {
      this.completed = !this.completed;
    }
  }
  
  class TaskManager {
    constructor() {
      this.tasks = [];
    }
  
    addTask(task) {
      this.tasks.push(task);
    }
  
    removeTask(index) {
      this.tasks.splice(index, 1);
    }
  
    getTasks() {
      return this.tasks;
    }
  }
  
  // Crear instancia del administrador de tareas
  const taskManager = new TaskManager();
  
  // Lógica de interacción con el DOM
  const taskForm = document.getElementById("task-form");
  const taskNameInput = document.getElementById("task-name");
  const taskOpcion1 = document.getElementById("task-opcion1");
  const taskOpcion2 = document.getElementById("task-opcion2");
  const taskOpcion3 = document.getElementById("task-opcion3");
  const taskOpcion4 = document.getElementById("task-opcion4");
  const taskRespuesta = document.getElementById("task-respuesta");
  const taskList = document.getElementById("task-list");
  
  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = taskNameInput.value;
    const opcion1 = taskOpcion1.value;
    const opcion2 = taskOpcion2.value;
    const opcion3 = taskOpcion3.value;
    const opcion4 = taskOpcion4.value;
    const respuesta = taskRespuesta.value;
    const task = new Task(name, opcion1, opcion2, opcion3, opcion4, respuesta);
    taskManager.addTask(task);
    renderTasks();
    taskForm.reset();
  });
  
  function renderTasks() {
    taskList.innerHTML = "";
    const tasks = taskManager.getTasks();
    for (let i = 0; i < tasks.length; i++) {
      const task = tasks[i];
      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <ol>${task.name}</ol>
        <br>
        <input class="form-check-input mt-5" type="checkbox" ${task.completed ? "checked" : ""} onchange="toggleTaskCompleted(${i})">
        <span>${task.opcion1}</span>
        <br>
        <input class="form-check-input mt-5" type="checkbox" ${task.completed ? "checked" : ""} onchange="toggleTaskCompleted(${i})">
        <span>${task.opcion2}</span>
        <br>
        <input class="form-check-input mt-5" type="checkbox" ${task.completed ? "checked" : ""} onchange="toggleTaskCompleted(${i})">
        <span>${task.opcion3}</span>
        <br>
        <input class="form-check-input mt-5" type="checkbox" ${task.completed ? "checked" : ""} onchange="toggleTaskCompleted(${i})"> 
        <span>${task.opcion4}</span>
        <br>
        <button class="btn btn-outline-danger mt-5" onclick="removeTask(${i})">Eliminar</button>
      `;
      taskList.appendChild(listItem);
    }
  }
  
  function toggleTaskCompleted(index) {
    const task = taskManager.getTasks()[index];
    task.toggleCompleted();
    renderTasks();
  }
  
  function removeTask(index) {
    taskManager.removeTask(index);
    renderTasks();
  }
  
  renderTasks();