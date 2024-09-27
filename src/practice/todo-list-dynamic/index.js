document.addEventListener('DOMContentLoaded', function() {
  let list = [];

  const todoListContainer = document.getElementById('todo-list');
  const inputContainer = document.getElementById('todo-input');

  function addTodo(task){
    const value = task.trim();

    if(!value || list.includes(task))
      alert('Task already present');

    const template = document.getElementById('list-template').content;
    const clone = template.cloneNode(true);

    clone.querySelector('.todo-check').id = value;
    clone.querySelector('.todo-item').htmlFor = value;
    clone.querySelector('.todo-item').textContent = value;

    todoListContainer.appendChild(clone);

    inputContainer.value = '';
  }

  inputContainer.addEventListener('keypress', (event) => {
    if(event.key === 'Enter'){
      addTodo(event.target.value);
    }
  });

  todoListContainer.addEventListener('click', event => {
    console.log(event.target);
    if(event.target.matches('.todo-check')){
      event.target.closest('.list-item').querySelector('.todo-item').classList.toggle('complete');
    }

    if(event.target.matches('.delete-todo')){
      const selectedItem = event.target.closest('.list-item');
      const task = selectedItem.querySelector('.todo-item').textContent;

      selectedItem.remove();
      list = list.filter(item => item!==task)

    }
  });
});