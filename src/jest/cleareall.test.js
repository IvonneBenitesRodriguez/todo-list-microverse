import List from '../js/list.js';

// Create an instance of the List class for testing
const myList = new List();

// Test suite for List class
describe('List Class', () => {
  it('should remove completed tasks and update attributes', () => {
    // Create an instance of the List class for testing

    const initialData = [
      { index: 1, completed: true, description: 'sadf jsaldfj' },
      { index: 2, completed: false, description: 'second' },
      // Add more tasks as needed
    ];
    myList.setLocalStorage(initialData);
    const data = myList.removeAllCompletedTask();
    expect(data[0].description).toBe('second');
  });
});