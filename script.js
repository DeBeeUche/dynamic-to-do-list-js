// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // false means don't re-save
    }

    // Save tasks array to Local Storage
    function saveTasks() {
        const tasks = [];
        document.querySelectorAll('#task-list li').forEach(li => {
            tasks.push(li.firstChild.textContent); // firstChild = text before button
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Function to add a new task
    function addTask(taskText, save = true) {
        // If adding manually (button/Enter), get input value
        if (!taskText) {
            taskText = taskInput.value.trim();
        }

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create new list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = 'remove-btn';

        // Remove task on button click
        removeBtn.onclick = function () {
            taskList.removeChild(li);
            saveTasks(); // update storage after removal
        };

        // Append remove button to list item
        li.appendChild(removeBtn);

        // Append list item to task list
        taskList.appendChild(li);

        // Save to Local Storage if needed
        if (save) {
            saveTasks();
        }

        // Clear input
        taskInput.value = "";
    }

    // Add task on button click
    addButton.addEventListener('click', () => addTask());

    // Add task when pressing Enter
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Load saved tasks on page load
    loadTasks();
});
