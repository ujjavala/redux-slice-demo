module.exports = {
    transformIgnorePatterns: ['node_modules/(?!@toolz/allow)/'],
    testEnvironment: 'jsdom',
    moduleNameMapper: {
      '^.+\\.(css|less|scss)$': 'babel-jest',
      '^.+\\.svg$': 'jest-svg-transformer'
    },
    roots: ['./src/'],
    collectCoverageFrom: ['src/**/*.js', '!src/**/index.js', '!**/node_modules/**'],
    coverageReporters: ['html', 'text', 'text-summary', 'cobertura'],
    testMatch: ['**/*.spec.js']
  }