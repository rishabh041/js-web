document.addEventListener('DOMContentLoaded', function() {

  const data = [
    {
        "id": 1,
        "name": "Walk the dog",
        "isChecked": false
    },
    {
        "id": 2,
        "name": "Complete homework",
        "isChecked": true
    },
    {
        "id": 3,
        "name": "Call the electrician",
        "isChecked": false
    }
];

  const todoContainer = document.getElementById('todo-list');

  function renderTodoList(){
    const template = document.getElementById('list-template').content;
    const fragment = document.createDocumentFragment();

    data.forEach(item => {
      const clone = template.cloneNode(true);

      clone.querySelector('.todo-check').checked = item.isChecked;
      clone.querySelector('.todo-item').textContent = item.name;

      fragment.appendChild(clone);
      
      // const listItem = document.createElement('li');
      // const checkbox = document.createElement('input');
      // const nameSpan = document.createElement('span');

      // checkbox.type = 'checkbox';
      // checkbox.checked = item.isChecked;
      // checkbox.disabled = true;


      // nameSpan.textContent = item.name;
      // nameSpan.setAttribute('data-name', item.name);
      // nameSpan.style.cursor = 'pointer';

      // listItem.appendChild(checkbox);
      // listItem.appendChild(nameSpan);

      // fragment.appendChild(listItem);
    });

    todoContainer.appendChild(fragment);
  };

  // event delegation
  todoContainer.addEventListener('click', event => {
    // another DOM method
    // if(event.target.tagName === 'SPAN')
    if(event.target.matches('SPAN')){
      const clickedItem = event.target;

      // toggling classname
      clickedItem.classList.toggle('red');
    }
  })

  renderTodoList();
});