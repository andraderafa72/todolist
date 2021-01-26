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
  }
})

addTask.addEventListener('click', e => {
  e.preventDefault()

  if(task.value === '' || task.value.lenght > 100) return
  createTask()
})

function createTask(){
  const li = createLiElement();
  const button = createDeleteButton();
  li.setAttribute('class', 'liTask')
  li.innerText = task.value;
  li.appendChild(button)
  taskList.appendChild(li)
}

function createDeleteButton(){
  const button = document.createElement('button')
  button.classList.add('delete');
  return button
}

function createLiElement(){
  return document.createElement('li');
}