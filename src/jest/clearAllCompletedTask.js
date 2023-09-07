import List from './list.js';

// Define the clearAllCompletedTask function
const clearAllCompletedTask = () => {
  // Create a new instance of the List class
  const list = new List();

  // Get the clear button element
  const btnClear = document.querySelector('.btn-clear');

  // Add a click event listener to the clear button
  btnClear.addEventListener('click', () => {
    // Get all elements with the 'completed' class
    const completed = document.querySelectorAll('.completed');

    // Remove completed tasks from the list and get the updated data
    const data = list.removeAllCompletedTask();

    // Remove the completed task elements from the DOM
    completed.forEach((item) => {
      const parent = item.parentNode.parentNode;
      parent.remove();
    });

    // Update the 'index' attribute of task buttons
    const btns = document.querySelectorAll('.btn-task');
    btns.forEach((btn, i) => {
      btn.setAttribute('index', data[i].index);
    });
  });
};

// Export the clearAllCompletedTask function
module.exports = clearAllCompletedTask
