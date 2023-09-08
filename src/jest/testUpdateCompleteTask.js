<<<<<<< HEAD
import List from '../js/List';

describe('List', () => {
  let list;

  beforeAll(() => {
    list = new List();
  });

  afterEach(() => {
    // Reset or clean up any test-specific state if necessary
  });

  it('should update a task to completed', () => {
    // Arrange: Set up a test list with some tasks and data in localStorage
    const initialData = [
      { index: 1, description: 'Task 1', completed: false },
      { index: 2, description: 'Task 2', completed: false },
    ];
    list.setLocalStorage(initialData);

    // Act: Call the update method
    list.UpdateCompleteTask(1);

    // Assert: Verify that the task was updated
    const updatedData = list.getLocalStorage();
    expect(updatedData.find((task) => task.index === 1).completed).toBe(true);
  });

  it('should update a task to uncompleted', () => {
    // Similar to the previous test, but test for UpdateUnCompleteTask
  });

  it('should update a task description', () => {
    // Arrange: Set up a test list with some tasks and data in localStorage
    const initialData = [
      { index: 1, description: 'Task 1', completed: false },
      { index: 2, description: 'Task 2', completed: false },
    ];
    list.setLocalStorage(initialData);

    // Act: Call the update method
    const newDescription = 'Updated Task 1 Description';
    list.UpdateDescriptionTask(1, newDescription);

    // Assert: Verify that the task description was updated
    const updatedData = list.getLocalStorage();
    expect(updatedData.find((task) => task.index === 1).description).toBe(newDescription);
  });

  // Write more tests for other methods neede

  afterAll(() => {
    // Clean up if necessary
  });
});
=======
import List from '../js/list.js';

// Create an instance of the List class
const myList = new List();

// Function to test the UpdateCompleteTask function
export function testUpdateCompleteTask() {
    // Choose an index to test (replace with a valid index from your data)
    const indexToUpdate = 1;

    // Call the UpdateCompleteTask function
    myList.UpdateCompleteTask(indexToUpdate);
}

// Function to test the UpdateUnCompleteTask function
export function testUpdateUnCompleteTask() {
    // Choose an index to test (replace with a valid index from your data)
    const indexToUpdate = 1;

    // Call the UpdateUnCompleteTask function
    myList.UpdateUnCompleteTask(indexToUpdate);
}
>>>>>>> fceceec8 (Add testUpdateCompleteTask.js)
