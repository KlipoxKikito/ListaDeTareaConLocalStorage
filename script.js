document.addEventListener('DOMContentLoaded', loadTasks);
document.querySelector('#task-form').addEventListener('submit', addTask);
document.querySelector('#task-list').addEventListener('click', removeTask);

function loadTasks() {
    let tasks = getTasksFromLocalStorage();
    tasks.forEach(task => addTaskToDOM(task));
}

function addTask(e) {
    e.preventDefault();
    const taskInput = document.querySelector('#task-input');
    const task = taskInput.value;
    addTaskToDOM(task);
    storeTaskInLocalStorage(task);
    taskInput.value = '';
}

function addTaskToDOM(task) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(task));
    const deleteBtn = document.createElement('button');
    deleteBtn.appendChild(document.createTextNode('Eliminar'));
    li.appendChild(deleteBtn);
    document.querySelector('#task-list').appendChild(li);
}

function removeTask(e) {
    if (e.target.tagName === 'BUTTON') {
        const li = e.target.parentElement;
        li.remove();
        removeTaskFromLocalStorage(li.firstChild.textContent);
    }
}

function getTasksFromLocalStorage() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    return tasks;
}

function storeTaskInLocalStorage(task) {
    let tasks = getTasksFromLocalStorage();
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTaskFromLocalStorage(task) {
    let tasks = getTasksFromLocalStorage();
    tasks = tasks.filter(t => t !== task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}