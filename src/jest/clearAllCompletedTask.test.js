const clearAllCompletedTask = require('./clearAllCompletedTask.js');

// Mock the List class
jest.mock(' ./js/list', () => {
  return jest.fn().mockImplementation(() => {
    return {
      removeAllCompletedTask: jest.fn().mockReturnValue([]),
    };
  });
});

// Mock the document object and related methods
const mockQuerySelector = jest.fn();
const mockAddEventListener = jest.fn();
const mockRemove = jest.fn();

beforeEach(() => {
  global.document = {
    querySelector: mockQuerySelector,
  };
  global.document.querySelector.mockImplementation(mockQuerySelector);
});

beforeAll(() => {
  global.document.addEventListener = mockAddEventListener;
});

afterEach(() => {
  mockQuerySelector.mockClear();
  mockAddEventListener.mockClear();
  mockRemove.mockClear();
});

describe('clearAllCompletedTask', () => {
  it('should clear all completed tasks', () => {
    // Mock the elements and their behavior
    const mockClearButton = document.createElement('button');
    mockClearButton.className = 'btn-clear';

    const mockCompletedTask1 = document.createElement('div');
    mockCompletedTask1.className = 'completed';
    const mockCompletedTask2 = document.createElement('div');
    mockCompletedTask2.className = 'completed';

    mockQuerySelector.mockReturnValueOnce(mockClearButton);
    mockQuerySelector.mockReturnValueOnce([mockCompletedTask1, mockCompletedTask2]);

    // Call the function
    clearAllCompletedTask();

    // Check if the List class constructor was called
    expect(require('./list')).toHaveBeenCalled();

    // Check if removeAllCompletedTask method was called
    expect(require('./list').mock.instances[0].removeAllCompletedTask).toHaveBeenCalled();

    // Check if elements were removed
    expect(mockRemove).toHaveBeenCalledTimes(2);

    // Check if event listener was added
    expect(mockAddEventListener).toHaveBeenCalledWith('click', expect.any(Function));
  });
});
