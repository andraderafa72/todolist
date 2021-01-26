const taskList = document.querySelector('.task-list')
const addTask = document.querySelector('.add-task')
const task = document.querySelector('#task');

document.addEventListener('click', e =>{
  const el = e.target;

  if(el.classList.contains('liTask')){
    if(el.classList.contains('done')){
      return el.classList.remove('done')
    }
    el.classList.add('done')
  }

  if(el.classList.contains('delete')){
    el.parentElement.remove()
    saveOnLocalStorage()
  }
})

addTask.addEventListener('click', e => {
  e.preventDefault()

  if(task.value === '' || task.value.lenght > 100) return
  createTask(task.value)
  task.value = ''
})

function saveOnLocalStorage(){
  const liTarefas = document.querySelectorAll('li')
  const listaDeTarefas = []

  for(let tarefa of liTarefas){
    const text = tarefa.innerText
    listaDeTarefas.push(text)
  }

  const tarefasJSON = JSON.stringify(listaDeTarefas)
  localStorage.setItem('tarefas', tarefasJSON)
}

function createTask(texto){
  const li = createLiElement();
  const button = createDeleteButton();
  li.setAttribute('class', 'liTask')
  li.innerText = texto;
  li.appendChild(button)
  taskList.appendChild(li)
  saveOnLocalStorage()
}

function createDeleteButton(){
  const button = document.createElement('button')
  button.classList.add('delete');
  return button
}

function createLiElement(){
  return document.createElement('li');
}

function getFromLocalStorage(){
  const tasksJSON = localStorage.getItem('tarefas')
  const tasks = JSON.parse(tasksJSON);

  for(let tarefa of tasks){
    createTask(tarefa)
  }
}

getFromLocalStorage()