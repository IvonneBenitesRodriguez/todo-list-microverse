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
