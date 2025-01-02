const taskList = document.getElementById('taskList');
const addTaskBtn = document.getElementById('addTaskBtn');
const filterAllBtn = document.getElementById('filterAll');
const filterCompletedBtn = document.getElementById('filterCompleted');
const filterPendingBtn = document.getElementById('filterPending');

addTaskBtn.addEventListener('click', () => {
  const taskInput = document.getElementById('taskInput');
  const dateInput = document.getElementById('dateInput');
  const categorySelect = document.getElementById('categorySelect');
  const prioritySelect = document.getElementById('prioritySelect');

  const taskText = taskInput.value.trim();
  const taskDate = dateInput.value;

  if (!taskText || !taskDate) {
    alert("Please fill in all fields!");
    return;
  }

  const li = document.createElement('li');
  li.className = 'list-group-item';
  li.innerHTML = `
    <span>${taskText} - ${taskDate} - ${categorySelect.value} - ${prioritySelect.value}</span>
    <div>
      <input type="checkbox" onchange="toggleComplete(this)">
      <button onclick="deleteTask(this)">Delete</button>
    </div>
  `;
  taskList.appendChild(li);

  alert("Task added successfully!");

  // Clear input fields
  taskInput.value = '';
  dateInput.value = '';
});

function toggleComplete(checkbox) {
  const task = checkbox.closest('li');
  task.classList.toggle('completed', checkbox.checked);
}

function deleteTask(button) {
  const task = button.closest('li');
  task.remove();
}

filterAllBtn.addEventListener('click', () => filterTasks('all'));
filterCompletedBtn.addEventListener('click', () => filterTasks('completed'));
filterPendingBtn.addEventListener('click', () => filterTasks('pending'));

function filterTasks(filter) {
  const tasks = taskList.querySelectorAll('li');
  tasks.forEach(task => {
    switch (filter) {
      case 'all':
        task.style.display = '';
        break;
      case 'completed':
        task.style.display = task.classList.contains('completed') ? '' : 'none';
        break;
      case 'pending':
        task.style.display = task.classList.contains('completed') ? 'none' : '';
        break;
    }
  });
}
