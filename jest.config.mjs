export default {
  testEnvironment: 'node',
  setupFilesAfterEnv: ['./tests/setup.js'],
  transform: {
    '^.+\\.m?js$': 'babel-jest',
  },
};