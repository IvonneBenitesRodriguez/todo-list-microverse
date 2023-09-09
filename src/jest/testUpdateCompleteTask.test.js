import List from '../js/list.js';

// Create an instance of the List class for testing
const myList = new List();

// Test suite for List class
describe('List Class', () => {
  // Test case for UpdateCompleteTask function
  test('UpdateCompleteTask should update task completed status to true', () => {
    // Arrange: Set up the initial state
    const initialData = [
      { index: 1, completed: false },
      { index: 2, completed: false },
      // Add more tasks as needed
    ];
    myList.setLocalStorage(initialData);

    // Act: Call the function to be tested
    const indexToUpdate = 1;
    myList.UpdateCompleteTask(indexToUpdate);

    // Assert: Check the updated state
    const updatedData = myList.getLocalStorage();
    const updatedTask = updatedData.find((task) => task.index === indexToUpdate);

    expect(updatedTask.completed).toBe(true);
  });

  // Test case for UpdateUnCompleteTask function
  test('UpdateUnCompleteTask should update task completed status to false', () => {
    const indexToUpdate = 1;
    myList.UpdateUnCompleteTask(indexToUpdate);

    const updatedData = myList.getLocalStorage();
    const updatedTask = updatedData.find((task) => task.index === indexToUpdate);

    expect(updatedTask.completed).toBe(false);
  });
});
