import List from './list.js';

const editDescription = (index, icon) => {
  const input = document.querySelector('.edit-todo');
  const list = new List();
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      list.UpdateDescriptionTask(Number(index), input.value);
      const parent = input.parentNode;

      const label = document.createElement('label');
      const inputCheck = document.createElement('input');
      inputCheck.type = 'checkbox';
      const span = document.createElement('span');
      span.textContent = input.value;
      label.appendChild(inputCheck);
      label.appendChild(span);

      parent.replaceChild(label, input);
      icon.classList.add('fa-ellipsis-vertical');
      icon.classList.remove('fa-trash-can');
    }
  });
};
export default editDescription;