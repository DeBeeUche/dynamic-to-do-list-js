// Get the input, button, and list
const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-button');
const taskList = document.getElementById('task-list');

function addTask() {
    // Trim the text to remove spaces
    const taskText = taskInput.value.trim();

    // If empty, just return
    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    // Create the li element
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create the remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';

    // When remove is clicked, delete this li
    removeBtn.addEventListener('click', function () {
        taskList.removeChild(li);
    });

    // Put the remove button inside li
    li.appendChild(removeBtn);

    // Add li to the list
    taskList.appendChild(li);

    // Clear the input
    taskInput.value = '';
}

// Run addTask when button is clicked
addButton.addEventListener('click', addTask);

// Run addTask when Enter key is pressed in input
taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
