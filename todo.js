const todoForm = document.getElementById("todoForm");
const taskInput = document.getElementById("taskInput");
const dueDate = document.getElementById("dueDate");
const taskList = document.getElementById("taskList");

todoForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const taskText = taskInput.value.trim();
  const date = dueDate.value;

  if (taskText && date) {
    addTask(taskText, date);
    taskInput.value = "";
    dueDate.value = "";
  }
});

function addTask(text, date) {
  const li = document.createElement("li");

  const infoDiv = document.createElement("div");
  infoDiv.className = "task-info";
  infoDiv.innerHTML = `<strong>${text}</strong><small>Due: ${date}</small>`;

  const actionsDiv = document.createElement("div");
  actionsDiv.className = "task-actions";

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✅";
  completeBtn.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑️";
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  actionsDiv.appendChild(completeBtn);
  actionsDiv.appendChild(deleteBtn);

  li.appendChild(infoDiv);
  li.appendChild(actionsDiv);

  taskList.appendChild(li);
}
