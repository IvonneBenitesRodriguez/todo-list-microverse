import List from '../js/list.js';

// Function to handle the logic of removing completed tasks and updating attributes
export const handleClearButtonClick = (list) => {
  const completed = document.querySelectorAll('.completed');
  const data = list.removeAllCompletedTask();
  completed.forEach((item) => {
    const parent = item.parentNode.parentNode;
    parent.remove();
  });
  const btns = document.querySelectorAll('.btn-task');
  btns.forEach((btn, i) => {
    btn.setAttribute('index', data[i].index);
  });
};

// Function to add a click event listener to the clear button
export const addClearButtonEventListener = () => {
  const btnClear = document.querySelector('.btn-clear');
  if (btnClear) {
    btnClear.addEventListener('click', () => {
      const list = new List();
      handleClearButtonClick(list);
    });
  }
};
