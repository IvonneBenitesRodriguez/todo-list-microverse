import editDescription from './editLocalStorage.js';
import List from './list.js';
import removeTaskFromLocalStorage from './removeTaskFromLocalStorage.js';

const convertTextToInput = (icon) => {
  // Get the index of the task associated with the icon
  const index = icon.getAttribute('data-index');
  // Ensure that index is a valid number
  if (!Number.isNaN(Number(index))) {
    const list = new List();
    const getData = list.getTaskByIndex(Number(index));
    // Check if the getData is defined and has elements
    if (getData && getData.length > 0) {
      const parent = icon.parentNode;
      const input = document.createElement('input');
      input.value = getData[0].description;
      input.className = 'edit-todo';
      parent.insertBefore(input, parent.firstChild);

      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          list.UpdateDescriptionTask(Number(index), input.value);
        }
      });
    }
  }
};

const edit = (icon, btn) => {
  const index = btn.getAttribute('index');
  if (icon.classList.contains('fa-ellipsis-vertical')) {
    icon.classList.add('fa-trash-can');
    icon.classList.remove('fa-ellipsis-vertical');
    const parent = icon.parentElement.parentElement;
    if (parent.firstChild) {
      parent.removeChild(parent.firstChild);
      convertTextToInput(parent, index);
      editDescription(index, icon);
    }
  }
};
const deleteItem = (icon, btn) => {
  const index = btn.getAttribute('index');
  const data = removeTaskFromLocalStorage(index);
  const parent = btn.parentElement;
  parent.remove();
  const btns = document.querySelectorAll('.btn-task');
  btns.forEach((btn, i) => {
    btn.setAttribute('index', data[i].index);
  });
};

export { edit, deleteItem };