// Select DOM elements
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

// Load tasks when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    loadTasks();
});

// Define the loadTasks function globally
function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(function (taskText) {
        addTask(taskText, false); // false prevents saving again
    });
}

// Function to add a task to the list and optionally to Local Storage
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

// Add button click event
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
