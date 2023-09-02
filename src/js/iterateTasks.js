import createTask from './createTask.js';
import List from './list.js';

const iterateTasks = () => {
  const unorderList = document.querySelector('.to-do-list ul');
  const lists = new List();

  const sortedList = lists.getLocalStorage().sort((a, b) => a.index - b.index);
  sortedList.forEach((task) => {
    const { li } = createTask(task);
    unorderList.appendChild(li);
  });
};

export default iterateTasks;