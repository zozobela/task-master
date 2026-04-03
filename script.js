// Task Management Functionality

// Retrieve tasks from localStorage
function getTasks() {
    return JSON.parse(localStorage.getItem('tasks')) || [];
}

// Save tasks to localStorage
function saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Add a new task
function addTask(task) {
    const tasks = getTasks();
    tasks.push({ text: task, completed: false });
    saveTasks(tasks);
}

// Delete a task
function deleteTask(index) {
    const tasks = getTasks();
    tasks.splice(index, 1);
    saveTasks(tasks);
}

// Toggle task completion status
function toggleTask(index) {
    const tasks = getTasks();
    tasks[index].completed = !tasks[index].completed;
    saveTasks(tasks);
}

// Filter tasks by completion status
function filterTasks(filter) {
    const tasks = getTasks();
    if (filter === 'completed') {
        return tasks.filter(task => task.completed);
    } else if (filter === 'incomplete') {
        return tasks.filter(task => !task.completed);
    }
    return tasks;
}

// Get task statistics
function getStatistics() {
    const tasks = getTasks();
    const total = tasks.length;
    const completed = tasks.filter(task => task.completed).length;
    const incomplete = total - completed;
    return { total, completed, incomplete };
}

// Example usage:
// addTask('Learn JavaScript');
// toggleTask(0);
// console.log(filterTasks('completed'));
// console.log(getStatistics());
