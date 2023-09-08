import { buttonAction } from './buttonAction.js';
import * as clickCount from '../js/clickCount.js';

describe('buttonAction', () => {
  let buttonTasks;
  let mockDeleteItem;
  let mockEdit;

  beforeAll(() => {
    // Mock the DOM elements needed for testing
    document.body.innerHTML = `
      <div class="task">
        <button class="btn-task">
          <i class="fa fa-trash-can"></i>
        </button>
        <button class="btn-task">
          <i class="fa fa-ellipsis-vertical"></i>
        </button>
      </div>
      <input class="edit-todo">
    `;// add a mockup input element
    buttonTasks = document.querySelectorAll('.btn-task');

    // spy on the deleteItem and edit functions
    mockDeleteItem = jest.spyOn(clickCount, 'deleteItem');
    mockEdit = jest.spyOn(clickCount, 'edit');
  });

  it('should add click event listeners to buttons', () => {
    buttonAction();

    buttonTasks.forEach((btn) => {
      btn.click();
    });

    expect(mockDeleteItem).toHaveBeenCalledTimes(1); // Adjust the count as needed
    expect(mockEdit).toHaveBeenCalledTimes(1); // Adjust the count as needed
  });
  afterAll(() => {
    // Clean up the DOM after testing
    document.body.innerHTML = '';
  });
});
