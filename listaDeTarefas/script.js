const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
  const textItem = taskInput.value.trim();
  if (textItem !== '') {
    const newTask = document.createElement('li');
    newTask.innerHTML = `
      <span>${textItem}</span>
      <div class="button-group">
        <button onclick="this.parentElement.parentElement.classList.toggle('completed')">Concluir</button>
        <button onclick="">Editar</button>
        <button onclick="this.parentElement.parentElement.remove()">Remover</button>
      </div>
    `;
    taskList.appendChild(newTask);
    taskInput.value = '';
  }
}
