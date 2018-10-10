// Define UI Variables
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// Load all event listeners
loadEventListeners();

//Load all event listeners
function loadEventListeners() {
  //Add task event
  form.addEventListener("submit", addTask);

  //Remove task event
  taskList.addEventListener('click', removeTask);

  //Cleat all tasks event
  clearBtn.addEventListener('click', clearTasks)

  //Filter task events
  filter.addEventListener('keyup', filterTasks)
}

// Add Task
function addTask(e) {
  if (taskInput.value === "") {
    alert("Add a task");
  }

  //Create li element
  const li = document.createElement("li");
  //Add Class
  li.className = "collection-item";
  //Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));

  //Create new link element
  const link = document.createElement("a");
  link.className = "delete-item secondary-content";
  //Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  //Append link to the li
  li.appendChild(link);

  // Append li to ul
  taskList.appendChild(li);

  // Store on local storage
  storeTaskInLocalstorage(taskInput.value);

  //Cleat input
  taskInput.value = "";

  e.preventDefault();
}

//Add task to local storage
function storeTaskInLocalstorage(task) {
  let tasks;

  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

//Remove task
function removeTask(e) {
 if(e.target.parentElement.classList.contains('delete-item')){
  console.log(e.target);
  if(confirm('Are you sure you want to delete this task?')){
    e.target.parentElement.parentElement.remove();
  }
  }
  
}

//Clear all tasks
function clearTasks(e) {
 // taskList.innerHTML = '';

 //Faster solution
 while(taskList.firstChild){
   taskList.removeChild(taskList.firstChild);
 }

}

//Filter task function based onmatches
function filterTasks (e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(function(task){
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1){
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
}