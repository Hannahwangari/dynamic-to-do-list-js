// Select DOM elements
const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Load tasks on page load
document.addEventListener('DOMContentLoaded', function () {
    loadTasks();
});

// Globally defined function to load tasks from Local Storage
function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(function (taskText) {
        addTask(taskText, false); // false = don't save again
    });
}

// Add a task to the DOM and optionally save it
function addTask(taskText, save = true) {
    if (!taskText.trim()) return;

    const li = document.createElement('li');
    li.textContent = taskText;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';
    removeBtn.onclick = function () {
        li.remove();
        removeTaskFromStorage(taskText);
    };

    li.appendChild(removeBtn);
    taskList.appendChild(li);

    if (save) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }
}

// Handle Add Task button click
addButton.addEventListener('click', function () {
    const taskText = taskInput.value;
    addTask(taskText);
    taskInput.value = '';
});

// Remove a task from Local Storage
function removeTaskFromStorage(taskText) {
    let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks = storedTasks.filter(function (task) {
        return task !== taskText;
    });
    localStorage.setItem('tasks', JSON.stringify(storedTasks));
}
