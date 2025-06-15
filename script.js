 // Step 1: Wait for the page to fully load before running our JavaScript
        // This is important because we need the HTML elements to exist before we can work with them
        document.addEventListener('DOMContentLoaded', function() {
            
            // Step 2: Get references to the important HTML elements
            // Think of this like "finding" the elements on the page so we can use them later
            const addButton = document.getElementById('add-task-btn');  // The "Add Task" button
            const taskInput = document.getElementById('task-input');    // The text input field
            const taskList = document.getElementById('task-list');      // The <ul> where tasks will appear
            
            // Step 3: Create the main function that adds tasks
            function addTask() {
                // Get the text the user typed and remove any extra spaces
                const taskText = taskInput.value.trim();
                
                // Check if the user actually typed something
                if (taskText === "") {
                    alert("Please enter a task!");
                    return; // Stop the function if no text was entered
                }
                
                // Step 4: Create a new list item (li) for the task
                const newTask = document.createElement('li');
                newTask.textContent = taskText; // Put the task text inside the li
                
                // Step 5: Create a remove button for this task
                const removeButton = document.createElement('button');
                removeButton.textContent = 'Remove';
                removeButton.className = 'remove-btn'; // Add CSS class for styling
                
                // Step 6: Make the remove button actually remove the task when clicked
                removeButton.onclick = function() {
                    // Remove this specific task from the list
                    taskList.removeChild(newTask);
                };
                
                // Step 7: Put the remove button inside the task item
                newTask.appendChild(removeButton);
                
                // Step 8: Add the complete task item to our task list
                taskList.appendChild(newTask);
                
                // Step 9: Clear the input field so user can type a new task
                taskInput.value = '';
            }
            
            // Step 10: Make the "Add Task" button work when clicked
            addButton.addEventListener('click', addTask);
            
            // Step 11: Allow users to add tasks by pressing Enter key
            taskInput.addEventListener('keypress', function(event) {
                // Check if the user pressed the Enter key
                if (event.key === 'Enter') {
                    addTask(); // Run the same function as clicking the button
                }
            });