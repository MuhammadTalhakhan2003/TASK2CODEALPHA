document.getElementById('todo-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const taskInput = document.getElementById('task');
    const taskText = taskInput.value;
    if (taskText) {
        addTask(taskText);
        taskInput.value = '';
    }
});

function addTask(taskText) {
    const todoList = document.getElementById('todo-list');
    const li = document.createElement('li');
    li.innerHTML = `${taskText} <button onclick="removeTask(this)">Remove</button>`;
    todoList.appendChild(li);
}

function removeTask(button) {
    const li = button.parentElement;
    li.remove();
}
