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

  //Cleat input
  taskInput.value = "";

  e.preventDefault();
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