module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_mdules', '/.next/, */.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}
