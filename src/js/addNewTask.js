import createTask from './createTask.js';
import { addEventComplete } from './eventComplete.js';
import List from './list.js';
import { addNewActionWhenTaskAdded } from './removeTask.js';

const addNewTaskToList = () => {
  const inputTodo = document.querySelector('.add-todo');
  const unOrderList = document.getElementById('todo-list');

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

export default addNewTaskToList;