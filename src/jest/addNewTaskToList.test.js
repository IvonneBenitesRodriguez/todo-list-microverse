const addNewTaskToList = require('./addNewTaskToList.js');

describe('addNewTaskToList', () => {
  it('should do something when "Enter" key is pressed', () => {
    // Mock dependencies
    const inputTodoMock = {
      addEventListener: jest.fn(),
      value: '',
    };

    const unOrderListMock = {
      appendChild: jest.fn(),
    };

    inputTodoMock.addEventListener.mockImplementation((event, callback) => {
      if (event === 'keydown') {
        callback({ key: 'Enter' });
      }
    });
    addNewTaskToList(inputTodoMock, unOrderListMock);
    // Check if appendChild method was called with specific arguments
    expect(unOrderListMock.appendChild).toHaveBeenCalledWith(expect.any(HTMLElement));
  });
});
