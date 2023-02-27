const taskForm = document.querySelector('form');
const taskList = document.querySelector('#task-list');
const filterBtn = document.querySelector('#filter-btn');
let tasks = [];

function addTask(e) {
  e.preventDefault();
  const taskInput = document.querySelector('#task');
  const task = taskInput.value;
  if (task !== '') {
    tasks.push({
      id: Date.now(),
      task,
      completed: false
    });
    displayTasks();
    taskInput.value = '';
  }
}

function displayTasks() {
  taskList.innerHTML = '';
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.innerHTML = task.task;
    if (task.completed) {
      li.classList.add('completed');
    }
    li.addEventListener('click', () => {
      task.completed = !task.completed;
      li.classList.toggle('completed');
    });
    taskList.appendChild(li);
  });
}

function filterTasks() {
  const filteredTasks = tasks.filter(task => task.completed);
  tasks = filteredTasks;
  displayTasks();
}

taskForm.addEventListener('submit', addTask);
filterBtn.addEventListener('click', filterTasks);
