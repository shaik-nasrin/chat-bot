// Function to add a task to the list
function addTask() {
    const taskInput = document.getElementById('taskInput'); // Fetch input field
    const taskText = taskInput.value.trim(); // Get value and trim spaces

    // Validate input
    if (taskText === "") {
        alert("Please enter a task."); // Show alert if input is empty
        return;
    }

    // Create a new list item
    const listItem = document.createElement('li');
    listItem.textContent = taskText; // Set task text

    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete"; // Button text
    deleteButton.style.marginLeft = "10px"; // Add some space
    deleteButton.onclick = function () {
        listItem.remove(); // Remove this specific task
    };

    // Add delete button to the list item
    listItem.appendChild(deleteButton);

    // Append list item to the to-do list
    const todoList = document.getElementById('todoList');
    todoList.appendChild(listItem);

    // Clear the input field
    taskInput.value = "";
}

// Function to delete all tasks
function deleteAll() {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = ""; // Clear all tasks
}
