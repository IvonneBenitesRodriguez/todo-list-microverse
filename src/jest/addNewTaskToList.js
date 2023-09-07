import createTask from '../js/createTask.js';
import { addEventComplete } from '../js/eventComplete.js';
import List from '../js/list.js';
import { addNewActionWhenTaskAdded } from '../js/removeTask.js';

const addNewTaskToList = (inputTodo, unOrderList) => {
  // const inputTodo = document.querySelector('.add-todo');
  // const unOrderList = document.getElementById('todo-list');

  inputTodo.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      const list = new List();
      const TodoList = {
        description: inputTodo.value,
        completed: false,
      };
      const task = list.addTaskToList(TodoList);
      const { li, a } = createTask(task);
      unOrderList.appendChild(li);
      inputTodo.value = '';
      addEventComplete(li);
      addNewActionWhenTaskAdded(a);
    }
  });
};

module.exports = addNewTaskToList;