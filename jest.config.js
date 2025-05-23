const config = {
  cacheDirectory: '<rootDir>/.jest-cache',
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFiles: ['./src/test/jest/setupPromiseWarnings.ts'],
  setupFilesAfterEnv: ['<rootDir>/src/test/jest/setupTests.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  watchPathIgnorePatterns: [
    '<rootDir>/jest.json',
    '<rootDir>/test-report.json',
  ],
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
  testPathIgnorePatterns: ['src/test/playwright'],
};

export default config;
