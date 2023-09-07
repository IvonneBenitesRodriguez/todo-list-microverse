// module.exports = {
//     testEnvironment: 'jsdom',
//     "testMatch": ["**/__tests__/**/*.test.js"],
//     setupFilesAfterEnv: ['./testSetup.js'],
//     transform: {
//       '^.+\\.jsx?$': 'babel-jest',
//     },
//     moduleNameMapper: {
//       '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/src/__mocks__/imageMock.js',
//       '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
//     },
//   };

module.exports = {
  testEnvironment: 'jsdom',
  testMatch: ['**/*.test.js'], // Matches all files ending with .test.js
  // setupFilesAfterEnv: ['./testSetup.js'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/src/__mocks__/imageMock.js',
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
  },
};
