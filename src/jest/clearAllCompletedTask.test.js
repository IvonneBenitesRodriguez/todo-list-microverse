import { handleClearButtonClick } from './clearAllCompletedTask.js';

// Mock the List class and list object
jest.mock('../js/list.js', () => ({
  default: jest.fn(() => ({
    removeAllCompletedTask: jest.fn().mockReturnValue([]),
  })),
}));

// test cases for handleClearButtonClick

describe('handleClearButtonClick', () => {
  it('should remove completed tasks and update attributes', () => {
    // Mock DOM elements and setup as needed
    const completedTask1 = document.createElement('div');
    completedTask1.className = 'completed';

    const completedTask2 = document.createElement('div');
    completedTask2.className = 'completed';

    document.body.appendChild(completedTask1);
    document.body.appendChild(completedTask2);

    // Mock list object
    const mockRemoveAllCompletedTask = jest.fn().mockReturnValue([]);
    const list = { removeAllCompletedTask: mockRemoveAllCompletedTask };

    handleClearButtonClick(list);

    expect(mockRemoveAllCompletedTask).toHaveBeenCalled();

    expect(document.querySelectorAll('.completed').length).toBe(0);
  });
});
