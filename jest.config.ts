/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['./src/config/test.ts'],
  collectCoverageFrom: [],
  coveragePathIgnorePatterns: ['./src/lib/logger.ts'],
};
