import { edit, deleteItem } from '../js/clickCount.js';

// Function to handle button click events
const handleButtonClick = (e) => {
  e.preventDefault();
  const btn = e.currentTarget;
  const icon = btn.querySelector('i');

  if (icon.classList.contains('fa-trash-can')) {
    deleteItem(icon, btn);
  }

  if (icon.classList.contains('fa-ellipsis-vertical')) {
    edit(icon, btn);
  }
};

// Function to add click event listeners to buttons
const buttonAction = () => {
  const buttonTasks = document.querySelectorAll('.btn-task');

  buttonTasks.forEach((btn) => {
    btn.addEventListener('click', handleButtonClick);
  });
};

const addNewActionWhenTaskAdded = (btn) => {
  btn.addEventListener('click', handleButtonClick);
};

export { buttonAction, addNewActionWhenTaskAdded };
